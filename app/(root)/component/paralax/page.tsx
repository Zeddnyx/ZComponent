import Paralax from "@/components/component/paralax";
import ParalaxWithContent from "@/components/component/paralax/with-content";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Paralax" subtitle="Paralax" />
      <Wrapper>
        <Paralax />
      </Wrapper>
      <Title title="" subtitle="Paralax with content" />
      <Wrapper>
        <ParalaxWithContent />
      </Wrapper>
      <Pagination prev={ROUTES.componentUrl("modal")} next={ROUTES.componentUrl("/gallery")} />
    </div>
  );
}
