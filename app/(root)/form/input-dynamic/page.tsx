import Input from "@/components/form/input-dynamic";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import Pagination from "@/components/ui/Pagination";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Dynamic Input" subtitle="Dynamic Input" />
      <Wrapper>
        <Input />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("input-suggest")}
        next={ROUTES.formUrl("input-textarea")}
      />
    </div>
  );
}
