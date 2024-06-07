import Canban from "@/components/component/canban";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Canban" subtitle="canban" />
      <Wrapper>
        <Canban />
      </Wrapper>
      <Pagination prev={ROUTES.formUrl("gallery")} next={ROUTES.formUrl("/")} />
    </div>
  );
}
