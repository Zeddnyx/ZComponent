import Textarea from "@/components/form/textarea";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

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
