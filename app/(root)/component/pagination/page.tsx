import Pagination from "@/components/component/pagination";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

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
