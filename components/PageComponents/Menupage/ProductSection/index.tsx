import Link from "next/link";
import { FC } from "react";
import { GoSearch } from "react-icons/go";
import {
  BsFillHeartFill,
  BsSearch,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Select from "../../../Select";

const ProductSection: FC = () => {
  return (
    <section className="popular">
      <div>
        <div className="flex justify-center w-full mb-8">
          <div className="relative w-[70%]">
            <input
              type="text"
              className="  w-full py-4 px-6 text-xl font-medium focus:border-[#27ae60]  border-[#130f40] border-solid rounded-full border placeholder:text-[#bbb6b6] text-[#130f40]"
              placeholder="Search"
            />
            <GoSearch className="absolute right-[15px] text-3xl top-[11px] text-[#27ae60]" />
          </div>
        </div>
        <div className="filter w-[15%]">
          <Select
            title="Filter dishes"
            defaultInputValue="all"
            options={[
              { label: "All", value: "all" },
              { label: "A-Z", value: "a-z" },
              { label: "Z-A", value: "z-a" },
              { label: "Decreasing", value: "decreasing" },
              { label: "Increases", value: "increases" },
              { label: "Sell well", value: "sell" },
            ]}
          />
        </div>
      </div>
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
export default ProductSection;
