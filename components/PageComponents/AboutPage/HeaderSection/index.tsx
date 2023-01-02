import Link from "next/link";
import { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <section className="">
      <div className="bg-white header-section">
        <div className=" heading">
          <span>Our Chef</span>
          <h3 className="font-semibold">Christopher Raul</h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[35%] mr-16  text-2xl text-[#666]">
            <p>
              Here’s the deal. We make tasty, hand-crafted burgers. Fresh. Every
              day. We’re creators at heart and always experimenting with the art
              of perfecting The Perfect Burger. After six years in business, we
              reckon we’ve nailed it. But we’ll never stop trying to go one
              further. Follow us on Instagram to stay in the loop on our latest
              wild and mouth-watering inventions.
            </p>
            <p className="mt-4 font-medium text-right text-black">
              "Christopher Raul"
            </p>
          </div>
          <img src="/image/about1.jpg" alt="" className="w-[35%] rounded-3xl" />
        </div>
      </div>
    </section>
  );
};
export default HeaderSection;
