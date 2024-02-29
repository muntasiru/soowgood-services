import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const OrderMedicine = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-8 p-10 bg-white my-10 ">
      <Card>
        <CardHeader className="flex flex-row space-y-0 items-start gap-2">
          <div className="grid gap-1">
            <CardTitle>Order Medicine</CardTitle>
            <CardDescription>
              Upload your prescription and fill out the form below.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="grid w-full items-start gap-2">
              <Label className="text-sm" htmlFor="prescription">
                Prescription Upload
              </Label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                You can upload a file in PDF or image format.
              </p>
              <Input
                className="w-[initial] !p-absolute !m-absolute"
                id="prescription"
                type="file"
              />
            </div>
          </div>
          <fieldset className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <legend className="text-sm font-semibold px-2">Address</legend>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="name">
                  Full Name
                </Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="street">
                  Street Address
                </Label>
                <Input id="street" placeholder="Enter street address" />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="city">
                  City
                </Label>
                <Input id="city" placeholder="Enter city" />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="state">
                  State
                </Label>
                <Input id="state" placeholder="Enter state" />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="postal">
                  Postal Code
                </Label>
                <Input id="postal" placeholder="Enter postal code" />
              </div>
            </div>
          </fieldset>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Submit Order</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderMedicine;
