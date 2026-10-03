interface TagsProps {
  items: string[];
}

export default function Tags({ items }: TagsProps) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}