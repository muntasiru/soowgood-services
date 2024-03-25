import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { BranchModel, PatientData } from "../../_models/platform-model";
import { Label } from "@/components/ui/label";
import IndividualTestForm from "./_components/individual-test-form";
// import { getDiagonsticTestByProviderId } from "@/app/api/services";
import PackageTestForm from "./_components/package-test-form";
import { usePathname, useSearchParams } from "next/navigation";
import RequestTestSuccess from "./_components/request-test-success";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  data: BranchModel;
  testList: any[];
  packageList: any[];
}

const RequestTestModal: FC<Props> = ({
  open,
  setOpen,
  data,
  testList,
  packageList,
}) => {
  const [select, setSelect] = useState<string>("");
  const [patientData, setPatientData] = useState<PatientData>();
  const [successData, setSuccessData] = useState({});
  const onselect = (select: string, data: any) => {
    setSelect(() => select);
    setSuccessData(data);
    console.log(data);
  };
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const user = localStorage.getItem("user");

  const [loginUrl, setLoginUrl] = useState<string>("");
  useEffect(() => {
    if (user) {
      let parseInfo = JSON.parse(user);
      setPatientData((prev) => parseInfo);
    }
    const loginUrl = `http://localhost:4202/#/auth-checking?redirect=${encodeURIComponent(
      String(pathName).split("/").join("")
    )}`;

    setLoginUrl(loginUrl);
  }, [pathName]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        {user ? (
          <DialogContent className="max-w-[700px] overflow-y-auto max-h-screen">
            {(select === "individual" ||
              select === "package" ||
              select === "") && (
              <>
                <DialogHeader>
                  <DialogTitle className=" text-[32px] font-bold">
                    {data.providerOrganizationName}{" "}
                  </DialogTitle>
                  <DialogDescription className=" text-[18px]">
                    Branch: {data.branch}
                  </DialogDescription>
                </DialogHeader>

                <Card className="request-test border-none shadow-none">
                  <Label className=" text-primary">
                    Please select{" "}
                    <span className="text-[16px] font-bold">
                      {" "}
                      Individual Test{" "}
                    </span>{" "}
                    or{" "}
                    <span className="text-[16px] font-bold">Package Test.</span>
                  </Label>
                  <div className="grid-wrapper grid-col-auto grid grid-cols-2 gap-5 mt-3">
                    <label htmlFor="radio-card-1" className="radio-card ">
                      <input
                        autoComplete="off"
                        type="radio"
                        id="radio-card-1"
                        value="Doctor"
                        name="radio"
                        className="hidden"
                        onChange={() => onselect("individual", {})}
                      />

                      <div className="card-content-wrapper ">
                        <span className="check-icon"></span>
                        <div className="card-content">
                          {/* <img width="50" height="50" alt="doctor" /> */}
                          <h4>Individual Test</h4>
                        </div>
                      </div>
                    </label>
                    <label htmlFor="radio-card-2" className="radio-card">
                      <input
                        autoComplete="off"
                        type="radio"
                        id="radio-card-2"
                        value="Patient"
                        name="radio"
                        className="hidden"
                        onChange={() => onselect("package", {})}
                      />
                      <div className="card-content-wrapper">
                        <span className="check-icon"></span>
                        <div className="card-content">
                          {/* <img src="/assets/auth/hospitalisation.png" alt="patient" /> */}
                          <h4>Package Test</h4>
                        </div>
                      </div>
                    </label>
                  </div>
                </Card>
              </>
            )}
            <IndividualTestForm
              branchData={data}
              select={select}
              testList={testList}
              patientData={patientData}
              onselect={onselect}
            />
            <PackageTestForm
              patientData={patientData}
              select={select}
              onselect={onselect}
              packageList={packageList}
            />
            <RequestTestSuccess select={select} data={successData} />
            {/* 
          <PackageTestForm select={select} /> */}
            {/* <DialogFooter className=" flex w-full justify-start">
              <Button disabled type="submit">
                Send Request
              </Button>
            </DialogFooter> */}
          </DialogContent>
        ) : (
          <DialogContent>
            <CardDescription>
              You are not logged in yet! Please{" "}
              <a href={loginUrl}>
                <b>login to your account</b>
              </a>{" "}
              first.
            </CardDescription>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default RequestTestModal;
