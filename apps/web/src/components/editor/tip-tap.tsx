"use client";
import SlashCommand from "@/extensions/slash-command/slash-command";
import "./styles.scss";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState, useCallback } from "react";
import DragHandle from "@tiptap-pro/extension-drag-handle-react";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import { Mention } from "@tiptap/extension-mention";
import { FloatingMenuBar } from "./floating-menu-bar";
import { Plus } from "@phosphor-icons/react";
import { useToast } from "@/hooks/use-toast";
import suggestion from "@/extensions/suggestion/suggestion";
import { saveDocument } from "@/app/actions/documents";
import { AiAutocompleteExtension } from "@/extensions/ai-autocomplete/ai-autocomplete";
import { CustomLink } from "@/extensions/custom-link/custom-link";
import debounce from "lodash/debounce";

interface TiptapProps {
  documentId: string;
  initialContent: any;
}
export default ({ documentId, initialContent }: TiptapProps) => {
  const { toast } = useToast();
  const [isEditorLoading, setIsEditorLoading] = useState(true);

  const debouncedSave = useCallback(
    debounce(async (editor) => {
      try {
        await saveDocument(
          documentId,
          JSON.parse(JSON.stringify(editor.getJSON()))
        );
      } catch (error) {
        console.error("Auto-save error:", error);
        toast({
          title: "Error saving document",
          description: "Your changes could not be saved",
          variant: "destructive",
        });
      }
    }, 500),
    [documentId]
  );

  const editor = useEditor({
    content: initialContent,
    immediatelyRender: true,
    extensions: [
      StarterKit.configure(),

      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion: suggestion as any,
      }),
      SlashCommand,
      Highlight,
      Placeholder.configure({
        placeholder: ({ node }) => {
          return "Enter a heading or press '/' for commands";
        },
      }),
      Underline,
      CustomLink.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );
            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            if (disallowedDomains.includes(parsedUrl.hostname)) {
              return false;
            }

            return true;
          } catch (error) {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);
            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            return !disallowedDomains.includes(parsedUrl.hostname);
          } catch (error) {
            return false;
          }
        },
      }),
    ].filter(Boolean),
    onBeforeCreate: () => {
      setIsEditorLoading(true);
    },
    onCreate: () => {
      setIsEditorLoading(false);
    },
    onUpdate: ({ editor }) => {
      debouncedSave(editor);
    },
  });

  React.useEffect(() => {
    return () => {
      debouncedSave.cancel();
    };
  }, [debouncedSave]);

  const handlePlusClick = () => {
    if (editor) {
      // Move cursor to end of document
      editor.commands.selectParentNode();
      editor.commands.setTextSelection(editor.state.doc.content.size);

      // Create a new paragraph
      editor.chain().insertContent("<p>/</p>").focus().run();
    }
  };

  if (!editor) return null;

  return (
    <>
      {editor && <FloatingMenuBar editor={editor} />}

      <div className="flex items-center">
        <DragHandle editor={editor}>
          <button
            onClick={handlePlusClick}
            className="p-1.5 text-base hover:bg-muted rounded-sm mr-[3.25rem] text-black/50"
          >
            <Plus weight="bold" size={12} />
          </button>
        </DragHandle>
      </div>

      <EditorContent editor={editor} className="text-sm max-w-4xl" />
    </>
  );
};
