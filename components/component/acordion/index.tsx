import Acordion from "@/components/ui/component/Acordion";

export default function Index() {
  return (
    <div className="grid gap-2">
      <Acordion title="Solid" variant="solid">
        <div>jasjasj</div>
      </Acordion>
      <Acordion title="Underline" variant="underline">
        <div>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </div>
      </Acordion>
      <Acordion title="None" variant="none">
        <div>jasjasj</div>
      </Acordion>
    </div>
  );
}
