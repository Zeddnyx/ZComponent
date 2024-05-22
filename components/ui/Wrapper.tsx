export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="mb-28 mt-5 rounded-lg border border-dark-700 p-20">{children}</div>;
}
