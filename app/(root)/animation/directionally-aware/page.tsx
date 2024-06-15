import DirectionallyAware from "@/components/animation/directionally-aware";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Directionally Aware" subtitle="" />
      <Wrapper>
        <DirectionallyAware />
      </Wrapper>
      <Pagination
        prev={ROUTES.componentUrl("canban")}
        next={ROUTES.animationUrl("/scroll-reveal")}
      />
    </div>
  );
}
