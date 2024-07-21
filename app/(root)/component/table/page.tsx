import Table from "@/components/component/table";
import TableCheckbox from "@/components/component/table/with-checkbox";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div className="w-full">
      <Title title="Table" subtitle="default" />
      <Wrapper>
        <Table />
      </Wrapper>
      <Title subtitle="Table with checkbox" />
      <Wrapper>
        <TableCheckbox />
      </Wrapper>
    </div>
  );
}
