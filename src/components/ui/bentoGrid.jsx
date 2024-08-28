import { cn } from "../../../utils/cn";
import { BackgroundGradientAnimationDemo } from "./gradientBg";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
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
    (<div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative",
        className
      )}
        style={{
            background: "rgb(2,0,36)",
            backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)"
        }}
      >

        <div className="{`${ id === 6 } && flex justify-center h-full`}">
            <div className="w-full h-full absolute">
                {img && ( 
                <img src={img} alt={img} className={cn(imgClassName, "object-cover, object-center")}/>
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opecity-80"}`}>
                {
                    img && (
                        <img src={spareImg} alt={spareImg} className="object-cover object-center"/>
                    )   
                    }
            </div>
            {id === 6 && (
                 < BackgroundGradientAnimationDemo >
                    < div className="absolute flex justify-center items-center" />
                 </BackgroundGradientAnimationDemo>
            )}
        </div>

      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>)
  );
};
