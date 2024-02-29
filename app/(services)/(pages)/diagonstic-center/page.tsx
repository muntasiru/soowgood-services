import {
  ArrowLeft,
  ArrowRight,
  HomeIcon,
  LayoutGrid,
  MoveRightIcon,
  TableProperties,
  WorkflowIcon,
} from "lucide-react";
import HospitalCard from "./hospital-card";
import Container from "@/components/layout/container";
import { Card, CardHeader } from "@/components/ui/card";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { getDiagnosticCenterListByFacilitySlug } from "@/app/api/services";
import { DiagnosticCenterModel } from "../../_models/platform-model";
import PageHeader from "../../_components/page-header";

const Page = async () => {
  const diagnosticCenterList = await getDiagnosticCenterListByFacilitySlug(
    "diagonstic-center"
  );
  return (
    <div className=" bg-slate-100">
      <PageHeader>
        <div className="text-center ">
          <h1 className=" text-[32px] font-bold text-primary drop-shadow-md">
            Diagnostic Center
          </h1>
          <span className="flex gap-1 items-center justify-center text-primary/80">
            Service
            <ArrowRight size={15} className="mt-1" />
            Diagnostic center
          </span>
        </div>
      </PageHeader>
      <div className="pt-5 pb-10">
        <Container>
          <Card className=" sticky top-0 z-50 rounded-md overflow-hidden shadow-md ">
            <CardHeader className="bg-white py-2">
              <div className=" flex items-center justify-between">
                <Suspense fallback={<div>Loading...</div>}>
                  {/* <TotalProjects /> */}
                  <h2 className=" text-[18px] font-semibold text-primary">
                    {" "}
                    Total hospital : 102
                  </h2>
                </Suspense>
                <div className="flex items-center gap-5">
                  <div className=" max-w-[400px]">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex h-[40px] justify-between text-muted-foreground"
                    >
                      <span>Search...</span>

                      <kbd className="pointer-events-none ml-4 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                      </kbd>
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <TableProperties />
                    <LayoutGrid />
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-5">
            {diagnosticCenterList?.map((res: DiagnosticCenterModel) => (
              <HospitalCard key={res.id} details={res} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Page;
