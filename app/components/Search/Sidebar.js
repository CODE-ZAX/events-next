import React from "react";

import Searchbar from "./Searchbar";
import CountrySelect from "./CountrySelect";
import Categories from "./Categories";
import logo from "../../../public/common/EventLogo.png";
import useSearchStore from "@/app/stores/search.store";
import Link from "next/link";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div
      className="d-none d-md-block col-xl-3 col-md-4 p-0"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <div className="bg-primary  px-2 py-3">
        <Link href={"/"}>
          <Image src={logo} alt="Sidebar Logo" height={40} />
        </Link>
      </div>
      <div className="mt-2 p-2">
        <Searchbar />
        <hr />
        <div>
          <h5>COUNTRY</h5>
          <CountrySelect />
        </div>
        <hr />
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;
