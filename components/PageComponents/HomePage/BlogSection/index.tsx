import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { BsFillTagFill } from "react-icons/bs";

const BlogSection: FC = () => {
  const router = useRouter();
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>our blogs</span>
        <h3 className="font-semibold">our daily stories</h3>
      </div>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <h3>
              <i className="fas fa-calendar" /> 21st may, 2021
            </h3>
            <img src="image/blog-1.jpg" />
          </div>
          <div className="content">
            <div className="flex tags">
              <Link href="#" className="flex items-center mr-2">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span>Food /</span>
              </Link>
              <Link href="#" className="flex items-center mr-2">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span> burger /</span>
              </Link>
              <Link href="#" className="flex items-center">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span> Pizza /</span>
              </Link>
            </div>
            <h3 className="font-medium">blog title goes here...</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              earum.
            </p>
            <Link
              href="#"
              className="btn"
              onClick={() => {
                router.push(".about");
              }}
            >
              read more
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <h3>
              <i className="fas fa-calendar" /> 21st may, 2021
            </h3>
            <img src="image/blog-2.jpg" />
          </div>
          <div className="content">
            <div className="flex tags">
              <Link href="#" className="flex items-center mr-2">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span>Food /</span>
              </Link>
              <Link href="#" className="flex items-center mr-2">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span> burger /</span>
              </Link>
              <Link href="#" className="flex items-center">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span> Pizza /</span>
              </Link>
            </div>
            <h3 className="font-medium">blog title goes here...</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              earum.
            </p>
            <Link href="#" className="btn">
              read more
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <h3>
              <i className="fas fa-calendar" /> 21st may, 2021
            </h3>
            <img src="image/blog-3.jpg" />
          </div>
          <div className="content">
            <div className="flex tags">
              <Link href="#" className="flex items-center mr-2">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span>Food /</span>
              </Link>
              <Link href="#" className="flex items-center mr-2">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span> burger /</span>
              </Link>
              <Link href="#" className="flex items-center">
                <BsFillTagFill className="text-[#27ae60] mr-2" />
                <span> Pizza /</span>
              </Link>
            </div>
            <h3 className="font-medium">blog title goes here...</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              earum.
            </p>
            <Link href="#" className="btn">
              read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
