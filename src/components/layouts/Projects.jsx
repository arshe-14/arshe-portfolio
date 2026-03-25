import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import orebi from "/src/assets/orebi.png";
import game from "/src/assets/game.png";
import portostar from "/src/assets/portostar.png";
import portfolio from "/src/assets/portfolio.png";
import agency from "/src/assets/agency.png";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-[#ECF0F3]" id="projects">
      <Container
        className={
          "py-[50px] md:py-[70px] lg:py-[100px] md:pl-[50px] border-b-1 border-gray-300"
        }
      >
        <div className="text-center md:text-left font-montserrat font-bold text-[36px] md:text-[40px] text-[#070707] pb-[20px] md:pb-[25px]">
          My Projects
        </div>
        <div className="font-montserrat font-semibold md:text-[20px] text-[16px] text-center md:text-left md:text-[24px] text-gray-800 pb-[50px] md:pb-[75px] md:w-[60%]">
          Blending creativity and code into real projects
        </div>
        <div className="flex">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <Image
                className="w-full md:w-[50%] lg:w-[45%] not-md:px-3 md:h-[300px] lg:h-[300px]"
                src={orebi}
              />

              <div className="w-full md:w-[45%]">
                <h3 className="not-md:px-4 font-montserrat font-medium text-[20px] md:text-[24px] text-[#070707] pb-[15px]">
                  Orebi – E-commerce Web Application
                </h3>

                <p className="not-md:px-4 font-montserrat font-normal text-[14px] md:text-[16px] text-[#070707] pb-[15px] leading-6">
                  Orebi is a modern, responsive e-commerce platform designed to
                  provide a seamless online shopping experience. Built with
                  React, it features dynamic product listings, interactive
                  search and filter options, a shopping cart, and secure
                  checkout functionality. The project emphasizes clean UI
                  design, smooth performance, and user-friendly navigation,
                  showcasing skills in front-end development, state management
                  (Redux), and integrating APIs for real-time data handling.
                </p>

                <div className="flex flex-wrap gap-2 not-md:px-4">
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>React</h3>
                    <FaReact className="m-1" />
                  </div>

                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>Tailwind CSS</h3>
                    <RiTailwindCssFill className="m-1" />
                  </div>
                  <div className="border py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    API
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>Redux</h3>
                    <SiRedux className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>Slider</h3>
                    <CiSliderHorizontal className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>JavaScript</h3>
                    <IoLogoJavascript className="m-1" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 not-md:px-3 mt-[20px]">
                  <Link
                    to={"https://orebi-react-xi.vercel.app/"}
                    className="border w-[100px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    View Live
                  </Link>

                  <Link
                    to={"https://github.com/arshe-14/orebi-react"}
                    className="border w-[120px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <Image
                className="w-full md:w-[50%] lg:w-[45%] not-md:px-3 md:h-[300px] lg:h-[300px]"
                src={game}
              />

              <div className="w-full md:w-[45%]">
                <h3 className="not-md:px-4 font-montserrat font-medium text-[20px] md:text-[24px] text-[#070707] pb-[15px]">
                  Number Guessing Game
                </h3>

                <p className="not-md:px-4 font-montserrat font-normal text-[14px] md:text-[16px] text-[#070707] pb-[15px] leading-6">
                  A fun and interactive number guessing game where users try to
                  guess a randomly generated number within 5 attempts. Built
                  with JavaScript, HTML, and CSS, the game provides instant
                  feedback for each guess, tracks attempts, and features a
                  simple, user-friendly interface. This project highlights
                  skills in DOM manipulation, conditional logic, and front-end
                  problem solving.
                </p>

                <div className="flex flex-wrap gap-2 not-md:px-4">
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>JavaScript</h3>
                    <IoLogoJavascript className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>CSS</h3>
                    <FaCss className="m-1" />
                  </div>

                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>HTML</h3>
                    <FaHtml5 className="m-1" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 not-md:px-3 mt-[20px]">
                  <Link
                    to={"https://arshe-14.github.io/numberGuessingGame/"}
                    className="border w-[100px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    View Live
                  </Link>

                  <Link
                    to={"https://github.com/arshe-14/numberGuessingGame"}
                    className="border w-[120px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <Image
                className="w-full md:w-[50%] lg:w-[45%] not-md:px-3 md:h-[300px] lg:h-[300px]"
                src={portostar}
              />

              <div className="w-full md:w-[45%]">
                <h3 className="not-md:px-4 font-montserrat font-medium text-[20px] md:text-[24px] text-[#070707] pb-[15px]">
                  Portostar
                </h3>

                <p className="not-md:px-4 font-montserrat font-normal text-[14px] md:text-[16px] text-[#070707] pb-[15px] leading-6">
                  PortoStar is a sleek and responsive personal portfolio website
                  built with Tailwind CSS, HTML. It showcases projects, skills,
                  and experiences in a clean, interactive layout with smooth
                  navigation and modern UI elements. The project demonstrates
                  proficiency in front-end development, component-based
                  architecture, and responsive design, providing a professional
                  platform to present work effectively.
                </p>

                <div className="flex flex-wrap gap-2 not-md:px-4">
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>Responsive</h3>
                    <DiResponsive className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>Tailwind CSS</h3>
                    <RiTailwindCssFill className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>HTML</h3>
                    <FaHtml5 className="m-1" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 not-md:px-3 mt-[20px]">
                  <Link
                    to={"https://arshe-14.github.io/Portostar/"}
                    className="border w-[100px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    View Live
                  </Link>

                  <Link
                    to={"https://github.com/arshe-14/Portostar"}
                    className="border w-[120px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <Image
                className="w-full md:w-[50%] lg:w-[45%] not-md:px-3 md:h-[300px] lg:h-[300px]"
                src={portfolio}
              />

              <div className="w-full md:w-[45%]">
                <h3 className="not-md:px-4 font-montserrat font-medium text-[20px] md:text-[24px] text-[#070707] pb-[15px]">
                  Fazile – Personal Portfolio Website
                </h3>

                <p className="not-md:px-4 font-montserrat font-normal text-[14px] md:text-[16px] text-[#070707] pb-[15px] leading-6">
                  Fazile is a personal portfolio website, built with HTML, CSS.
                  This project demonstrates my front-end development skills,
                  component-based architecture, and ability to create
                  professional, user-friendly web interfaces.
                </p>

                <div className="flex flex-wrap gap-2 not-md:px-4">
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>CSS</h3>
                    <FaCss className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>Bootstrap</h3>
                    <FaBootstrap className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>HTML</h3>
                    <FaHtml5 className="m-1" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 not-md:px-3 mt-[20px]">
                  <Link
                    to={"https://arshe-14.github.io/portfolioM.Fazile/"}
                    className="border w-[100px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    View Live
                  </Link>

                  <Link
                    to={"https://github.com/arshe-14/portfolioM.Fazile"}
                    className="border w-[120px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <Image
                className="w-full md:w-[50%] lg:w-[45%] not-md:px-3 md:h-[300px] lg:h-[300px]"
                src={agency}
              />

              <div className="w-full md:w-[45%]">
                <h3 className="not-md:px-4 font-montserrat font-medium text-[20px] md:text-[24px] text-[#070707] pb-[15px]">
                  Creative Agency
                </h3>

                <p className="not-md:px-4 font-montserrat font-normal text-[14px] md:text-[16px] text-[#070707] pb-[15px] leading-6">
                  A modern landing page for a digital agency, built with HTML,
                  CSS. The page includes sections for services, portfolio,
                  testimonials, and contact information, featuring smooth
                  scrolling, interactive elements, and a clean, professional UI.
                  This project demonstrates skills in front-end development, and
                  creating visually appealing, user-friendly web interfaces.
                </p>

                <div className="flex flex-wrap gap-2 not-md:px-4">
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>CSS</h3>
                    <FaCss className="m-1" />
                  </div>
                  <div className="border flex py-[5px] px-[12px] rounded-4xl bg-[#FF0055] text-white text-sm">
                    <h3>HTML</h3>
                    <FaHtml5 className="m-1" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 not-md:px-3 mt-[20px]">
                  <Link
                    to={"https://arshe-14.github.io/agencyCreative/"}
                    className="border w-[100px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    View Live
                  </Link>

                  <Link
                    to={"https://github.com/arshe-14/agencyCreative"}
                    className="border w-[120px] text-center py-1.5 bg-transparent text-black rounded-4xl"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
