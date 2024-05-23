import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <div className="max-w-[1400px] mx-auto px-5 flex flex-col justify-center gap-4 h-dvh">
      <h1>ZComponent</h1>
      <h2 className="text-5xl xl:text-7xl font-bold  md:w-9/12">
        The alternative component with less third-party dependencies
      </h2>
      <p>Full control on your hand</p>
      <div className="flex gap-4 md:w-6/12 *:rounded-full pt-8">
        <Button text={<Link href="/form/input">See Component</Link>} />
        <Button
          variant="outline"
          text={
            <Link
              href="https://github.com/Zeddnyx/ZComponent"
              target="_blank"
              className="flex gap-2 items-center"
            >
              See on GitHub <FaGithub className="size-5" />
            </Link>
          }
        />
      </div>
    </div>
  );
}
