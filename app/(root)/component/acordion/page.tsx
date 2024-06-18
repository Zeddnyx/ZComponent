import Acordion from "@/components/component/acordion";
import AcordionImage from "@/components/component/acordion/image";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Acordion" subtitle="Acordion Variant" />
      <Wrapper>
        <Acordion />
      </Wrapper>
      <Title subtitle="Acordion Image" />
      <Wrapper>
        <AcordionImage />
      </Wrapper>
    </div>
  );
}
