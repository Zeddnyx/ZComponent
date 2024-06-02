import InputTag from "@/components/form/input-tag";
import InputTagSearch from "@/components/form/input-tag/tag-search";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import Pagination from "@/components/ui/Pagination";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Input Tag" subtitle="Input Tag" />
      <Wrapper>
        <InputTag />
      </Wrapper>
      <Title title="" subtitle="Input Tag Search" />
      <Wrapper>
        <InputTagSearch />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("input-suggest")}
        next={ROUTES.formUrl("input-dynamic")}
      />
    </div>
  );
}
