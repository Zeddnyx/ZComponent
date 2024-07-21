import ScrollReveal from "@/components/animation/scroll-reveal";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Scroll Reveal" subtitle="normal" />
      <Wrapper className="!h-[120vh] pt-80 flex justify-center items-center">
        <ScrollReveal />
      </Wrapper>
    </div>
  );
}
