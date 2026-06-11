import { Link } from "react-router-dom";
import { Inoticias } from "../interfaces/Inoticiasinterface";
import { RiArrowRightSLine } from "react-icons/ri";

interface props {
  data: Inoticias;
}

const CardBanner = ({ data }: props) => {
  return (
    <aside className="md:flex m-auto text-[1.1em] flex-col  lg:flex-row h-30">
      <div className="relative bg-gradient-to-r from-lime-800  to-lime-700 flex items-center justify-center h-ful p-4  w-full lg:w-auto lg:p-6">
       <p className="text-gray-100 font-medium tracking-wide">
        {data && <>{data.items[0].titulo}</>}
       </p>

      </div>
      <div className="text-[#6C8C3B] font-bold flex items-center justify-center hover:text-lime-800 transition-all ease-linear duration-300 w-full lg:w-auto">
          <Link
            to={"/noticias"}
            className="border-b md:border text-white font-bold flex items-center justify-center hover:text-lime-800 transition-all ease-linear duration-300 w-full p-4 lg:p-6"
            >
          SAIBA MAIS <RiArrowRightSLine className="w-5 h-5 ml-2" />
          </Link>
      </div>
    </aside>
  );
};

export default CardBanner;
