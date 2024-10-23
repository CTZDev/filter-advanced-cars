interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <h1
        className="text-center font-semibold text-7xl py-16 text-white"
        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)" }}
      >
        {title.toUpperCase()}
      </h1>
    </header>
  );
};
