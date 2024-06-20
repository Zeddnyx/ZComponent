import Carousel from "@/components/component/carousel";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Canban" subtitle="canban" />
      <Wrapper>
        <Carousel />
      </Wrapper>
    </div>
  );
}
