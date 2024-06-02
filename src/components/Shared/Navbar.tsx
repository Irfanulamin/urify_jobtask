import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex justify-center items-center gap-x-4">
        <div className="flex justify-center items-center gap-1">
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
            <p className="font-bold">Urify</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/features">Features</Link>
        </div>
      </div>
      <div>
        <button>Download</button>
      </div>
    </div>
  );
};

export default Navbar;
