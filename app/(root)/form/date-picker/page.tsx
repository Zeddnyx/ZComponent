import DatePicker from "@/components/ui/form/DatePicker";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Date Picker " subtitle="Default" />
      <Wrapper>
        <DatePicker />
      </Wrapper>
    </div>
  );
}
