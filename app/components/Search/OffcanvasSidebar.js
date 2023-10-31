"use client";
import React, { useState } from "react";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import CountrySelect from "./CountrySelect";
import Categories from "./Categories";
import logo from "../../../public/common/EventLogo.png";
import useSearchStore from "@/app/stores/search.store";

function OffcanvasSidebar() {
  const { toggleSidebar, isSidebarOpen } = useSearchStore();

  return (
    <>
      <Offcanvas
        isOpen={isSidebarOpen}
        toggle={toggleSidebar}
        placement="start"
      >
        <div className="bg-primary px-2 py-3 d-flex justify-content-between align-items-center">
          <div>
            <Link href="/">
              <Image src={logo} alt="Sidebar Logo" height={40} />
            </Link>
          </div>

          <div>
            <Button color="primary" onClick={toggleSidebar}>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/E6E6E6/delete-sign--v1.png"
                alt="delete-sign--v1"
              />
            </Button>
          </div>
        </div>
        <OffcanvasBody>
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
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

export default OffcanvasSidebar;
