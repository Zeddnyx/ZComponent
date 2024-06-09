import Gallery from "@/components/component/gallery";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Gallery" subtitle="gallery" />
      <Wrapper>
        <Gallery />
      </Wrapper>
      <Pagination prev={ROUTES.componentUrl("paralax")} next={ROUTES.componentUrl("/canban")} />
    </div>
  );
}
