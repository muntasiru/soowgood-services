import ServiceCard from "./service-card";
import amb from "../../../assets/service/ambulance.webp";
import hospital from "../../../assets/service/hospital.webp";
import medicine from "../../../assets/service/medicine.webp";
import diagnostic from "../../../assets/service/diagn.webp";
import mProduct from "../../../assets/service/product.webp";
import blood from "../../../assets/service/donate.jpg";
import { PlatformFacilitiModel } from "../../_models/platform-model";

const ServiceListSection = async ({ platform }: any) => {
  return (
    <div className="max-w-[1140px] mx-auto">
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-5 lg:px-0 pb-10 lg:pb-0 lg:grid-cols-5 "> */}
      <div className=" flex gap-6 justify-center">
        {platform?.map((res: PlatformFacilitiModel, i: number) => (
          <ServiceCard
            key={i}
            title={res.serviceName}
            icon={diagnostic}
            link={`/${res.slug}`}
          />
        ))}

        {/* <ServiceCard
          title="Order Medicine"
          icon={medicine}
          link="order-medicine"
        />
        <ServiceCard
          title="Donate or Get Blood"
          icon={blood}
          link="donate-or-get-blood"
        />
        <ServiceCard title="Ambulance" icon={amb} link="book-ambulance" />
        <ServiceCard
          title="Sample Collection"
          icon={amb}
          link="sample-collection"
        />
        <ServiceCard
          title="Book Hospital"
          icon={hospital}
          link="book-hospital"
        />
        <ServiceCard
          title="Medical Products"
          icon={mProduct}
          link="medical-product"
        /> */}
      </div>
    </div>
  );
};

export default ServiceListSection;
