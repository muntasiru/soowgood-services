import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SampleCollection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto max-w-3xl space-y-8 p-10 bg-white my-10 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Request Diagnostic Sample Collection
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Please fill out the form below to request diagnostic sample
            collection from home.
          </p>
        </div>
        <div className="space-y-4">
          <div className=" grid grid-cols-2 w-full col-span-4 gap-2">
            <div className="space-y-2 col-span-1">
              <Label>Select provider</Label>
              <Select>
                <SelectTrigger className=" w-full">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Prova</SelectItem>
                  <SelectItem value="Female">Amar Lab</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-1">
              <Label>Select test</Label>
              <Select>
                <SelectTrigger className=" w-full">
                  <SelectValue placeholder="Select test" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">test 1</SelectItem>
                  <SelectItem value="Female">test 2</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" grid grid-cols-4 gap-4">
            <div className="space-y-2 col-span-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>Gender</Label>
              <Select>
                <SelectTrigger className=" w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                placeholder="Enter your phone number"
                required
                type="tel"
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="street-address">Street Address</Label>
              <Input
                id="street-address"
                placeholder="Enter your street address"
                required
              />
            </div>
            <div className=" grid grid-cols-2 gap-8 col-span-4">
              <div className="space-y-2 w-full">
                <Label>Preferred Date for Sample Collection</Label>
                <Input className=" w-full" type="date" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label>Additional Comments</Label>
                <Textarea
                  className="min-h-[100px]"
                  placeholder="Enter additional comments"
                />
              </div>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default SampleCollection;
