import Button from "@/components/shared/component/Button";

export default function Page() {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Button text="solid" variant="solid" />
      <Button text="outline" variant="outline"  />
      <Button text="danger" variant="danger"  />
      <Button text="text" variant="text" />
    </div>
  );
}
