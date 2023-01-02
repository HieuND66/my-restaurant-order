import Link from "next/link";
import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram, BsLinkedin, BsPinterest } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <section className="footer">
      <div className="newsletter">
        <h3 className="font-semibold">newsletter</h3>
        <form>
          <input type="email" placeholder="enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="box-container">
        <div className="box">
          <h3 className="font-semibold">our menu</h3>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">pizza</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">burger</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">chicken</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">pasta</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">and more...</span>
          </Link>
        </div>
        <div className="box">
          <h3 className="font-semibold">quick links</h3>
          <Link href="#home">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">home</span>
          </Link>
          <Link href="#about">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">About</span>
          </Link>
          <Link href="#popular">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">popular</span>
          </Link>
          <Link href="#menu">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">menu</span>
          </Link>
          <Link href="#order">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">order</span>
          </Link>
          <Link href="#blogs">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">blogs</span>
          </Link>
        </div>
        <div className="box">
          <h3 className="font-semibold">extra links</h3>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">my order</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">my account</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">my favorite</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text">terms of use</span>
          </Link>
          <Link href="#">
            <AiOutlineArrowRight className="arrow-right" />
            <span className="text"> privary policy</span>
          </Link>
        </div>
        <div className="box">
          <h3 className="font-semibold">opening hours</h3>
          <p>monday : 7:00am to 10:00pm</p>
          <p>tuesday : 7:00am to 10:00pm</p>
          <p>wednesday : 7:00am to 10:00pm</p>
          <p>friday : 7:00am to 10:00pm</p>
          <p>saturday and sunday closed</p>
        </div>
      </div>
      <div className="bottom">
        <div className="flex items-center justify-center share">
          <Link href="#" className="flex items-center justify-center">
            <FaFacebookF />
          </Link>
          <Link href="#" className="flex items-center justify-center">
            <FaTwitter />
          </Link>
          <Link href="#" className="flex items-center justify-center">
            <BsInstagram />
          </Link>
          <Link href="#" className="flex items-center justify-center">
            <BsLinkedin />
          </Link>

          <Link href="#" className="flex items-center justify-center">
            <BsPinterest />
          </Link>
        </div>
        <div className="credit">
          created <span>mr. web designer</span> | all rights reserved!
        </div>
      </div>
    </section>
  );
};
export default Footer;
