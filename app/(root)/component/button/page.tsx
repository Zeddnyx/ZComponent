import ButtonSizes from "@/components/component/button/button-sizes";
import ButtonVariant from "@/components/component/button/button-variant";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Button" subtitle="Custome sizes" />
      <Wrapper>
        <ButtonSizes />
      </Wrapper>
      <Title title="" subtitle="Button variant" />
      <Wrapper>
        <ButtonVariant />
      </Wrapper>
    </div>
  );
}
