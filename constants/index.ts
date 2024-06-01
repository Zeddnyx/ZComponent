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
      {
        title: "paralax",
        href: ROUTES.componentUrl("paralax"),
      },
    ],
  },
];

export const OPTOONS = [
  {
    label: "Reading",
    value: "reading",
  },
  {
    label: "Gardening",
    value: "gardening",
  },
  {
    label: "Photography",
    value: "photography",
  },
  {
    label: "Cooking",
    value: "cooking",
  },
  {
    label: "Traveling",
    value: "traveling",
  },
  {
    label: "Fishing",
    value: "fishing",
  },
  {
    label: "Drawing",
    value: "drawing",
  },
  {
    label: "Cycling",
    value: "cycling",
  },
  {
    label: "Knitting",
    value: "knitting",
  },
  {
    label: "Hiking",
    value: "hiking",
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

export const randomItems = [
  {
    title: "First Item",
    image: "https://source.unsplash.com/random/800x450?sunny,orange",
    description:
      "This is the description for the first item. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
  },
  {
    title: "Second Item",
    image: "https://source.unsplash.com/random/800x450?city,night",
    description: "This is the description for the second item.",
  },
  {
    title: "Third Item",
    image: "https://source.unsplash.com/random/800x450?dark,green",
    description: "This is the description for the third item.",
  },
  {
    title: "Fourth Item",
    image: "https://source.unsplash.com/random/800x450?nature,water",
    description: "This is the description for the fourth item.",
  },
  {
    title: "Fifth Item",
    image: "https://source.unsplash.com/random/800x450?space,dark",
    description:
      "This is the description for the first item. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
  },
];
