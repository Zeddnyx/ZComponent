import Dropdown from "@/components/form/dropdown";
import DropdownVariant from "@/components/form/dropdown/dropdown-variant";
import DropdownCheckbox from "@/components/form/dropdown/dropdown-checkbox";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

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
    </div>
  );
}
