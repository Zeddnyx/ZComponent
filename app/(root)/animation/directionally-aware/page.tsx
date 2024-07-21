import DirectionallyAware from "@/components/animation/directionally-aware";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

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
