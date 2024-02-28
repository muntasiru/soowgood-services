"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HospitalSpecificationTab = () => {
  return (
    <Tabs defaultValue="account" className="w-full pb-0 space-y-0 mt-6">
      <CardHeader className="px-0">
        <TabsList className=" justify-between">
          <TabsTrigger className="px-6 " value="service">
            Service List
          </TabsTrigger>
          <TabsTrigger className="px-6 " value="availavility">
            Availavility
          </TabsTrigger>
          <TabsTrigger className="px-6 " value="contact">
            Contact us
          </TabsTrigger>
          <TabsTrigger className="px-6 " value="terms">
            Terms and Condition
          </TabsTrigger>
        </TabsList>
      </CardHeader>
      <Card className=" border-0 rounded-none">
        <CardContent>
          <TabsContent className="mt-0" value="service">
            Service List
          </TabsContent>
          <TabsContent className="mt-0" value="availavility">
            Availavility
          </TabsContent>
          <TabsContent className="mt-0" value="contact">
            {" "}
            Contact us .
          </TabsContent>
          <TabsContent className="mt-0" value="terms">
            {" "}
            Terms and Condition.
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default HospitalSpecificationTab;
