// Components
import NavbarItem from "./NavbarItem";
import Container from "./Container";

// Next
import Image from "next/image";

// Constants
import { NAVBAR_ITEMS } from "@/app/lib/constants";

export default function Navbar() {
  return (
    <nav className="bg-white w-full">
      <Container className="items-center justify-between">
        <div className="flex items-center">
          <Image
            src={
              "https://storage.googleapis.com/spineproduction/uploads/menu_section/menu_nav/91/2.png"
            }
            alt="Grain Logo"
            width={92}
            height={36}
          />
          <div className="flex items-center gap-5 ml-5">
            {NAVBAR_ITEMS.map(({ url, text }) => (
              <NavbarItem key={text} url={url}>
                {text}
              </NavbarItem>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <NavbarItem url="https://grain.com.sg/contact">Contact us</NavbarItem>
          <NavbarItem url="https://grain.com.sg/login">Login</NavbarItem>
        </div>
      </Container>
    </nav>
  );
}
