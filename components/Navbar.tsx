import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constant/index";
import Button from "/components//Button";

const Navbar = () => {
  const user = true;
  return (
    <nav className="flex justify-between gap-4 border-b px-8 py-5 ">
      <div className="flex flex-1 items-start justify-start">
        <Link href="/">
          <Image
            src="/thops3.png"
            alt="logo"
            width={116}
            height={43}
            alt="logo"
            className="blur-none"
          />
        </Link>
        <ul className="text-small hidden gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" flex items-center justify-center gap-7 ">
        {user ? (
          <>
            {/* <ProfileMenu session={session} /> */}

            <Link href="/create-project">
              <Button title="Share work" />
            </Link>
          </>
        ) : (
          <>log out</>
        )}
        <Footer />
      </div>
    </nav>
  );
};

export default Navbar;
