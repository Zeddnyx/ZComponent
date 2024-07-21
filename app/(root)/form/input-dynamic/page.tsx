import Input from "@/components/form/input-dynamic";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Input Dynamic " subtitle="Default" />
      <Wrapper>
        <Input />
      </Wrapper>
    </div>
  );
}
