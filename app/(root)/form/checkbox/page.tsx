import Checkbox from "@/components/form/checkbox";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Checkbox" subtitle="Checkbox" />
      <Wrapper>
        <Checkbox />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("dropdown")}
        next={ROUTES.formUrl("otp")}
      />
    </div>
  );
}
