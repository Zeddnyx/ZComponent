import Paralax from "@/components/component/paralax";
import ParalaxWithContent from "@/components/component/paralax/with-content";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Paralax" subtitle="Paralax" />
      <Wrapper>
        <Paralax />
      </Wrapper>
      <Title title="" subtitle="Paralax with content" />
      <Wrapper>
        <ParalaxWithContent />
      </Wrapper>
    </div>
  );
}
