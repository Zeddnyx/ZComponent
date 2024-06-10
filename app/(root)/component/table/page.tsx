import Table from "@/components/component/table";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Table" subtitle="table" />
      <Wrapper>
        <Table />
      </Wrapper>
      <Pagination
        prev={ROUTES.componentUrl("button")}
        next={ROUTES.componentUrl("modal")}
      />
    </div>
  );
}
