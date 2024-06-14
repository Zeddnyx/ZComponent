import Dropdown from "@/components/form/dropdown";
import DropdownVariant from "@/components/form/dropdown/dropdown-variant";
import DropdownCheckbox from "@/components/form/dropdown/dropdown-checkbox";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

export default function Page() {
  return (
    <div>
      <Title title="Dropdown" subtitle="Default" />
      <Wrapper>
        <Dropdown />
      </Wrapper>
      <Title subtitle="DropDown Variant" />
      <Wrapper>
        <DropdownVariant />
      </Wrapper>
      <Title subtitle="DropDown Checkbox" />
      <Wrapper>
        <DropdownCheckbox />
      </Wrapper>
      <Pagination
        prev={ROUTES.formUrl("textarea")}
        next={ROUTES.formUrl("checkbox")}
      />
    </div>
  );
}
