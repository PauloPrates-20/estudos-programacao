type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[]
}

function Destructuring({ title, content, commentsQty, tags }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários {commentsQty}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Destructuring;