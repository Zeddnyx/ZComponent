import Input from "@/components/form/input";
import InputVariant from "@/components/form/input/input-variant";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Input" subtitle="Input" />
      <Wrapper>
        <Input />
      </Wrapper>
      <Title subtitle="Input Variant" />
      <Wrapper>
        <InputVariant />
      </Wrapper>
    </div>
  );
}
