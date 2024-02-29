"use client";
import PageHeader from "@/app/(services)/_components/page-header";
import Container from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HospitalSpecificationTab from "./hospital-specification-tab";
import { useParams, usePathname } from "next/navigation";

const Page = () => {
  const { slug } = useParams();
  const path = usePathname();
  console.log(path);

  return (
    <>
      {" "}
      <div className=" bg-slate-100">
        <PageHeader>
          <div className="text-center ">
            <h1 className=" text-[32px] font-bold text-primary drop-shadow-md">
              {String(slug).split("-").join(" ").toUpperCase()}
            </h1>
            <span className="flex gap-1 items-center justify-center text-primary/80">
              Service
              <ArrowRight size={15} className="mt-1" />
              {path}
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
