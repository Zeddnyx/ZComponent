import ScrollReveal from "@/components/animation/scroll-reveal";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Scroll Reveal" subtitle="normal" />
      <Wrapper className="!h-[120vh] pt-80 flex justify-center items-center">
        <ScrollReveal />
      </Wrapper>
      <Pagination
        prev={ROUTES.componentUrl("canban")}
        next={ROUTES.animationUrl("/scroll-reveal")}
      />
    </div>
  );
}
