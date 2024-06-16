import { Link } from "react-router-dom";
import { Inoticias } from "../interfaces/Inoticiasinterface";

interface props {
  data: Inoticias;
}

const CardBanner = ({ data }: props) => {

  return (
    <aside className="flex items-center justify-center m-auto text-[1.1em] flex-col w-[80%] lg:flex-row h-30">
      <div className="bg-gradient-to-r from-lime-800  to-lime-700 flex items-center justify-center h-ful p-4  w-full lg:w-auto lg:p-6 border lg:border-b-gray-800">
        {data && <>{data.items[0].titulo}</>}
      </div>
      <div className="text-[#6C8C3B] font-bold flex items-center justify-center hover:text-lime-800 transition-all ease-linear duration-300 w-full lg:w-auto border border-b-gray-800">
          <Link
            to={"/noticias"}
            className="bg-white w-full p-4 lg:p-6"
            >
          SAIBA MAIS
          </Link>
      </div>
    </aside>
  );
};

export default CardBanner;
