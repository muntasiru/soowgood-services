import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface RequestTestSuccessProps {
  data?: any;
  select: string;
}
const RequestTestSuccess = ({ data, select }: RequestTestSuccessProps) => {
  console.log(data);

  return (
    <Card className={select === "success" ? "block bg-slate-100" : "hidden"}>
      <CardContent className="pt-6 flex flex-col gap-4 items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#c8e6c9"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#4caf50"
            d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
          ></path>
        </svg>
        <h1 className=" text-[32px]">Thanks for you Request</h1>
        <h2 className="mt-6 text-center">
          {" "}
          Your request is currently being processed. Please wait momentarily as
          one of our agents will contact you shortly.
        </h2>
        {/* <Card className="w-full">
          <CardContent className="grid grid-cols-2 gap-4 items-end mt-3">
            <div>
              <CardTitle className="text-sm">Provider Fee</CardTitle>
            </div>
            <div className="text-right">
              <CardTitle className="text-sm">{data?.providerFee} tk.</CardTitle>
            </div>
            <div>
              <CardTitle className="text-sm">Discount</CardTitle>
            </div>
            <div className="text-right">
              <CardTitle className="text-sm">{data?.discount} tk</CardTitle>
            </div>
            <div>
              <CardTitle className="text-xl font-bold">
                Total Fee Amount
              </CardTitle>
            </div>
            <div className="text-right">
              <CardTitle className="text-xl font-bold">
                {data?.finalFee} tk.
              </CardTitle>
            </div>
          </CardContent>
        </Card> */}
      </CardContent>
    </Card>
  );
};

export default RequestTestSuccess;
