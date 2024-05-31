import Button from "@/components/ui/component/Button";

export default function Page() {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Button text="xs" size="xs" />
      <Button text="sm" size="sm" />
      <Button text="md" size="md" />
      <Button text="lg" size="lg" />
      <Button text="xl" size="xl" />
    </div>
  );
}
