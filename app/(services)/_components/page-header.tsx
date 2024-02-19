import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const PageHeader: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="overflow-hidden  bg-[url('/service-bg.jpg')] backdrop-blur-sm bg-cover bg-no-repeat bg-primary/10 h-[150px]">
        <div className=" bg-primary/20 absolute w-full backdrop-blur-md h-full flex justify-center object-bottom items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
