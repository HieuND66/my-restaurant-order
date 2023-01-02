import Link from "next/link";
import { FC } from "react";

const BannerSection: FC = () => {
  return (
    <section className="banner">
      <div className="row-banner">
        <div className="content">
          <span>double cheese</span>
          <h3 className="font-bold">burger</h3>
          <p>with cococola and fries</p>
          <Link href="#" className="btn">
            order now
          </Link>
        </div>
      </div>
      <div className="grid-banner">
        <div className="grid">
          <img src="image/banner-1.png" />
          <div className="content">
            <span>special offer</span>
            <h3 className="font-semibold">upto 50% off</h3>
            <Link href="#" className="btn">
              order now
            </Link>
            x`
          </div>
        </div>
        <div className="grid ">
          <img src="image/banner-2.png" />
          <div className="content center">
            <span>special offer</span>
            <h3 className="font-semibold">upto 25% extra</h3>
            <Link href="#" className="btn">
              order now
            </Link>
          </div>
        </div>
        <div className="grid">
          <img src="image/banner-3.png" />
          <div className="content">
            <span>limited offer</span>
            <h3 className="font-semibold">100% cashback</h3>
            <Link href="#" className="btn">
              order now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSection;
