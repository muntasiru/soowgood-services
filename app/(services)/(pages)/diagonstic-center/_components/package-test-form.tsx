import {
  DiagonsticPackage,
  DiagonsticPackageTestModel,
  PatientData,
} from "@/app/(services)/_models/platform-model";
import {
  getPackageTestListByPackageId,
  requestPackageTestFromCustomer,
} from "@/app/api/services";
import { Button } from "@/components/ui/button";
// import { getPackageTestListByPackageId } from "@/app/api/services";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Textarea } from "@/components/ui/textarea";
import { Suspense, useState } from "react";
import Select from "react-select";
interface PackageTestFormProps {
  select: string;
  packageList: any[];
  patientData: any;
  onselect: any;
}
const PackageTestForm = ({
  select,
  packageList,
  patientData,
  onselect,
}: PackageTestFormProps) => {
  const [packageTest, setPackageTest] = useState([]);
  const [testLoader, setTestLoader] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<DiagonsticPackage>();
  const [loading, setLoading] = useState(false);
  const options = packageList.map((res: any) => {
    return {
      ...res,
      value: res.id,
      label: res.packageName,
    };
  });
  console.log(packageList);
  const onChangeSelection = async (v: any) => {
    setSelectedPackage(v);
    console.log(v);

    try {
      setTestLoader(true);
      let list = await getPackageTestListByPackageId(v.id);
      setPackageTest((pre) => list);
      setTestLoader(false);
    } catch (error) {
      setTestLoader(false);
    }
  };

  const requestPackage = async () => {
    const reqData = {
      patientCode: patientData.patientCode,
      patientName: patientData.patientName,
      patientProfileId: patientData.patientProfileId,
      serviceProviderId: selectedPackage?.serviceProviderId,
      diagonsticPackageId: selectedPackage?.id,
      providerFee: selectedPackage?.providerRate,
      discount: selectedPackage?.discountRate,
      finalFee: selectedPackage?.finalRate,
    };
    try {
      setLoading(true);
      let res = await requestPackageTestFromCustomer(reqData);
      setLoading(false);
      onselect("success", res);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Card className={select === "package" ? "block bg-slate-100" : "hidden"}>
        <CardContent className=" space-y-3">
          <div className="mt-4">
            <label>Package Name</label>
            {options.length ? (
              <Select options={options} onChange={onChangeSelection} />
            ) : (
              "Loading.."
            )}
          </div>
          {selectedPackage && (
            <>
              <Table className=" bg-white">
                {/* <TableCaption>A list of test of your select package.</TableCaption> */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Package Name</TableHead>
                    <TableHead>Test Included</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* {options.map((res) => ( */}
                  <TableRow>
                    <TableCell className="font-medium">
                      {testLoader ? "Loading..." : selectedPackage?.packageName}
                    </TableCell>
                    <TableCell>
                      {testLoader
                        ? "Loading..."
                        : packageTest.map((res: DiagonsticPackageTestModel) => (
                            <p key={res.id} className="py-1">
                              {res.pathologyTestName}
                            </p>
                          ))}
                    </TableCell>
                  </TableRow>
                  {/* ))} */}
                </TableBody>
              </Table>

              <Card className="w-full">
                <CardHeader className=" border-b-[1px] py-3">
                  <CardTitle>Fee Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 items-end mt-3">
                  <div>
                    <CardTitle className="text-sm">Provider Fee</CardTitle>
                  </div>
                  <div className="text-right">
                    <CardTitle className="text-sm">
                      {selectedPackage.providerRate} tk.
                    </CardTitle>
                  </div>
                  <div>
                    <CardTitle className="text-sm">Discount</CardTitle>
                  </div>
                  <div className="text-right">
                    <CardTitle className="text-sm">
                      {selectedPackage.discountRate} tk
                    </CardTitle>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">
                      Total Fee Amount
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <CardTitle className="text-xl font-bold">
                      {selectedPackage.finalRate} tk.
                    </CardTitle>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* <div>
            <label>Comments (if any)</label>
            <Textarea
              className="mt-1 focus:outline-none"
              rows={2}
              placeholder="Contact number"
            />
          </div> */}
        </CardContent>
        <CardFooter>
          <Button onClick={requestPackage} type="submit">
            {loading ? "Requesting..." : "Send Request"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PackageTestForm;
