import Pagination from "@/components/component/pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Pagination" subtitle="default" />
      <Wrapper>
        <Pagination />
      </Wrapper>
    </div>
  );
}
