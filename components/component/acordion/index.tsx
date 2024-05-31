import Acordion from "@/components/ui/component/Acordion";

export default function Index() {
  return (
    <div>
      <Acordion title="Title 1" variant="solid">
        <div>jasjasj</div>
      </Acordion>
      <Acordion title="Title 2" variant="underline">
        <div>jasjasj</div>
        <div>jasjasj</div>
      </Acordion>
      <Acordion title="Title 3" variant="none">
        <div>jasjasj</div>
      </Acordion>
    </div>
  );
}
