export default function Wrapper({ children,className }: { children: React.ReactNode,className?:string }) {
  return <div className={`${className} stripes diagonal mb-10 mt-2 rounded-lg border border-dark-900 p-10 `}>{children}</div>;
}
