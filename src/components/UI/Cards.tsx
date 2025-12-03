import type { IconType } from "react-icons";
import { FaAngleDown } from "react-icons/fa";

interface CardContentItem {
  id: number;
  title: string;
  description?: string;
  value?: string | number;
}

interface CardsProps {
  icons: IconType; // single icon
  filterContent?: string; // string filter
  className?: string; // optional className
  content: CardContentItem[]; // array of objects
}

const Cards: React.FC<CardsProps> = ({
  icons,
  filterContent,
  className,
  content,
}) => {
  const Icon = icons;

  return (
    <div className={`bg-white flex flex-col ${className || ""}`}>
        <div className="flex justify-between">
          <Icon className="text-xl" />
          <div className="flex items-center gap-1">
            <p>{filterContent}</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="flex">
          {content.map((item) => (
            <div key={item.id} className="mt-2">
              <h3 className="font-bold">{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              {item.value && <span>{item.value}</span>}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Cards;
