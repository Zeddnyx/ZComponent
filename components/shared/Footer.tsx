import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <span>
      {SOCIAL.map((item, id) => {
        return (
          <span key={id} className="flex items-center gap-2">
            <p className="text-14">{item.short_title}</p>
            <Link
              href={item.href}
              target="_blank"
              className="flex items-center gap-2 text-14 underline"
            >
              <p>{item.title}</p>
            </Link>
          </span>
        );
      })}
    </span>
  );
}

const SOCIAL = [
  {
    title: "Star on GitHub",
    href: "https://github.com/Zeddnyx/ZComponent",
    short_title: "Like this project?",
    icon: FaGithub,
  },
];
