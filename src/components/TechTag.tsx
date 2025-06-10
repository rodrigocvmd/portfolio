// src/components/TechTag.tsx
interface TechTagProps {
  name: string;
}

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  return (
    <span className="inline-block bg-light-secondary dark:bg-dark-secondary text-xs font-medium text-light-text dark:text-dark-text px-2 py-1 rounded-full mr-2 mb-2">
      {name}
    </span>
  );
};

export default TechTag;