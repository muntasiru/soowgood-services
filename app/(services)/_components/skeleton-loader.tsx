import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <>
      <div className="bg-white space-y-2 border-[1px] border-secondary/30 border-secondary-dark/50 rounded-md p-5">
        <Skeleton className=" w-full h-[25px]" />
        <Skeleton className=" w-[70%] h-[30px]" />
        <Skeleton className=" w-[90%] h-[25px]" />
        <Skeleton className=" w-[100%] h-[30px]" />
      </div>
    </>
  );
};

export default SkeletonLoader;
