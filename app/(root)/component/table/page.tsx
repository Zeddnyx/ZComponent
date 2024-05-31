import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Input" subtitle="Input" />
      <Wrapper>
        <div></div>
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("button")}
        next={ROUTES.formUrl("/")}
      />
    </div>
  );
}
