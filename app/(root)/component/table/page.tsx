import Table from "@/components/component/table";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Table" subtitle="table" />
      <Wrapper>
        <Table />
      </Wrapper>
    </div>
  );
}
