interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return <h1 className="text-center font-semibold text-4xl p-8">{title}</h1>;
};
