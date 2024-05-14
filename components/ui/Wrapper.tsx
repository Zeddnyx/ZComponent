export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="stripes diagonal rounded-lg border border-dark-700 p-10">{children}</div>;
}
