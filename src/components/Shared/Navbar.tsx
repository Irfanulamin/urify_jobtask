import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import { Button } from "../Ui/button";
import Container from "@/components/Shared/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center px-2  lg:px-24 gap-y-2 md:gap-y-0 lg:gap-y-0">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-y-2 md:gap-y-0 lg:gap-y-0 gap-x-4">
          <div className="flex justify-center items-center gap-1 ">
            <div>
              <Image
                src={logo}
                width={50}
                height={50}
                alt="logo"
                className="w-6 h-8 object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl">Urify</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center ">
            <Link href="/" className="navUi">
              Home
            </Link>
            <Link href="/about-us" className="navUi ">
              About Us
            </Link>
            <Link href="/pricing" className="navUi">
              Pricing
            </Link>
            <Link href="/features" className="navUi">
              Features
            </Link>
          </div>
        </div>
        <div>
          <Button variant="primary">Download</Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
