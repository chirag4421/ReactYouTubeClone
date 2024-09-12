import React from "react";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";

export default function Home() {
  const { data,loading } = useAuth();
  console.log(data);
  console.log(loading)
  return (
    <>
      <div className="flex mt-20">
        <Sidebar />
       
        <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
            {!loading  && data.map((item) => {
              if (item.type !== "video") return false;

              return <Video key={item.id} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
