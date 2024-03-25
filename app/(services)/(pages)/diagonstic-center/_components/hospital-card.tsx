import Image from "next/image";

import hospital from "../../../../assets/service/hospital-1.png";
import HospitalCardAction from "./hospital-card-action";
import { DiagnosticCenterModel } from "../../../_models/platform-model";
interface HospitalCardProps {
  provider: string;
}
const HospitalCard = ({ provider }: HospitalCardProps) => {
  return (
    <div className="bg-white border-[1px] border-secondary/30 border-secondary-dark/50 rounded-md p-5">
      <div className="flex items-center gap-6">
        <Image
          src={hospital}
          alt="hospital"
          width={130}
          height={130}
          className="rounded-xl h-32"
        />
        <div>
          <h2 className="text-[18px] mb-1 font-poppins font-semibold text-primary">
            {provider}
          </h2>

          {/* <p className="font-medium text-xl text-gray-700">From : 250 tk</p> */}

          <HospitalCardAction provider={provider} />
        </div>
      </div>
      {/* <RequestTestModal open={open} setOpen={onTestRequest} data={data} /> */}
    </div>
  );
};

export default HospitalCard;
