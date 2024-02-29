import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookAmbulance() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 bg-white p-8 my-10 shadow-lg shadow-primary/10 rounded-lg">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Book an Ambulance</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill in the information below to book an ambulance.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-number">Contact Number</Label>
            <Input
              id="contact-number"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div className="space-y-2 col-span-1">
            <Label htmlFor="ambulance-type">Ambulance Type</Label>
            <Select>
              <SelectTrigger className=" w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="icu">ICU</SelectItem>
                <SelectItem value="freeze">Freezing Ambulance</SelectItem>
                <SelectItem value="air-ambulance">Air Ambulance</SelectItem>
                <SelectItem value="non-ac">Non-AC</SelectItem>
                <SelectItem value="ac">AC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pickup-address">Pickup Address</Label>
            <Input
              id="pickup-address"
              placeholder="Enter your pickup address"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="destination-address">Destination Address</Label>
            <Input
              id="destination-address"
              placeholder="Enter your destination address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date-of-booking">Date of Booking</Label>
              <Input id="date-of-booking" required type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time-of-booking">Time of Booking</Label>
              <Input id="time-of-booking" required type="time" />
            </div>
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="additional-notes">Additional Notes</Label>
            <Textarea
              className="min-h-[100px]"
              id="additional-notes"
              placeholder="Enter any additional notes"
            />
          </div>
        </div>
        <Button>Send Request</Button>
      </div>
    </div>
  );
}
