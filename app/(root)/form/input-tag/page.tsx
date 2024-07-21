import InputTag from "@/components/form/input-tag";
import InputTagSearch from "@/components/form/input-tag/tag-search";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Input Tag" subtitle="Input Tag" />
      <Wrapper>
        <InputTag />
      </Wrapper>
      <Title title="" subtitle="Input Tag Search" />
      <Wrapper>
        <InputTagSearch />
      </Wrapper>
    </div>
  );
}
