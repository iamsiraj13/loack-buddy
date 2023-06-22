import mobile from "../assets/images/mobile.png";
import img from "../assets/images/img.png";
import key from "../assets/images/key.png";
import lock from "../assets/images/lock.png";
import password from "../assets/images/password.png";
import user from "../assets/images/user.png";
import home from "../assets/images/home.png";
import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div className="bg-[#F6EBDE] min-h-screen">
      <div className="h-full  py-[12] xxl:min-h-[calc(100vh-120px)] w-full  bg-[#F6EBDE] flex items-center relative">
        <div className="w-full lg:w-[1030px] 2xl:w-[1362px] p-8 mx-auto">
          <div
            className="flex flex-col xl:flex-row items-center  p-4 rounded-lg backdrop-blur-[3.5px] relative"
            style={{ boxShadow: "10px 12px 20px 0px #EF936B" }}
          >
            <div className="w-full lg:w-1/2 xl:px-[80px] order-2 lg:order-1 pb-[100px] xl:pb-0 pt-[50px] xl:pt-0">
              <form>
                <div className="flex flex-col 2xl:px-14">
                  <label
                    htmlFor="number"
                    className="text-[#FF5D29] font-bold ml-8 capitalize"
                  >
                    add number
                  </label>
                  <input
                    id="number"
                    type="text"
                    className="bg-[#F7CDB1] px-4 py-3 rounded-full"
                  />
                </div>
                <div className="flex justify-center">
                  <Link to="verify">
                    <button className="bg-gradient-to-r from-[#FFBB8B] to-[#FF956C] text-white text-[20px] font-semibold px-8 uppercase py-2 mt-4 rounded-full">
                      send code
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2 lg:order-2 ">
              <div className="w-full h-full relative">
                <img
                  className="absolute -top-2 xl:-top-2 w-[20%]  xxl:w-[15%] left-[50px] xl:left-[125px]"
                  src={user}
                  alt=""
                />
                <img
                  className="absolute top-[70px] lg:top-[120px] lg:-left-10 w-[30%] lg:w-auto"
                  src={img}
                  alt=""
                />
                <img className="" src={mobile} alt="" />
                <img
                  className="absolute right-0 top-[50%] w-[25%] translate-y-[-50%]"
                  src={home}
                  alt=""
                />
                <img
                  className="absolute -left-2 lg:-left-8 top-[150px] lg:top-[60%] w-[20%] lg:w-auto"
                  src={key}
                  alt=""
                />
                <img
                  className="absolute top-8 lg:top-12 left-8 lg:left-14 w-[60%]"
                  src={lock}
                  alt=""
                />
                <img
                  className="absolute right-12 lg:right-[120px] w-[60%] lg:auto -bottom-6 lg:-bottom-6"
                  src={password}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
