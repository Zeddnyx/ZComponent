import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";
import Switch from "@/components/form/switch";

export default function Page() {
  return (
    <div>
      <Title title="Checkbox" subtitle="Checkbox" />
      <Wrapper>
        <Switch />
      </Wrapper>
    </div>
  );
}
