import ScrollBased from "@/components/animation/scroll-based";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Scroll Based" subtitle="image animation" />
      <Wrapper className="!h-dvh flex justify-center items-center">
        <ScrollBased />
      </Wrapper>
      <Pagination
        prev={ROUTES.animationUrl("scroll-reveal")}
        next={ROUTES.animationUrl("directionally-aware")}
      />
    </div>
  );
}
