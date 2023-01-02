import Link from "next/link";
import { FC } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Slider from "react-slick";
const FeedbackSection: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <section className="pb-24">
      <div className="bg-white header-section">
        <div className=" heading">
          <span>My Restaurant</span>
          <h3 className="font-semibold">Customers Feedback</h3>
        </div>
        <Slider {...settings}>
          <div className="flex card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Fajar Siddiq</p>
              <p className="my-2 text-lg">salmon salad</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          <div className="flex card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback_5.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Justyna Helen</p>
              <p className="my-2 text-lg">Sloppy Joe</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          <div className="flex mr-6 card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback_1.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Rob Team</p>
              <p className="my-2 text-lg">Sandwich</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          <div className="flex mr-6 card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback_2.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Kane Team</p>
              <p className="my-2 text-lg">Chicken King</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          <div className="flex mr-6 card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback_3.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Yoona Take</p>
              <p className="my-2 text-lg">Salisbury Steak</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          <div className="flex mr-6 card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback_1.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Mark</p>
              <p className="my-2 text-lg">Mark Team</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
          <div className="flex mr-6 card h-[300px] bg-[#f7f7f7] border-2 border-gray-500 rounded-2xl shadow-lg">
            <img
              src="/image/feedback_4.jpg"
              alt=""
              className="object-cover w-1/2 h-full mr-4 rounded-tl-2xl rounded-bl-2xl"
            />
            <div className="p-6">
              <p className="text-2xl font-semibold text-black">Lisa take out</p>
              <p className="my-2 text-lg">Eggs Benedict</p>
              <p className="text-lg">
                "Lorem ipsum dolor sit amdi scing elitr, sed diam nonumy eirmo
                tem invidunt ut labore etdolo magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam."
              </p>
              <div className="flex items-center mt-6 text-3xl text-yellow-500">
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill className="mr-2" />
                <BsFillStarFill />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default FeedbackSection;
