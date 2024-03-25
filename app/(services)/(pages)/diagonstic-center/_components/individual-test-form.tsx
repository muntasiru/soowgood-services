import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BranchModel,
  DiagnosticServiceModel,
  ProviderTestModel,
} from "@/app/(services)/_models/platform-model";
import { Textarea } from "@/components/ui/textarea";
import Select, { ActionMeta, MultiValue } from "react-select";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  requestDiscountByProviderAmount,
  requestTestFromCustomer,
} from "@/app/api/services";

interface IndividualTestFormProps {
  select: string;
  branchData: BranchModel;
  testList: any[];
  patientData: any;
  onselect: any;
}
const initPrice = {
  discountRate: 0,
  providerRate: 0,
  finalRate: 0,
};

const IndividualTestForm = ({
  select,
  branchData,
  testList = [],
  patientData,
  onselect,
}: IndividualTestFormProps) => {
  const pathName = usePathname();
  const [selectedTestPrice, setSelectedTestPrice] = useState(initPrice);
  const [selectedTests, setSelectedTests] = useState<any[]>([]);
  // const [loginUrl, setLoginUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   // Construct the login URL with the pathName as a query parameter
  //   const loginUrl = `http://localhost:4202/#/login?redirect=${encodeURIComponent(
  //     String(pathName).split("/").join("")
  //   )}`;

  //   setLoginUrl(loginUrl);
  // }, [pathName]);

  const options = testList?.map((res: ProviderTestModel) => {
    return {
      ...res,
      value: res.id,
      // label: res.pathologyCategoryName + "_" + res.pathologyTestName,
      label: res.pathologyTestName,
    };
  });
  const onChangeSelection = (
    newValue: MultiValue<any>,
    actionMeta: ActionMeta<any>
  ) => {
    if (
      actionMeta.action === "select-option" ||
      actionMeta.action === "remove-value"
    ) {
      const selectedValues: any[] = newValue.map((option) => option);
      setSelectedTests(selectedValues);
      if (!selectedValues.length) {
        setSelectedTestPrice(initPrice);
      } else {
        getProviderPrice(selectedValues);
      }
    }
  };
  const requestTest = async () => {
    const reqData = {
      patientCode: patientData.patientCode,
      patientName: patientData.patientName,
      patientProfileId: patientData.patientProfileId,
      serviceProviderId: selectedTests[0]?.serviceProviderId,
      providerFee: selectedTestPrice.providerRate,
      discount: selectedTestPrice.discountRate,
      finalFee: selectedTestPrice.providerRate - selectedTestPrice.discountRate,
      diagonsticTestRequested: selectedTests.map((option) => {
        return {
          diagonsticTestId: option.id,
          pathologyCategoryAndTest:
            option.pathologyCategoryName + "_" + option.pathologyTestName,
          providerRate: option.providerRate,
        };
      }),
    };
    try {
      setLoading(true);
      let res = await requestTestFromCustomer(reqData);
      setLoading(false);
      onselect("success", res);
    } catch (error) {
      setLoading(false);
    }
  };
  const getProviderPrice = (value: any[]) => {
    let amount = value.reduce((acc, curr) => acc + curr.providerRate, 0);
    setSelectedTestPrice({
      ...selectedTestPrice,
      providerRate: amount,
    });
    if (amount) {
      getDiscountPrice(amount);
    }
  };

  const getDiscountPrice = async (amount: number) => {
    try {
      let discount = await requestDiscountByProviderAmount(amount);
      setSelectedTestPrice({
        ...selectedTestPrice,
        discountRate: Number(discount),
        providerRate: amount,
        finalRate: amount - Number(discount),
      });
    } catch (error) {
      throw new Error("something wrong");
    }
  };
  return (
    <>
      <Card
        className={select === "individual" ? "block bg-slate-100" : "hidden"}
      >
        <CardContent className=" space-y-3">
          <div className="mt-4">
            <label>Test Name</label>
            <Select
              isMulti={true}
              options={options}
              onChange={onChangeSelection}
            />
          </div>
          <Card className="w-full">
            {selectedTests.length > 0 && (
              <>
                <CardHeader className=" border-b-[1px] py-5">
                  <CardTitle className=" font-bold">Fee Information</CardTitle>
                </CardHeader>
                <CardContent className="grid  gap-4 items-end mt-3 w-full">
                  {selectedTests?.map((res: any, i) => (
                    <>
                      <div>
                        <CardTitle className="text-sm">
                          {i + 1} {"."} {res.label}
                        </CardTitle>
                      </div>
                      <div className="text-right">
                        <CardTitle className="text-sm">
                          {res.providerRate}
                          tk.
                        </CardTitle>
                      </div>
                    </>
                  ))}

                  <div className=" border-t-[1px] border-gray-600 w-full pt-4 col-span-2 ">
                    <div className=" flex justify-between">
                      <div>
                        <CardTitle className="text-lg py-0 font-semibold">
                          Total
                        </CardTitle>
                      </div>
                      <div className="text-right">
                        <CardTitle className="text-lg font-semibold">
                          {selectedTestPrice?.providerRate} tk.
                        </CardTitle>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          Discount
                        </CardTitle>
                      </div>
                      <div className="text-right">
                        <CardTitle className="text-lg font-semibold">
                          {selectedTestPrice?.discountRate} tk.
                        </CardTitle>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">
                          Amount of pay
                        </CardTitle>
                      </div>
                      <div className="text-right">
                        <CardTitle className="text-xl font-bold">
                          {selectedTestPrice?.finalRate}
                          {""} tk.
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
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
          <Button onClick={requestTest} type="submit">
            {loading ? "Requesting..." : "Send Request"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default IndividualTestForm;
