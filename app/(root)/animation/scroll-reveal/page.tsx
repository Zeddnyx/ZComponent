import ScrollReveal from "@/components/animation/scroll-reveal";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

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
