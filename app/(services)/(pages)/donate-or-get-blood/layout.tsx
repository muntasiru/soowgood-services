import { ArrowRight } from "lucide-react";
import PageHeader from "../../_components/page-header";

const ServiceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <PageHeader>
        <div className="text-center ">
          <h1 className=" text-[32px] font-bold text-primary drop-shadow-md">
            Get or Donate Blood
          </h1>
          <span className="flex gap-1 items-center justify-center text-primary/80">
            Service
            <ArrowRight size={15} className="mt-1" />
            Get or Donate Blood
          </span>
        </div>
      </PageHeader>
      {children}
    </>
  );
};

export default ServiceLayout;
