import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <p>Follow me on:</p>
      <span>
        {SOCIAL.map((item, id) => {
          return (
            <Link key={id} href={item.href} target="_blank" className="flex items-center gap-2">
              <item.icon /> <p>{item.title}</p>
            </Link>
          );
        })}
      </span>
    </div>
  );
}

const SOCIAL = [
  {
    title: "Github",
    href: "https://github.com/Zeddnyx",
    icon: FaGithub,
  },
];
