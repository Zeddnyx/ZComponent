import Movable from "@/components/component/movable";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title subtitle="Movable" />
      <Wrapper>
        <Movable />
      </Wrapper>
    </div>
  );
}
