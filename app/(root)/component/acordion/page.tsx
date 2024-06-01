import Acordion from "@/components/component/acordion";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Acordion" subtitle="Acordion Variant" />
      <Wrapper>
        <Acordion />
      </Wrapper>
      <Pagination prev={ROUTES.formUrl("otp")} next={ROUTES.componentUrl("button")} />
    </div>
  );
}