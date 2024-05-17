interface ITitle {
  title?: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: ITitle) {
  return (
    <div>
      <h2 className="text-2xl font-bold py-2">{title}</h2>
      <h3 className="text-base font-bold text-light-800">
        <span className="text-primary">#</span>
        {subtitle}
      </h3>
    </div>
  );
}
