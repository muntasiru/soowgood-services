"use client";
import { Button } from "@/components/ui/button";
import hospital from "../../../assets/service/hospital-1.png";
import Image from "next/image";
import RequestTestModal from "./request-test-modal";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HospitalCard = ({ details }: any) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(0);
  const onTestRequest = (d: any) => {
    setOpen((prev) => !prev);
    setData(d);
  };
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
            {details.providerOrganizationName}
          </h2>
          <p className="font-medium text-md text-gray-500">{details.address}</p>
          <p className="font-medium text-xl text-gray-700">From : 250 tk</p>
          <div className="flex items-center gap-3 mt-4">
            <Button
              onClick={() => onTestRequest(1)}
              variant="outline"
              className="flex-1 bg-secondary/5 text-secondary border-secondary/20 btn-primary"
            >
              Send Request
            </Button>

            <Link
              href={`${pathname}/${String(details.providerOrganizationName)
                .split(" ")
                .join("-")
                .toLowerCase()}`}
            >
              <Button
                variant="outline"
                className="flex-1 bg-secondary text-white btn-secondary"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <RequestTestModal open={open} setOpen={onTestRequest} data={data} />
    </div>
  );
};

export default HospitalCard;
