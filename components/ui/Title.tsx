interface ITitle {
  title?: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: ITitle) {
  return (
    <div>
      <h2 className="text-30 font-bold py-2">{title}</h2>
      <h3 className="text-16 font-bold text-light-800">
        <span className="text-primary">#</span>
        {subtitle}
      </h3>
    </div>
  );
}
