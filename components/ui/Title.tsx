interface ITitle {
  title: string;
}

export default function Title({ title }: ITitle) {
  return (
    <h2 className="text-lg font-bold py-2">
      <span className="text-primary">#</span>
      {title}
    </h2>
  );
}
