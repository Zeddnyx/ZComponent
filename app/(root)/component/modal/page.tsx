import Modal from "@/components/component/modal/modal";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Modal" subtitle="Modal" />
      <Wrapper>
        <Modal />
      </Wrapper>
      <Pagination prev={ROUTES.componentUrl("table")} next={ROUTES.componentUrl("")} />
    </div>
  );
}
