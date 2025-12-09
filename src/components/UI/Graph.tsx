const data = [
  { label: "Sept 10", value: 100 },
  { label: "Sept 11", value: 100 },
  { label: "Sept 12", value: 100 },
  { label: "Sept 13", value: 100 },
  { label: "Sept 14", value: 100 },
  { label: "Sept 15", value: 100 },
  { label: "Sept 16", value: 100 },
];

const Graph = () => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-full bg-white p-4 md:p-8 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:h-[250px] md:h-fit">
        {/* Y-axis */}
        <div className="flex lg:flex-col justify-between w-[80%] md:w-[90%] lg:w-fit lg:justify-start lg:gap-7 text-gray-400 text-xs md:text-sm lg:h-full">
          <span>{maxValue}k</span>
          <span>{maxValue * 0.8}k</span>
          <span>{maxValue * 0.6}k</span>
          <span>{maxValue * 0.4}k</span>
          <span>{maxValue * 0.2}k</span>
        </div>

        {/* Bars */}
        <div className="flex lg:flex-row flex-col  justify-between lg:flex-1 items-end lg:gap-0 gap-5">
          {data.map((item, index) => {
            const heightPercent = (item.value / maxValue) * 100;

            return (
              <div
                key={index}
                className="flex lg:flex-col items-center w-full lg:h-full"
              >
                <div
                  className="lg:w-2 w-full hidden lg:block bg-indigo-100 rounded-full transition-all"
                  style={{ height: `${heightPercent}%` }}
                ></div>
                <div
                  className=" block lg:hidden h-2 bg-indigo-100 rounded-full transition-all"
                  style={{ width: `${heightPercent}%` }}
                ></div>

                <span className="text-gray-400 text-[10px] md:text-sm lg:mt-2 text-right w-[60px] lg:w-fit">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Graph;
