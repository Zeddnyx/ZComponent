import Modal from "@/components/component/modal/modal";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Modal" subtitle="Modal" />
      <Wrapper>
        <Modal />
      </Wrapper>
    </div>
  );
}
