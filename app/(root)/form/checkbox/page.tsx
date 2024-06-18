import Checkbox from "@/components/form/checkbox";
import CheckboxVariant from "@/components/form/checkbox/variant";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Checkbox" subtitle="Checkbox" />
      <Wrapper>
        <Checkbox />
      </Wrapper>
      <Title subtitle="Variant" />
      <Wrapper>
        <CheckboxVariant />
      </Wrapper>
    </div>
  );
}
