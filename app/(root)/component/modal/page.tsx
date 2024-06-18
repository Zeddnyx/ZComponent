import Modal from "@/components/component/modal/modal";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

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
