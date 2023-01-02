import Link from "next/link";
import { FC } from "react";

const ChooseSection: FC = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src="image/about-img.png" />
      </div>
      <div className="content">
        <span>why choose us?</span>
        <h3 className="font-semibold title">what's make our food delicious!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
          explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?
        </p>
        <Link href="#" className="btn">
          read more
        </Link>
        <div className="icons-container">
          <div className="icons">
            <img src="image/serv-1.png" />
            <h3 className="font-semibold">fast delivery</h3>
          </div>
          <div className="icons">
            <img src="image/serv-2.png" />
            <h3 className="font-semibold">fresh food</h3>
          </div>
          <div className="icons">
            <img src="image/serv-3.png" />
            <h3 className="font-semibold">best quality</h3>
          </div>
          <div className="icons">
            <img src="image/serv-4.png" />
            <h3 className="font-semibold">24/7 support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseSection;
