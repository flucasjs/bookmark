import Image from "next/image";
import Logo from "@/components/Logo";
import iconFacebook from "../../../public/images/icon-facebook.svg";
import iconTwitter from "../../../public/images/icon-twitter.svg";

export default function Footer() {
  return (
    <div className="w-full text-white bg-color-secondary pt-[46px] pb-[43px] lg:pt-[40px] lg:pb-[34px] flex items-center justify-center">
      <div className="flex flex-col items-center lg:container lg:flex-row">
        <Logo textFill="#FFF" className="mb-[44px] lg:mb-0 lg:mr-16" />
        <ul className="flex flex-col mb-12 text-center lg:mb-0 gap-y-8 lg:flex-row lg:justify-between lg:items-center lg:gap-x-11">
          <li className="hover:text-color-accent text-[0.9375rem] leading-[1.133] tracking-[1.73px] font-[400] uppercase transition-colors duration-100 ease-in-out cursor-pointer">Features</li>
          <li className="hover:text-color-accent text-[0.9375rem] leading-[1.133] tracking-[1.73px] font-[400] uppercase transition-colors duration-100 ease-in-out cursor-pointer">Pricing</li>
          <li className="hover:text-color-accent text-[0.9375rem] leading-[1.133] tracking-[1.73px] font-[400] uppercase transition-colors duration-100 ease-in-out cursor-pointer">Contact</li>
        </ul>
        <div className="flex justify-between gap-x-4 lg:ml-auto lg:gap-x-11">
          <Image src={iconFacebook} alt="" className="w-full h-auto"/>
          <Image src={iconTwitter} alt="" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
}
