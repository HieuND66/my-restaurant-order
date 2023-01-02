import Link from "next/link";
import { FC, useState, useRef, useEffect } from "react";

const HomeSection: FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;
    if (mainCursor.current) {
      mainCursor.current.style.transform = `translate3d(${
        (mainCursor.current.clientWidth - mouseX * 2) / 90
      }px, ${(mainCursor.current.clientWidth - mouseY * 2) / 90}px, 0)`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove, true);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove, true);
    };
  }, []);
  return (
    <section className="home" id="home">
      <div className="content">
        <span>welcome foodies</span>
        <h3 className="font-semibold">
          different spices for the different tastes 😋
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
          dolores temporibus hic quam debitis tenetur harum nemo.
        </p>
        <Link href="#" className="btn">
          order now
        </Link>
      </div>
      <div
        className="image"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseOver={() => setIsHovering(true)}
      >
        <div className="home-img">
          <img src="/image/home-img.png" className="" />
        </div>
        <div className="home-parallax-img" ref={mainCursor}>
          <img src="/image/home-parallax-img.png" className="" />
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
