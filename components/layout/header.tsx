"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import logo from "../../app/assets/logo/SoowGood-Logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Container from "./container";
const Header = () => {
  return (
    <div className="w-full">
      <header className="flex items-center h-16 px-4 md:px-6 w-full border-b bg-primary shadow z-10 ">
        <Container>
          <nav className="flex-1 justify-between hidden w-full md:flex md:items-center md:gap-4 md:w-auto lg:gap-8">
            <Link className="flex items-center font-semibold" href="#">
              <Image width={200} height={50} src={logo} alt="logo" />
            </Link>
            <ul className=" text-white inline-flex items-center gap-7">
              <li className=" hover:bg-secondary py-2 px-4 rounded-md duration-300 cursor-pointer">
                <a href="https://soowgoodbeta.com/#/">Home</a>
              </li>
              <li className=" bg-secondary py-2 px-4 rounded-md">Services</li>
              <li className=" hover:bg-secondary py-2 px-4 rounded-md duration-300 cursor-pointer">
                Doctors
              </li>
            </ul>
            <ul className="flex gap-4 items-center">
              <li className=" bg-white py-2 px-5 rounded-md text-primary border-[1px]">
                Soowgood Point
              </li>
              <li className=" bg-white py-2 px-5 rounded-md text-primary border-[1px]">
                Village Booth
              </li>
            </ul>
          </nav>
        </Container>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="ml-auto md:hidden w-8 h-8 p-1.5 rounded-md"
              size="icon"
              variant="outline"
            >
              <MenuIcon className="w-4 h-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-2 p-4">
              <Link className="flex items-center font-semibold" href="#">
                <Image width={200} height={50} src={logo} alt="logo" />
              </Link>
              <Link
                className="flex items-center h-10 rounded-md px-3 text-sm transition-colors  "
                href="#"
              >
                Features
              </Link>
              <Link
                className="flex items-center h-10 rounded-md px-3 text-sm transition-colors  "
                href="#"
              >
                Solutions
              </Link>
              <Link
                className="flex items-center h-10 rounded-md px-3 text-sm transition-colors  "
                href="#"
              >
                Customers
              </Link>
              <Link
                className="flex items-center h-10 rounded-md px-3 text-sm transition-colors  "
                href="#"
              >
                Resources
              </Link>
              <Link
                className="flex items-center h-10 rounded-md px-3 text-sm transition-colors  "
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="flex items-center h-10 rounded-md px-3 text-sm transition-colors  "
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Header;

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
