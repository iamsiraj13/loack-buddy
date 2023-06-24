import { FaUserAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#F5EBDF] w-full h-[120px] flex items-center overflow-hidden">
      <div className="lg:pl-[65px] px-[20px] xl:pr-[125px] w-full flex justify-between items-center  overflow-hidden">
        {/*----------- header left---------- */}
        <Link
          to="/"
          className="lg:w-5/12 flex items-center gap-2 lg:gap-[18px] "
        >
          <div>
            <img
              src={logo}
              alt=""
              className="w-[80%] lg:w-auto animate__animated animate__zoomIn logo"
            />
          </div>
          <div>
            <h2 className="font-extrabold flex text-[19px] xl:text-[50px] 2xl:text-[70px] uppercase ">
              <div className="text-[#FE9E6B] animate__animated animate__slideInUp lock-text">
                lock
              </div>
              <div className="buddy animate__animated animate__zoomIn ">
                buddy
              </div>
            </h2>
          </div>
        </Link>
        {/*----------- header right ---------- */}
        <div className="lg:w-7/12 lg:pl-[100px] flex items-center justify-between gap-[70px] overflow-hidden">
          {/* navigation  */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-[70px] capitalize">
              <li className="font-medium text-[18px] text-[#FF7935] animate__animated animate__slideInUp  one">
                <Link to="/">home</Link>
              </li>
              <li className="font-medium text-[18px] text-[#FF7935] animate__animated animate__slideInUp two">
                about
              </li>
              <li className="font-medium text-[18px] text-[#FF7935] animate__animated animate__slideInUp three">
                contact us
              </li>
            </ul>
          </div>
          {/* search  */}
          <div className="flex items-center gap-[36px]">
            <div className="hidden h-[42px]   xl:flex items-center border-2 border-[#F9B98F] rounded-full gap-4 search">
              <input
                type="text"
                className="bg-[#F9B98F] w-[300px]
                 rounded-full px-3 py-2"
              />
              <span>
                <HiOutlineSearch className="text-[#F9B98F] text-[36px] pr-3 font-extrabold" />
              </span>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <FaUserAlt className="text-[#F9B98F] text-[30px] animate__animated animate__zoomIn  nav__user" />
              </span>
              <span>
                <AiOutlineMenu className="text-[#FF7935] text-[40px] font-bold lg:hidden" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
