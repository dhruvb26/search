import {
  Quotes,
  TextHOne,
  TextHThree,
  TextHTwo,
  ListBullets,
  ListNumbers,
  CodeSimple,
  TextT,
} from "@phosphor-icons/react";
import { Group } from "./types";

export const GROUPS: Group[] = [
  {
    name: "format",
    title: "Format",
    icon: <TextHOne />,
    commands: [
      {
        name: "text",
        label: "Text",
        iconName: "Text",
        description: "Normal text",
        action: (editor) => {
          editor.chain().focus().setParagraph().run();
        },
        icon: <TextT />,
      },
      {
        name: "heading1",
        label: "Heading 1",
        iconName: "Heading1",
        description: "High priority section title",
        aliases: ["h1"],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 1 }).run();
        },
        icon: <TextHOne />,
      },
      {
        name: "heading2",
        label: "Heading 2",
        iconName: "Heading2",
        description: "Medium priority section title",
        aliases: ["h2"],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 2 }).run();
        },
        icon: <TextHTwo />,
      },
      {
        name: "heading3",
        label: "Heading 3",
        iconName: "Heading3",
        description: "Low priority section title",
        aliases: ["h3"],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 3 }).run();
        },
        icon: <TextHThree />,
      },
      {
        name: "bulletList",
        label: "Bullet List",
        iconName: "List",
        description: "Unordered list of items",
        aliases: ["ul"],
        action: (editor) => {
          editor.chain().focus().toggleBulletList().run();
        },
        icon: <ListBullets />,
      },
      {
        name: "numberedList",
        label: "Numbered List",
        iconName: "ListOrdered",
        description: "Ordered list of items",
        aliases: ["ol"],
        action: (editor) => {
          editor.chain().focus().toggleOrderedList().run();
        },
        icon: <ListNumbers />,
      },
      {
        name: "blockquote",
        label: "Blockquote",
        iconName: "Quote",
        description: "Element for quoting",
        action: (editor) => {
          editor.chain().focus().setBlockquote().run();
        },
        icon: <Quotes />,
      },
      {
        name: "codeBlock",
        label: "Code Block",
        iconName: "Code",
        description: "Wrap text in code block",
        action: (editor) => {
          editor.chain().focus().setCodeBlock().run();
        },
        icon: <CodeSimple />,
      },
    ],
  },
];

export default GROUPS;