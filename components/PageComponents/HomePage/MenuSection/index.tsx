import Link from "next/link";
import { FC, useState, useRef, useEffect } from "react";

const MenuSection: FC = () => {
  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>our menu</span>
        <h3 className="font-bold">our top dishes</h3>
      </div>
      <div className="box-container">
        <Link href="#" className="box">
          <img src="image/menu-1.png" />
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="price">$40.00</div>
          </div>
        </Link>
        <Link href="#" className="box">
          <img src="image/menu-2.png" />
          <div className="content">
            <h3 className="font-semibold ">delicious food</h3>
            <div className="price">$40.00</div>
          </div>
        </Link>
        <Link href="#" className="box">
          <img src="image/menu-3.png" />
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="price">$40.00</div>
          </div>
        </Link>
        <Link href="#" className="box">
          <img src="image/menu-4.png" />
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="price">$40.00</div>
          </div>
        </Link>
        <Link href="#" className="box">
          <img src="image/menu-5.png" />
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="price">$40.00</div>
          </div>
        </Link>
        <Link href="#" className="box">
          <img src="image/menu-6.png" />
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="price">$40.00</div>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default MenuSection;
