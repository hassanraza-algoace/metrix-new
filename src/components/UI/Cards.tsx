import type { IconType } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import CountUp from "./CountUp";

interface CardContentItem {
  id: number;
  title: string;
  titleClass?: string;
  description?: string | number;
  value?: string | number;
}

interface CardsProps {
  icons: IconType; // single icon
  filterContent?: string; // string filter
  className?: string; // optional className
  iconClassName?: string; // optional className
  divClassName?: string; // optional className
  downIconClassName?: string; // optional className
  titleClassName?: string; // optional className
  vlueClassName?: string; // optional className
  filterClassName?: string; // optional className
  filterTextClassName?: string; // optional className
  lastOrderClassName?: string; // optional className
  customerName?: string; // optional className
  lastOrder?: string; // optional className
  content: CardContentItem[]; // array of objects
}

const Cards: React.FC<CardsProps> = ({
  icons,
  filterContent,
  className,
  content,
  iconClassName,
  divClassName,
  downIconClassName,
  titleClassName,
  vlueClassName,
  filterClassName,
  filterTextClassName,
  lastOrderClassName,
  customerName,
  lastOrder,
}) => {
  const Icon = icons;

  return (
    <div className={`bg-white flex flex-col ${className || ""}`}>
      <div className="flex justify-between">
        <div className="flex flex-wrap sm:flex-nowrap gap-1 items-start">
          <div className={` ${iconClassName || ""}`}>
            <Icon className="text-[16px]" />
          </div>
          <div>
            <h3 className="font-[Inter] text-[14px] font-normal text-[#8B8D97] ">
              {customerName}
            </h3>
            <p
              className={`font-[Inter] text-[14px] font-normal text-[#8B8D97] hidden ${
                lastOrderClassName || ""
              } `}
            >
              Last Order <span className="text-black">{lastOrder}</span>
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-1 ${filterClassName || ""}`}>
          <p
            className={`text-[#BEC0CA] font-[Inter] text-[12px] font-normal ${
              filterTextClassName || ""
            }`}
          >
            {filterContent}
          </p>
          <FaAngleDown
            className={`text-[#BEC0CA] text-[8px] ${downIconClassName || ""}`}
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        {content.map((item) => (
          <div key={item.id} className={`mt-5 ${divClassName || ""}`}>
            <h3
              className={`font-normal text-[12px] sm:text-[14px] fnot-[Inter] text-[#8B8D97] ${
                titleClassName || ""
              } ${item.titleClass}`}
            >
              {item.title}
            </h3>
            <div className={`flex items-center gap-1 ${vlueClassName || ""}`}>
              {item.description && (
                <p
                  className={`font-[Poppins] font-medium sm:text-[20px] text-[#45464E] ${
                    vlueClassName || ""
                  }`}
                >
                  {/\d+/.test(String(item.description)) ? (
                    <CountUp
                      number={parseInt(
                        String(item.description).match(/\d+/)![0]
                      )}
                    />
                  ) : (
                    String(item.description)
                  )}
                </p>
              )}

              {item.value && (
                <span
                  className={`text-[#519C66] text-[12px] font-normal font-[Inter] ${
                    vlueClassName || ""
                  }`}
                >
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
