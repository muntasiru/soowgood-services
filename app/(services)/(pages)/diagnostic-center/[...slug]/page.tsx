import PageHeader from "@/app/(services)/_components/page-header";
import Container from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ArrowRight } from "lucide-react";
import HospitalSpecificationTab from "./hospital-specification-tab";

const Page = () => {
  return (
    <>
      {" "}
      <div className=" bg-slate-100">
        <PageHeader>
          <div className="text-center ">
            <h1 className=" text-[32px] font-bold text-primary drop-shadow-md">
              IBNA SINA Diagnostic Center - (Mirpur Branch)
            </h1>
            <span className="flex gap-1 items-center justify-center text-primary/80">
              Service
              <ArrowRight size={15} className="mt-1" />
              Diagnostic center
              <ArrowRight size={15} className="mt-1" />
              IBNA SINA Diagnostic Center
            </span>
          </div>
        </PageHeader>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-7 py-10 gap-5">
            <div className=" col-span-2 h-[300px]">
              <Card className="h-full">nav</Card>
            </div>
            <div className=" col-span-5 h-[500px]">
              <Card className="w-full h-full">
                <CardContent>
                  <HospitalSpecificationTab />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
