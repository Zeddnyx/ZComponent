export default function highlightText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} style={{ fontWeight: "bold" }}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
