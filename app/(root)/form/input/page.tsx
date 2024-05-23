import Input from "@/components/form/input";
import InputVariant from "@/components/form/input/input-variant";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Input" subtitle="Input" />
      <Wrapper className="md:px-40">
        <Input />
      </Wrapper>
      <Title  subtitle="Input Variant" />
      <Wrapper className="md:px-40">
        <InputVariant />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("input")}
        next={ROUTES.formUrl("input-suggest")}
      />
    </div>
  );
}
