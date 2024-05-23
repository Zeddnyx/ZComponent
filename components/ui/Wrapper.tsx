export default function Wrapper({ children,className }: { children: React.ReactNode,className?:string }) {
  return <div className={`${className} mb-28 mt-5 rounded-lg border border-dark-900 p-20`}>{children}</div>;
}
