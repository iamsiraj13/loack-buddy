import mobile from "../assets/images/mobile.png";
import img from "../assets/images/img.png";
import key from "../assets/images/key.png";
import lock from "../assets/images/lock.png";
import password from "../assets/images/password.png";
import user from "../assets/images/user.png";
import home from "../assets/images/home.png";
import VerificationInput from "react-verification-input";
import cicle from "../assets/images/circle.png";
import cicle2 from "../assets/images/circle2.png";
import Timer from "../components/Timer";
import { useTimer } from "react-timer-hook";
import { useState } from "react";

const PageTwo = () => {
  const [show, setShow] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180);

  const { seconds, minutes, isRunning, restart } = useTimer({
    time,
    onExpire: () => setShow(true),
  });

  return (
    <div className="bg-[#F6EBDE] min-h-screen relative overflow-hidden">
      <div className="h-full  py-[12] xxl:min-h-[calc(100vh-120px)] w-full  bg-[#F6EBDE] flex items-center relative ">
        <img
          src={cicle}
          alt=""
          className="absolute -left-16 -bottom-16 w-[20%] circle"
        />
        <img
          src={cicle2}
          alt=""
          className="absolute right-[150px] -bottom-[250px] circle2"
        />
        <div className="w-full lg:w-[1030px] 2xl:w-[1362px] p-8 mx-auto animate__animated animate__fadeInRight animate__delay-1s">
          <div
            className="flex flex-col xl:flex-row items-center  p-4 rounded-lg backdrop-blur-[3.5px] relative"
            style={{ boxShadow: "10px 12px 20px 0px #EF936B" }}
          >
            <div className="w-full lg:w-1/2 xl:px-[80px] order-2 lg:order-1 pb-[100px] xl:pb-0 pt-[50px] xl:pt-0 animate__animated animate__fadeInUp form-phone">
              <p className="text-center font-semibold text-[20px] text-[#FF5D29] capitalize">
                submit code
              </p>
              <div className="flex justify-center ">
                <VerificationInput
                  autoFocus={false}
                  placeholder="_"
                  classNames={{
                    container: "container",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                  }}
                  length={5}
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 180);
                    restart(time);
                  }}
                  className="bg-gradient-to-r from-[#FFBB8B] to-[#FF956C] text-white text-[20px] font-semibold px-8 uppercase py-2 mt-4 rounded-full"
                >
                  verify
                </button>
              </div>
              <div>
                {/*--------------- time -------------- */}
                {!isRunning && show ? (
                  <p
                    onClick={() => {
                      const time = new Date();
                      time.setSeconds(time.getSeconds() + 10);
                      restart(time);
                    }}
                    className="text-center text-[#F6754E] text-[15px] font-semibold"
                  >
                    Resend Code
                  </p>
                ) : (
                  <Timer seconds={seconds} minutes={minutes} />
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-2 ">
              <div className="w-full h-full relative">
                <img
                  className="absolute -top-2 xl:-top-2 w-[20%]  xxl:w-[15%] left-[50px] xl:left-[125px] user z-50"
                  src={user}
                  alt=""
                />
                <img
                  className="absolute top-[70px] lg:top-[120px] lg:-left-10 w-[30%] lg:w-auto img z-50"
                  src={img}
                  alt=""
                />
                <img
                  className="animate__animated animate__fadeInRight phone-img"
                  src={mobile}
                  style={{ zIndex: "-1" }}
                  alt=""
                />
                <img
                  className="absolute right-0 top-[40%] w-[25%] translate-y-[-40%] home"
                  src={home}
                  alt=""
                />
                <img
                  className="absolute -left-2 lg:-left-8 top-[150px] lg:top-[60%] w-[20%] lg:w-auto key z-50"
                  src={key}
                  alt=""
                />
                <img
                  className="absolute top-8 lg:top-12 left-8 lg:left-14 w-[60%] lock "
                  src={lock}
                  alt=""
                />
                <img
                  className="absolute right-12 lg:right-[120px] w-[60%] lg:auto -bottom-6 lg:-bottom-6 password z-50"
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

export default PageTwo;
