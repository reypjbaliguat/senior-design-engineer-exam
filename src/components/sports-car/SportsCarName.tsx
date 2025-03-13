interface Props {
  name: string;
}

function SportsCarName({ name }: Props) {
  return (
    <span className="text-small-hero-2xl font-bold">Sports Car {name}</span>
  );
}

export default SportsCarName;
