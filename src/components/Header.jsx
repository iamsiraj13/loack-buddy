import { FaUserAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#F5EBDF] w-full h-[120px] flex items-center">
      <div className="lg:pl-[65px] px-[20px] xl:pr-[165px] w-full flex justify-between items-center ">
        {/*----------- header left---------- */}
        <Link to="/" className="flex items-center gap-2 lg:gap-[18px] ">
          <div>
            <img src={logo} alt="" className="w-[80%] lg:w-auto" />
          </div>
          <div>
            <h2 className="font-extrabold text-[19px] xl:text-[50px] 2xl:text-[70px] uppercase">
              <span className="text-[#FE9E6B]">lock</span>
              <span className="buddy">buddy</span>
            </h2>
          </div>
        </Link>
        {/*----------- header right ---------- */}
        <div className="flex items-center gap-[70px]">
          {/* navigation  */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-[70px] capitalize">
              <li className="font-medium text-[18px] text-[#FF7935]">
                <Link to="/">home</Link>
              </li>
              <li className="font-medium text-[18px] text-[#FF7935]">about</li>
              <li className="font-medium text-[18px] text-[#FF7935]">
                contact us
              </li>
            </ul>
          </div>
          {/* search  */}
          <div className="flex items-center gap-[36px]">
            <div className="hidden xl:flex items-center border-2 border-[#F9B98F] rounded-full gap-4">
              <input
                type="text"
                className="bg-[#F9B98F] rounded-full px-3 py-2"
              />
              <span>
                <HiOutlineSearch className="text-[#F9B98F] text-[36px] pr-3 font-extrabold" />
              </span>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <FaUserAlt className="text-[#F9B98F] text-[36px]" />
              </span>
              <span>
                <AiOutlineMenu className="text-[#FF7935] text-[40px] font-bold" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
