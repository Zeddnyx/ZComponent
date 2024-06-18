import DirectionallyAware from "@/components/animation/directionally-aware";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Directionally Aware" subtitle="" />
      <Wrapper>
        <DirectionallyAware />
      </Wrapper>
    </div>
  );
}
