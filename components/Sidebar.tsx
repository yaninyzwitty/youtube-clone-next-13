import {
  AdjustmentsVerticalIcon,
  HomeIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Sidebar() {
  return (
    <div className="max-w-xs min-w-[20rem] flex flex-col gap-2 p-3 cursor-pointer">
      <div className="p-2 ">
        <HomeIcon className="h-8" />
        <p className="text-xs">Home</p>
      </div>
      <div className="p-2">
        <AdjustmentsVerticalIcon className="h-8 " />
        <p className="text-xs">Shorts</p>
      </div>
      <div className="p-2 ">
        <VideoCameraSlashIcon className="h-8" />
        <p className="text-xs mr-12">Subscriptions</p>
      </div>
      <div className="p-2">
        <VideoCameraIcon className="h-8" />
        <p className="text-xs">Library</p>
      </div>
    </div>
  );
}

export default Sidebar;
