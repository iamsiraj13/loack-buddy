import mobile from "../assets/images/mobile.png";
import img from "../assets/images/img.png";
import key from "../assets/images/key.png";
import lock from "../assets/images/lock.png";
import password from "../assets/images/password.png";
import user from "../assets/images/user.png";
import home from "../assets/images/home.png";
import { Link } from "react-router-dom";
import circle from "../assets/images/circle.png";
import circle2 from "../assets/images/circle2.png";

const PageOne = () => {
  return (
    <div className="bg-[#F6EBDE] min-h-screen">
      <div className="h-full  py-[12]  xxl:min-h-screen w-full  bg-[#F6EBDE] flex items-center relative overflow-hidden ">
        <div className="circle-wrapper">
          <img
            src={circle}
            alt="circle"
            className="absolute -left-16 bottom-30 circle "
          />
        </div>
        <div className="w-full lg:w-[1030px] 2xl:w-[1362px] p-8 mx-auto animate__animated animate__fadeInRight animate__delay-3s">
          <div
            className="flex flex-col xl:flex-row items-center  p-4 rounded-lg backdrop-blur-[3.5px]  "
            style={{ boxShadow: "10px 12px 20px 0px #EF936B" }}
          >
            <img
              src={circle2}
              alt="circle"
              className="absolute right-8  -bottom-[350px] z-[999999999999] circle2"
            />
            <div className="w-full lg:w-1/2 xl:px-[80px] order-2 lg:order-1 pb-[100px] xl:pb-0 pt-[50px] xl:pt-0 animate__animated animate__fadeInUp form-phone">
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
                    type="number"
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
                  className="absolute -top-2 xl:-top-2 w-[20%]  xxl:w-[15%] left-[50px] xl:left-[125px] user "
                  src={user}
                  alt=""
                />
                <img
                  className="absolute top-[70px] lg:top-[120px] lg:-left-10 w-[30%] lg:w-auto img z-[999999999]"
                  src={img}
                  alt=""
                />
                <img
                  className="animate__animated animate__fadeInRight phone-img -z-[99]"
                  src={mobile}
                  alt=""
                />
                <img
                  className="absolute right-0 top-[50%] w-[25%] translate-y-[-50%]  home"
                  src={home}
                  alt=""
                />
                <img
                  className="absolute -left-2 lg:-left-8 top-[150px] lg:top-[60%] w-[20%] lg:w-auto key"
                  src={key}
                  alt=""
                />
                <img
                  className="absolute top-8 lg:top-12 left-8 lg:left-14 w-[60%] lock"
                  src={lock}
                  alt=""
                />
                <img
                  className="absolute right-12 lg:right-[120px] w-[60%] lg:auto -bottom-6 lg:-bottom-6 password"
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
