import Link from "next/link";
import { FC, useState, useRef, useEffect } from "react";
import { BsFillHeartFill, BsStarFill, BsStarHalf } from "react-icons/bs";

const PopularSection: FC = () => {
  return (
    <section className="popular" id="popular">
      <div className="heading">
        <span>popular food</span>
        <h3 className="font-bold">our special dishes</h3>
      </div>
      <div className="box-container">
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-1.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-2.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-3.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-4.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-5.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-6.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-7.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
        <div className="relative box">
          <BsFillHeartFill className="absolute text-4xl top-3 right-3  text-[#666] hover:text-[#27ae60]" />
          <Link href="#" />
          <div className="image">
            <img src="image/food-8.png" />
          </div>
          <div className="content">
            <h3 className="font-semibold">delicious food</h3>
            <div className="flex items-center justify-center stars">
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarFill className="mr-1 text-yellow-400" />
              <BsStarHalf className="mr-1 text-yellow-400" />
              <span> (50) </span>
            </div>
            <div className="price">
              $40.00 <span>$50.00</span>
            </div>
            <Link href="#" className="btn">
              add to cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularSection;
