import Gallery from "@/components/component/gallery";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Gallery" subtitle="gallery" />
      <Wrapper>
        <Gallery />
      </Wrapper>
    </div>
  );
}
