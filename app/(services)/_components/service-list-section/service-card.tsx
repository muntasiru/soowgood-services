import { Card, CardContent, CardTitle } from "@/components/ui/card"; // Make sure this path is correct
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  icon: StaticImageData;
  link?: string | undefined;
}

const ServiceCard: FC<Props> = ({ title, icon, link = "/" }) => {
  return (
    <Card className=" border-secondary/30 max-w-[180px] px-4 justify-center box-border shadow-lg cursor-pointer hover:shadow-sm duration-300 hover:-translate-y-1 active:scale-95">
      <Link href={link}>
        <CardContent className="py-5 flex items-center flex-col gap-4">
          <Image width={50} height={50} src={icon} alt={title} />
          <CardTitle className="text-[17px] text-center text-primary">
            {title}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ServiceCard;
