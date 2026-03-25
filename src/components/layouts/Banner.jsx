import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram, IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import Image from "../Image";
import pic from "/src/assets/pic.png";

const Banner = () => {
  return (
    <div className="bg-[#ECF0F3]">
      <Container className="border-b-1 border-gray-300">
        <Flex className="flex-col md:flex-row">
          <div className="pl-0 md:pl-[50px] text-center md:text-left md:w-[55%]">
            <h4 className="pt-[20px] md:pt-[50px] font-montserrat text-[15px] text-[#2b2424]">
              WELCOME TO MY WORLD
            </h4>

            <div className="pt-[15px] md:pt-[30px] lg:pt-10 lg:pb-20">
              <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-montserrat font-semibold text-[#2e2a2a]">
                Hi, I'm
              </h1>

              <h2 className="text-[30px] not-md:px-3  md:text-[40px] lg:text-[48px] font-montserrat font-semibold text-[#FF0055]">
                Jannatul Ferdaush Arshe,
              </h2>

              <h2 className="text-[30px] not-md:px-3 md:text-[40px] lg:text-[48px] font-montserrat font-semibold text-[#2e2a2a]">
                a Front-End Developer.
              </h2>

              <p className="not-md:px-3 font-montserrat w-full md:w-[100%] lg:w-[70%] mx-auto md:mx-0 font-medium text-[14px] md:text-[16px] text-[#5a5353] py-5 leading:5 md:leading-7">
                I build fast, responsive websites using React and modern
                frontend tools. I focus on clean UI, high performance, and
                smooth user experiences.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[30%] flex justify-center md:justify-start mt-5 md:mb-0 mb-10 md:mt-0">
            <Image src={pic} className="w-[60%] md:w-full md:ml-[50px]" />
          </div>
        </Flex>

        <Flex className="flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="pl-0 md:pl-[50px] pb-[50px] md:pb-[100px]">
            <h4 className="md:mb-5 mb-3 text-[#070707] text-[16px] font-montserrat font-medium">
              FIND WITH ME
            </h4>

            <Flex className="justify-center md:justify-start">
              <div className="py-4 px-4 shadow-5xl text-gray-600 text-[24px] bg-gray-100 rounded-xl hover:bg-[#FF0055] hover:text-white duration-150">
                <Link to={"https://www.facebook.com/arshe.14.02/"}>
                  <LuFacebook />
                </Link>
              </div>

              <div className="ml-[10px] md:ml-[15px] py-4 px-4 shadow-5xl text-gray-600 text-[24px] bg-gray-100 rounded-xl hover:bg-[#FF0055] hover:text-white duration-150">
                <Link to={"https://www.instagram.com/arshe.14/"}>
                  <IoLogoInstagram />
                </Link>
              </div>

              <div className="ml-[10px] md:ml-[15px] py-4 px-4 shadow-5xl text-gray-600 text-[24px] bg-gray-100 rounded-xl hover:bg-[#FF0055] hover:text-white duration-150">
                <Link to={"https://github.com/arshe-14"}>
                  <FaGithub />
                </Link>
              </div>
            </Flex>
          </div>
          <div className="pl-0 md:pl-[50px] pb-[50px] md:pb-[100px]">
            <h4 className="md:mb-5 mb-3 text-[#070707] text-[16px] font-montserrat font-medium">
              BEST SKILL ON
            </h4>

            <Flex className="justify-center md:justify-start">
              <div className="py-4 px-4 shadow-5xl text-gray-600 text-[24px] bg-gray-100 rounded-xl hover:bg-[#FF0055] hover:text-white duration-150">
                <FiFigma />
              </div>

              <div className="ml-[10px] md:ml-[15px] py-4 px-4 shadow-5xl text-gray-600 text-[24px] bg-gray-100 rounded-xl hover:bg-[#FF0055] hover:text-white duration-150">
                <RiTailwindCssFill />
              </div>

              <div className="ml-[10px] md:ml-[15px] py-4 px-4 shadow-5xl text-gray-600 text-[24px] bg-gray-100 rounded-xl hover:bg-[#FF0055] hover:text-white duration-150">
                <IoLogoReact />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
