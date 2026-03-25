import React, { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import Flex from "../Flex";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#ECF0F3]">
      <Container className="py-[20px] ">
        <Flex className="justify-between items-center">
          <h4
            id="home"
            className="font-bold font-montserrat text-[20px] not-lg:ml-7"
          >
            Arshe | Developer
          </h4>
          <button
            className="md:hidden text-xl not-md:mr-7 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <ul className="hidden md:flex gap-6 not-lg:mr-7 font-montserrat font-medium md:text-[15px] text-[#2e2a2a] ">
            <li
              onClick={() => {
                document.getElementById("home").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer"
            >
              HOME
            </li>
            <li
              onClick={() => {
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer"
            >
              ABOUT
            </li>
            <li
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer"
            >
              PROJECTS
            </li>
            <li
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer"
            >
              CONTACT
            </li>
          </ul>
        </Flex>
        {open && (
          <ul className="md:hidden mt-4 flex flex-col gap-3 text-center">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">SERVICES</Link>
            </li>
            <li>
              <Link to="/">PROJECTS</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
        )}
      </Container>
    </div>
  );
};

export default Header;
