import ScrollBased from "@/components/animation/scroll-based";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Scroll Based" subtitle="image animation" />
      <Wrapper className="!h-dvh flex justify-center items-center">
        <ScrollBased />
      </Wrapper>
    </div>
  );
}
