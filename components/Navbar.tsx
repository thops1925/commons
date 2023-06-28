import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constant/index";
const Navbar = () => {
  return (
    <nav className="flex justify-between gap-4 px-8 py-5 border-b flex-between ">
      <div className="flex-1">
        <Link href="/">
          <Image
            src="/thops3.png"
            alt="logo"
            width={116}
            height={43}
            alt="logo"
          />
        </Link>

        <ul className="hidden xl:flex text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4">login</div>
    </nav>
  );
};

export default Navbar;
