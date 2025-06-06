import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useUtils } from "../context/UtilsContext";
export default function Sidebar() {
 
const {isSidebar,mobileShow, setMobileShow} = useUtils();

  const sidebarItems = [
    {
      groupName :"Home",
      groupItems:[
        
          {
            id: 1,
            name: "Home",
            icon: <GoHome />,
          },
          {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />,
          },
          {
            id: 3,
            name: "Subscription",
            icon: <MdOutlineSubscriptions />,
          },
        
      ],
    },
    {
      groupName :"You >",
      groupItems:
        [
          {
            id: 1,
            name: "Your Channel",
            icon: <PiUserSquareThin />,
          },
          {
            id: 2,
            name: "History",
            icon: <MdHistory />,
          },
          {
            id: 3,
            name: "Playlist",
            icon: <MdOutlineSubscriptions />,
          },
          {
            id: 4,
            name: "Your Videos",
            icon: <BiVideo />,
          },
          {
            id: 5,
            name: "Watch Later",
            icon: <MdOutlineWatchLater />,
          },
          {
            id: 6,
            name: "Linked Videos  ",
            icon: <AiOutlineLike />,
          },
        
      ],
    },
    {
      groupName :"Explore",
      groupItems:
        [
          {
            id: 1,
            name: "Trending",
            icon: <SiTrendmicro />,
          },
          {
            id: 2,
            name: "Shopping",
            icon: <HiOutlineShoppingBag />,
          },
          {
            id: 3,
            name: "Music",
            icon: <SiYoutubemusic />,
          },
          {
            id: 4,
            name: "Films",
            icon: <PiFilmSlateLight />,
          },
          {
            id: 5,
            name: "Live",
            icon: <CgMediaLive />,
          },
          {
            id: 6,
            name: "Gaming",
            icon: <IoGameControllerOutline />,
          },
          {
            id: 7,
            name: "News",
            icon: <FaRegNewspaper />,
          },
          {
            id: 8,
            name: "Sport",
            icon: <TfiCup />,
          },
          {
            id: 9,
            name: "Courses",
            icon: <SiStylelint />,
          },
          {
            id: 10,
            name: "Fashion & beauty",
            icon: <PiLightbulbLight />,
          },
          {
            id: 11,
            name: "Podcasts",
            icon: <MdPodcasts />,
          },
        
      ],
    },
    {
      groupName :"More from Youtube",
      groupItems:
        [
          {
            id: 1,
            name: "Youtube Premium",
            icon: <FaYoutube />,
          },
          {
            id: 2,
            name: "Youtube Studio",
            icon: <SiYoutubestudio />,
          },
          {
            id: 3,
            name: "Youtube Music",
            icon: <SiYoutubemusic />,
          },
          {
            id: 4,
            name: "Youtube Kids",
            icon: <SiYoutubekids />,
          },
        
      ],
    },
    {
      groupName :"Setting",
      groupItems:
        [
          {
            id: 1,
            name: "Setting",
            icon: <IoSettingsOutline />,
          },
          {
            id: 2,
            name: "Report History",
            icon: <MdOutlinedFlag />,
          },
          {
            id: 3,
            name: "Help",
            icon: <IoMdHelp />,
          },
          {
            id: 4,
            name: "Send Feedback",
            icon: <MdOutlineFeedback />,
          },
        
      ],
    },
  ]

  const ModelOverlay = ()=>{
    return(
      <div className="flex fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-30" onClick={()=>setMobileShow(!mobileShow)}></div>
    )
  }
  return (
    <>
      <div className={`${mobileShow ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[40%] sm:w-[20%]" : "hidden h-[calc(100vh-6.625rem)]  w-[18%]"}  overflow-y-scroll overflow-x-hidden xl:block xl:static px-2 lg:px-6`}>
        <div className="space-y-3 ">
          {sidebarItems.map((group) => {
            return (
           <div className="mb-5">
            <h1 className="font-bold">{group.groupName}</h1>
            {
              group.groupItems.map((item)=>{
                return(
                  <div key={item.id} className=" flex items-center space-x-4 hover:bg-slate-200 duration-300 rounded-xl p-1 my-1">
                <div className="text-sm cursor-pointer">{item.icon}</div>
                <span className="cursor-pointer">{item.name}</span>
              </div>
                )
              })
            }
           </div>
            );
          })}
        </div>
        <br />
        <hr />

        <div className="mt-3">
          <p className="text-sm text-gray-700">Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>
          <p className="font-semibold mt-2">© 2024 RC PVT. LTD</p>
        </div>
      </div>

      {mobileShow? <ModelOverlay/> : null}
    </>
  );
}
