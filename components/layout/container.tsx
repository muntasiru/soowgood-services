import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container max-w-[1340px] mx-auto">{children}</div>;
};

export default Container;
