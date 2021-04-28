import Responsetype from "../models/ResponseData";

interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
  const { repository } = props;

  return (
    <li key={repository.name}>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Acessar Repositório</a>
    </li>
  );
}
