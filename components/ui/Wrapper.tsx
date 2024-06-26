export default function Wrapper({ children,className }: { children: React.ReactNode,className?:string }) {
  return <div className={`${className} w-full stripes diagonal my-2 mb-4 rounded-lg border border-dark-900 p-10 `}>{children}</div>;
}
