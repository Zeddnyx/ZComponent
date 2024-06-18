import Gallery from "@/components/component/gallery";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

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
