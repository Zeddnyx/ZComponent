import Textarea from "@/components/form/textarea";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Textarea" subtitle="Textarea" />
      <Wrapper>
        <Textarea />
      </Wrapper>
    </div>
  );
}
