import Container from "@/components/layout/container";
import ServiceListSection from "./_components/service-list-section/page";
import { Card } from "@/components/ui/card";
import SearchSection from "./_components/search-section";
import { platform } from "os";
import { getplatformList } from "../api/services";
import { PlatformFacilitiModel } from "./_models/platform-model";

export default async function ServiceHome() {
  let platform = await getplatformList();
  return (
    <div className="min-h-screen">
      <Container>
        <>
          <div className=" rounded-lg mt-5 overflow-hidden  bg-[url('/service-bg.jpg')] backdrop-blur-sm bg-cover bg-no-repeat  border-[1px] bg-primary/10 h-[150px]">
            <div className=" bg-primary/30 absolute w-full backdrop-blur-sm h-full flex justify-center object-bottom items-center">
              <SearchSection />
            </div>
          </div>
          {/* <h1 className=" text-[32px] text-primary font-bold my-10 text-center">
            <span className=" text-secondary">Soowgood</span> Services
          </h1> */}

          <Card className=" bg-transparent border-none  shadow-none my-10">
            <ServiceListSection platform={platform} />
          </Card>
        </>
      </Container>
    </div>
  );
}
