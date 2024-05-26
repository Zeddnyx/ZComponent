import Textarea from "@/components/form/input-textarea";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Textarea" subtitle="Textarea" />
      <Wrapper>
        <Textarea />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("input-dynamic")}
        next={ROUTES.formUrl("dropdown")}
      />
    </div>
  );
}
