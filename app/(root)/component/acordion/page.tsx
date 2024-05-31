import Acordion from "@/components/component/acordion";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Button" subtitle="Custome sizes" />
      <Wrapper>
        <Acordion />
      </Wrapper>
      <Pagination prev={ROUTES.formUrl("otp")} next={ROUTES.formUrl("table")} />
    </div>
  );
}
