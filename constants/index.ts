import { AiOutlineForm } from "react-icons/ai";
import { RxButton } from "react-icons/rx";
import { GoTable } from "react-icons/go";

import { ROUTES } from "@/configs/routes";

export const sidebarItems: ISidebar[] = [
  {
    icon: AiOutlineForm,
    title: "Form",
    href: "/form",
    children: [
      {
        title: "Input",
        href: ROUTES.formUrl("input"),
      },
      {
        title: "Input Suggestion",
        href: ROUTES.formUrl("input-suggest"),
      },
      {
        title: "Input Dynamic",
        href: ROUTES.formUrl("input-dynamic"),
      },
      {
        title: "Textarea",
        href: ROUTES.formUrl("textarea"),
      },
      {
        title: "Dropdown",
        href: ROUTES.formUrl("dropdown"),
      },
      {
        title: "Dropdown Search",
        href: ROUTES.formUrl("dropdown-search"),
      },
      {
        title: "Checkbox",
        href: ROUTES.formUrl("checkbox"),
      },
      {
        title: "Otp",
        href: ROUTES.formUrl("radio"),
      },
    ],
  },
  {
    icon: RxButton,
    title: "Button",
    href: "/button",
    children: [
      {
        title: "button",
        href: ROUTES.buttonUrl("button"),
      },
    ],
  },
  {
    icon: GoTable,
    title: "Table",
    href: "/table",
    children: [
      {
        title: "table",
        href: ROUTES.tableUrl("table"),
      },
    ],
  },
];

export const OPTOONS = [
  {
    label: "Jhon",
    value: "232323jdwjwoe2",
  },
  {
    label: "Alex",
    value: "2i3jdwhsasswhhs",
  },
  {
    label: "Lisa",
    value: "232323jdwjwoe2",
  },
  {
    label: "Brad",
    value: "232323jdwjwoe2",
  },
  {
    label: "Peep",
    value: "232323jdwjwoe2",
  },
  {
    label: "Doe",
    value: "232323jdwjwoe2",
  },
  {
    label: "Jhon Doe",
    value: "232323jdwjwoe2",
  },
  {
    label: "Bram",
    value: "232323jdwjwoe2",
  },
];
