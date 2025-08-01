// src/components/TechTag.tsx
interface TechTagProps {
  name: string;
}

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center justify-center bg-light-secondary dark:bg-dark-secondary text-xs font-medium text-light-text dark:text-dark-text px-2.5 py-1 rounded-full mr-2 transition-transform duration-200 hover:scale-110 cursor-default">
      {name}
    </span>
  );
};

export default TechTag;