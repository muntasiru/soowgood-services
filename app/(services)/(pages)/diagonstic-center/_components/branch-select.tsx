"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import RequestTestModal from "../request-test-modal";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { usePathname } from "next/navigation";
import {
  BranchModel,
  DiagnosticCenterModel,
} from "../../../_models/platform-model";
import {
  getDiagonsticPackagesByProviderId,
  getDiagonsticTestByProviderId,
} from "@/app/api/services";

const FormSchema = z.object({
  branch: z.string({
    required_error: "Please select a branch.",
  }),
});

interface BranchSelectProps {
  branchList: any[];
  provider: string;
}

const BranchSelect = ({ branchList, provider }: BranchSelectProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<BranchModel>();
  const [testList, setTestList] = useState([]);
  const [packageList, setPackageList] = useState([]);
  const onTestRequest = async (d: any) => {
    setOpen((prev) => !prev);
    setData(d);
    try {
      if (d.id) {
        console.log(d.id);

        const test = await getDiagonsticTestByProviderId(String(d.id));
        const packageList = await getDiagonsticPackagesByProviderId(
          String(d.id)
        );
        console.log(test);

        setTestList((prev) => test);
        setPackageList((prev) => packageList);
      } else {
        setTestList([]);
        setPackageList([]);
      }
    } catch (error) {
      console.log(error);
    }

    // setTestList(await getProviderId(d.id));
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const findBybranchName = branchList.find(
      (b: BranchModel) => b.branch === data.branch
    );
    onTestRequest(findBybranchName);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full h-[30px] bg-slate-100 mt-3">
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {branchList?.map((b: BranchModel) => (
                      <SelectItem key={b.id} value={b.branch}>
                        {b.branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-3 mt-4">
            <Button
              type="submit"
              variant="outline"
              className="flex-1 bg-secondary/5 text-secondary border-secondary/20 btn-primary"
            >
              Send Request
            </Button>

            <Link
              href={`${pathname}/${String(provider)
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
        </form>
      </Form>
      {data && (
        <RequestTestModal
          open={open}
          setOpen={onTestRequest}
          data={data}
          testList={testList}
          packageList={packageList}
        />
      )}
    </>
  );
};

export default BranchSelect;
