import Input from "@/components/form/input-suggest";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import Pagination from "@/components/ui/Pagination";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Input Suggestion" subtitle="Input Suggestion" />
      <Wrapper>
        <Input />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("input")}
        next={ROUTES.formUrl("input-dynamic")}
      />
    </div>
  );
}
