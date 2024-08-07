import { AiOutlineForm } from "react-icons/ai";
import { BiSolidComponent } from "react-icons/bi";
import { MdOutlineAnimation } from "react-icons/md";

import { ROUTES } from "@/configs/routes";

export const SIDEBAR_ITEMS: ISidebar[] = [
  {
    icon: AiOutlineForm,
    title: "Form",
    href: "/form",
    isMaintenance: false,
    children: [
      {
        title: "Input",
        href: ROUTES.formUrl("input"),
        isMaintenance: false,
      },
      {
        title: "Input Suggestion",
        href: ROUTES.formUrl("input-suggest"),
        isMaintenance: false,
      },
      {
        title: "Input Tag",
        href: ROUTES.formUrl("input-tag"),
        isMaintenance: false,
      },
      {
        title: "Input Dynamic",
        href: ROUTES.formUrl("input-dynamic"),
        isMaintenance: false,
      },
      {
        title: "Input File",
        href: ROUTES.formUrl("input-file"),
        isMaintenance: false,
      },
      {
        title: "Textarea",
        href: ROUTES.formUrl("textarea"),
        isMaintenance: false,
      },
      {
        title: "Dropdown",
        href: ROUTES.formUrl("dropdown"),
        isMaintenance: false,
      },
      {
        title: "Date Picker",
        href: ROUTES.formUrl("date-picker"),
        isMaintenance: true,
      },
      {
        title: "Time Picker",
        href: ROUTES.formUrl("time-picker"),
        isMaintenance: true,
      },
      {
        title: "Checkbox",
        href: ROUTES.formUrl("checkbox"),
        isMaintenance: false,
      },
      {
        title: "Switch",
        href: ROUTES.formUrl("switch"),
        isMaintenance: false,
      },
      {
        title: "Otp",
        href: ROUTES.formUrl("otp"),
        isMaintenance: false,
      },
    ],
  },
  {
    icon: BiSolidComponent,
    title: "Component",
    href: "/component",
    isMaintenance: false,
    children: [
      {
        title: "acordion",
        href: ROUTES.componentUrl("acordion"),
        isMaintenance: false,
      },
      {
        title: "button",
        href: ROUTES.componentUrl("button"),
        isMaintenance: false,
      },
      {
        title: "table",
        href: ROUTES.componentUrl("table"),
        isMaintenance: false,
      },
      {
        title: "modal",
        href: ROUTES.componentUrl("modal"),
        isMaintenance: false,
      },
      {
        title: "paralax",
        href: ROUTES.componentUrl("paralax"),
        isMaintenance: false,
      },
      {
        title: "gallery",
        href: ROUTES.componentUrl("gallery"),
        isMaintenance: false,
      },
      {
        title: "carousel",
        href: ROUTES.componentUrl("carousel"),
        isMaintenance: false,
      },
      {
        title: "canban",
        href: ROUTES.componentUrl("canban"),
        isMaintenance: false,
      },
      {
        title: "movable",
        href: ROUTES.componentUrl("movable"),
        isMaintenance: false,
      },
      {
        title: "pagination",
        href: ROUTES.componentUrl("pagination"),
        isMaintenance: false,
      },
    ],
  },
  {
    icon: MdOutlineAnimation,
    title: "Animation",
    href: "/animation",
    isMaintenance: false,
    children: [
      {
        title: "Scroll Reveal",
        href: ROUTES.animationUrl("scroll-reveal"),
        isMaintenance: false,
      },
      {
        title: "Scroll Based",
        href: ROUTES.animationUrl("scroll-based"),
        isMaintenance: false,
      },
      {
        title: "Scroll Opacity",
        href: ROUTES.animationUrl("scroll-opacity"),
        isMaintenance: true,
      },
      {
        title: "Directionally Aware",
        href: ROUTES.animationUrl("directionally-aware"),
        isMaintenance: false,
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
  "alice",
  "bob",
  "charlie",
  "david",
  "emma",
  "fiona",
  "george",
  "hannah",
  "isla",
  "jack",
  "kara",
  "liam",
  "mia",
  "noah",
  "olivia",
  "paul",
  "quinn",
  "ryan",
  "sophia",
  "tom",
  "uma",
  "victor",
  "wendy",
  "xander",
  "yara",
  "zane",
];

export const RANDOM_ITEMS = [
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

export const RANDOM_IMAGE = [
  "https://source.unsplash.com/random?sunny,orange",
  "https://source.unsplash.com/random?city,night",
  "https://source.unsplash.com/random?dark,green",
  "https://source.unsplash.com/random?nature,water",
  "https://source.unsplash.com/random?space,dark",
  "https://source.unsplash.com/random?rain,dark",
  "https://source.unsplash.com/random?nature,day",
  "https://source.unsplash.com/random?apocalyps,fresh",
  "https://source.unsplash.com/random?nature,water",
  "https://source.unsplash.com/random?space,aestatic",
  "https://source.unsplash.com/random?rain,dark",
  "https://source.unsplash.com/random?nature,day",
  "https://source.unsplash.com/random?programing,fresh",
  "https://source.unsplash.com/random?nature,water",
  "https://source.unsplash.com/random?rain,dark",
  "https://source.unsplash.com/random?anime,summer",
  "https://source.unsplash.com/random?apocalyps,cool",
  "https://source.unsplash.com/random?space,dark",
  "https://source.unsplash.com/random?rain,dark",
  "https://source.unsplash.com/random?nature,day",
  "https://source.unsplash.com/random?apocalyps,fresh",
  "https://source.unsplash.com/random?nature,water",
  "https://source.unsplash.com/random?space,aestatic",
  "https://source.unsplash.com/random?rain,dark",
  "https://source.unsplash.com/random?nature,day",
  "https://source.unsplash.com/random?nature,water",
  "https://source.unsplash.com/random?happy,aestatic",
];
