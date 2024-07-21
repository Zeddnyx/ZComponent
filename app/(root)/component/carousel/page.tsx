import Carousel from "@/components/component/carousel";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Carousel" subtitle="Carousel" />
      <Wrapper>
        <Carousel />
      </Wrapper>
    </div>
  );
}
