import Button from "@/components/ui/Button";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <div className="max-w-[1400px] mx-auto px-5 flex flex-col justify-center gap-4 h-dvh animate-fade-in8">
      <h1>ZComponent</h1>
      <h2 className="text-5xl xl:text-7xl font-bold  md:w-9/12">
        Crafted Components, Flawless Performance and Simplicity
      </h2>
      <p>Full control on your hand</p>
      <div className="flex gap-4 md:w-6/12 *:!rounded-full pt-8">
        <Button
          href="/form/input"
          text={"See Component"}
          className="!bg-light !text-dark"
        />
        <Button
          variant="outline"
          href="https://github.com/Zeddnyx/ZComponent"
          text={
            <p className="flex items-center gap-2 justify-center">
              See on GitHub <FaGithub className="size-5" />
            </p>
          }
        />
      </div>
    </div>
  );
}
