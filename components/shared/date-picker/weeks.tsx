export default function Weeks() {
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="grid grid-cols-7 gap-1 pt-2 w-fit">
      {DAYS.map((day) => (
        <p key={day} className="size-8">
          {day}
        </p>
      ))}
    </div>
  );
}
