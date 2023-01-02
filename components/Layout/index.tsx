import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from "./Footer";
import { useRouter } from "next/router";
import clsx from "clsx";
interface IProps {
  header?: ReactNode;
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children, header }) => {
  const [isActive, setIsActive] = useState<
    "home" | "about" | "menu" | "order" | "blogs"
  >("home");

  const router = useRouter();
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <i className="fa-solid fa-utensils" />H Food
        </a>
        <nav className="navbar">
          <Link
            href={"/"}
            className={clsx(
              {
                "text-[#27ae60]": isActive === "home"
              },
              {
                "text-[#666]": isActive !== "home"
              }
            )}
            onClick={() => {
              setIsActive("home");
            }}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={clsx(
              {
                "text-[#27ae60]": isActive === "about"
              },
              {
                "text-[#666]": isActive !== "about"
              }
            )}
            onClick={() => {
              setIsActive("about");
            }}
          >
            About
          </Link>
          <Link
            href={"/menu"}
            className={clsx(
              {
                "text-[#27ae60]": isActive === "menu"
              },
              {
                "text-[#666]": isActive !== "menu"
              }
            )}
            onClick={() => {
              setIsActive("menu");
            }}
          >
            Menu
          </Link>
          <Link
            href={"/Order"}
            className={clsx(
              {
                "text-[#27ae60]": isActive === "order"
              },
              {
                "text-[#666]": isActive !== "order"
              }
            )}
            onClick={() => {
              setIsActive("order");
            }}
          >
            Order
          </Link>
          <Link
            href={"/blogs"}
            className={clsx(
              {
                "text-[#27ae60]": isActive === "blogs"
              },
              {
                "text-[#666]": isActive !== "blogs"
              }
            )}
            onClick={() => {
              setIsActive("blogs");
            }}
          >
            Blogs
          </Link>
        </nav>
        <div className="icons">
          <div id="menu-btn" className="flex items-center justify-center">
            <AiOutlineMenu />
          </div>
          <div id="search-btn" className="flex items-center justify-center">
            <HiMagnifyingGlass className="text-4xl" />
          </div>
          <div id="cart-btn" className="flex items-center justify-center">
            <BsFillCartFill className="text-4xl" />
          </div>
          <div
            id="login-btn"
            className="flex items-center justify-center"
            onClick={() => {
              router.push("/login");
            }}
          >
            <FaUserAlt className="text-4xl" />
          </div>
        </div>
      </header>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
