import { Tag } from "../types/types";

export type TagProps = {
  type: Tag;
  onTagClick: (type: Tag) => void;
};

type TagConfig = {
  [key in Tag]: string;
};

const tagsConfig: TagConfig = {
  Hard: "bg-tags-red",
  Medium: "bg-tags-orange",
  Easy: "bg-tags-green",
  Security: "bg-tags-purple",
  General: "bg-tags-blue",
};

const commonClassNames =
  "px-2 py-1 text-sm rounded-xl hover:opacity-80 font-semibold";

const Tag = ({ type, onTagClick }: TagProps) => {
  const className = `${commonClassNames} ${
    tagsConfig[type as keyof typeof tagsConfig]
  }`;

  const handleTagClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onTagClick(type);
  };

  return (
    <p className={className} onClick={handleTagClick}>
      {type}
    </p>
  );
};

export default Tag;
