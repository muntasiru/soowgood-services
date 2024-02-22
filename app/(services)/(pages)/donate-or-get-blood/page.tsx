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
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DonateGetBlood = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-8 p-10 bg-white my-10 ">
      <Card>
        <CardHeader>
          <CardTitle>Request Get/Donate Blood</CardTitle>
          <CardDescription>
            Enter your information to get/donate blood.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2 col-span-2">
              <Label htmlFor="first-name">Full name</Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <div className="space-y-2 col-span-1">
              <Label htmlFor="donation-type">Donation Type</Label>
              <Select>
                <SelectTrigger className=" w-full" id="donation-type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="give">Donate Blood</SelectItem>
                  <SelectItem value="take">Need Blood</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-1">
              <Label htmlFor="blood-type">Blood type</Label>
              <Select>
                <SelectTrigger className=" w-full" id="blood-type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="ab">AB</SelectItem>
                  <SelectItem value="o">O</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-1">
              <Label htmlFor="center">Donation center</Label>
              <Select>
                <SelectTrigger className=" w-full" id="center">
                  <SelectValue placeholder="select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Donation Center 1</SelectItem>
                  <SelectItem value="2">Donation Center 2</SelectItem>
                  <SelectItem value="3">Donation Center 3</SelectItem>
                  <SelectItem value="4">Donation Center 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonateGetBlood;
