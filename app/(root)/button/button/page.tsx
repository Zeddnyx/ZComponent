import ButtonSizes from "@/components/button/button-sizes";
import ButtonVariant from "@/components/button/button-variant";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Button" subtitle="Button sizes" />
      <Wrapper>
        <ButtonSizes />
      </Wrapper>
      <Title title="" subtitle="Button variant" />
      <Wrapper>
        <ButtonVariant />
      </Wrapper>
      <Pagination prev={ROUTES.formUrl("otp")} next={ROUTES.formUrl("table")} />
    </div>
  );
}
