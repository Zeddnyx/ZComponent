import { AiOutlineForm } from "react-icons/ai";
import { BiSolidComponent } from "react-icons/bi";

import { ROUTES } from "@/configs/routes";

export const SIDEBAR_ITEMS: ISidebar[] = [
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
        href: ROUTES.formUrl("otp"),
      },
    ],
  },
  {
    icon: BiSolidComponent,
    title: "Component",
    href: "/component",
    children: [
      {
        title: "acordion",
        href: ROUTES.componentUrl("acordion"),
      },
      {
        title: "button",
        href: ROUTES.componentUrl("button"),
      },
      {
        title: "table",
        href: ROUTES.componentUrl("table"),
      },
      {
        title: "modal",
        href: ROUTES.componentUrl("modal"),
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

export const RANDOM_NAME = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Fiona",
  "George",
  "Hannah",
  "Isla",
  "Jack",
  "Kara",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Paul",
  "Quinn",
  "Ryan",
  "Sophia",
  "Tom",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
];
