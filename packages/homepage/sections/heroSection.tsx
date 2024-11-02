import data from "@/ui/ui-en.json";
import { FaPlay } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
export default function HeroSection() {
  const heroSectionData = data.sections.hero;
  return (
    <div className="w-screen h-[75vh] lg:h-screen bg-hero bg-cover px-5 lg:px-10">
      <div className="h-full flex flex-col justify-center">
        <h3 className="text-xl lg:text-3xl text-lime">Moov</h3>
        <div className="flex items-center space-x-2 text-3xl lg:text-[60px] lg:leading-[120px]">
          <p className="text-white ">
            {heroSectionData.banner.text1} <b className="font-medium text-lime">{heroSectionData.banner.text2} </b>
          </p>
        </div>
        <p className="text-3xl lg:text-[60px] text-white mb-4 lg:mb-8">{heroSectionData.banner.text3} </p>
        <div className="flex items-center space-x-5 mt-1">
          <p className="px-2 py-[2px] bg-white text-black w-fit font-bold h-6 flex items-center justify-center">
            {heroSectionData.movieButton}
          </p>
          <p className="px-2 py-[2px] text-white border-solid border-[1px] w-fit font-bold h-6 flex items-center justify-center border-white">
            {heroSectionData.qualityButton}
          </p>
          <p className="text-lg">Action,Drama</p>
          <div className="flex items-center space-x-1 text-lg">
            <MdOutlineCalendarMonth fill="#B0DC00" />
            <p>{heroSectionData.yearButton}</p>
          </div>
        </div>
        <button className="flex items-center space-x-3 px-3 py-1 border-[1px] border-solid bg-[#363636] border-lime rounded-full w-fit mt-6 hover:bg-lime hover:text-black cursor-pointer duration-300">
          <FaPlay size={14} />
          <p className="uppercase">{heroSectionData.playButton}</p>
        </button>
      </div>
    </div>
  );
}
