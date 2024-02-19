import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  data: number;
}
const RequestTestModal: FC<Props> = ({ open, setOpen, data }) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>IBNA SINA Diagnostic Center {data}</DialogTitle>
            <DialogDescription>Branch: Mirpur 10</DialogDescription>
          </DialogHeader>
          <Card>
            <CardContent className=" space-y-3">
              <div className="mt-4">
                <label>Select a test</label>
                <Select>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Test name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label>Your contact number</label>
                <Input
                  className="mt-1 "
                  type="number"
                  placeholder="Contact number"
                />
              </div>
              <div>
                <label>Comments (if any)</label>
                <Textarea
                  className="mt-1 focus:outline-none"
                  rows={2}
                  placeholder="Contact number"
                />
              </div>
            </CardContent>
          </Card>
          <DialogFooter className=" flex w-full justify-start">
            <Button type="submit">Send Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequestTestModal;
