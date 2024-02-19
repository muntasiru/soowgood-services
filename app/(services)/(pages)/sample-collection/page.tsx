import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SampleCollection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto max-w-3xl space-y-8 px-4">
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
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Enter your full name" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date-of-birth">Date of Birth</Label>
              <Input
                id="date-of-birth"
                placeholder="Select your date of birth"
                required
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                placeholder="Enter your phone number"
                required
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-address">Email Address</Label>
              <Input
                id="email-address"
                placeholder="Enter your email address"
                required
                type="email"
              />
            </div>
          </div>
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">Address</legend>
            <div className="space-y-2">
              <Label htmlFor="street-address">Street Address</Label>
              <Input
                id="street-address"
                placeholder="Enter your street address"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter your city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Enter your state" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip-code">ZIP Code</Label>
                <Input
                  id="zip-code"
                  placeholder="Enter your ZIP code"
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="space-y-2">
            <Label>Preferred Date for Sample Collection</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Preferred Time Slot for Sample Collection</Label>
          </div>
          <div className="space-y-2">
            <Label>Additional Comments</Label>
            <Textarea
              className="min-h-[100px]"
              placeholder="Enter additional comments"
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default SampleCollection;
