interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <h1 className="text-center font-medium text-5xl p-10">
        {title.toUpperCase()}
      </h1>
      ;
    </header>
  );
};
