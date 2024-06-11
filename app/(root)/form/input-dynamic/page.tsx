import Input from "@/components/form/input-dynamic";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import Pagination from "@/components/ui/Pagination";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Input Dynamic " subtitle="Default" />
      <Wrapper>
        <Input />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("input-tag")}
        next={ROUTES.formUrl("input-file")}
      />
    </div>
  );
}
