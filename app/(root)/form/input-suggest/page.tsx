import Input from "@/components/form/input-suggest";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Input Suggestion" subtitle="Input Suggestion" />
      <Wrapper>
        <Input />
      </Wrapper>
    </div>
  );
}
