import Image from "next/image";
import Button from "../Button";
import logoBookmark from "../../../public/images/logo-bookmark.svg";
import iconHamburger from "../../../public/images/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="container w-full py-10 mx-auto md:max-w-[90vw] lg:max-w-[100vw] max-w-[77vw] lg:py-12">
      <div className="flex items-center justify-between">
        <Image src={logoBookmark} alt="" className="w-[148px] h-[25px]" />
        <button className="md:hidden">
          <Image src={iconHamburger} alt="" className="w-[18px] h-[15px]" />
        </button>
        <nav className="hidden md:block">
          <ul className="flex text-color-secondary text-[0.8125rem] leading-[1.31] tracking-[1.5px] gap-x-12 items-center uppercase">
            <li><a href="#" className="transition-colors duration-100 ease-in-out cursor-pointer hover:text-color-accent">Features</a></li>
            <li><a href="#" className="transition-colors duration-100 ease-in-out cursor-pointer hover:text-color-accent">Pricing</a></li>
            <li><a href="#" className="transition-colors duration-100 ease-in-out cursor-pointer hover:text-color-accent">Contact</a></li>
            <li><Button asLink href="#" variant="accent" className="px-8 py-3 rounded-[5px] font-medium leading-[inherit] tracking-[inherit] shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)]">Login</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
