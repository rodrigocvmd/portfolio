// src/components/TechTag.tsx
interface TechTagProps {
  name: string;
}

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center justify-center bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent text-sm font-medium px-3 py-1 rounded-full cursor-default">
      {name}
    </span>
  );
};

export default TechTag;