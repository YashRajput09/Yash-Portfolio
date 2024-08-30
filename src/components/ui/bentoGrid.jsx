import { cn } from "../../../utils/cn";
import { BackgroundGradientAnimationDemo } from "./gradientBg";
import { Globe } from "./globe";
import { GlobeDemo } from "./gridGlob";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  key,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className="{`${ id === 6 } && flex justify-center h-full`}">
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opecity-80"
          }`}
        >
          {img && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimationDemo>
            <div className="z-50 absolute flex justify-center items-center text-white font-bold  " />
          </BackgroundGradientAnimationDemo>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 align-bottom"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>
       
        {id === 2 && < GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-3">
              {['React.js', 'Next.js', 'TypeScript'].map((item) =>(
                <span key={item} className="py-2 px-3 text-xs lg:text-sm opecity-50 lg:opecity-100 rounded-lg text-center bg-[#10132e] text-white text-opacity-50">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
