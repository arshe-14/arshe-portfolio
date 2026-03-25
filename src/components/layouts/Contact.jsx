import React from "react";
import Container from "../Container";
import { LuPhone, LuMail } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="bg-white">
      <Container className="pt-[60px] md:pt-[100px] px-4 md:px-[50px] border-b border-gray-300">
        <div>
          <h2
            id="contact"
            className="font-montserrat font-bold text-[28px] md:text-[40px] text-[#070707] pb-[30px]"
          >
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[50px]">
            <div className="animate-pulse flex items-center gap-[15px] p-[20px] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md duration-300">
              <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#f5f5f5] text-primaryColor text-[20px]">
                <LuPhone />
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-[14px] md:text-[16px] text-[#070707]">
                  Phone
                </h4>
                <p className="text-[#767676] text-[14px] md:text-[15px]">
                  +880 1915112081
                </p>
              </div>
            </div>

            <div className="animate-pulse flex items-center gap-[15px] p-[20px] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md duration-300">
              <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#f5f5f5] text-primaryColor text-[20px]">
                <LuMail />
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-[14px] md:text-[16px] text-[#070707]">
                  Email
                </h4>
                <p className="text-[#767676] text-[14px] md:text-[15px]">
                  jannatulferdausharshe@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="pb-[16px] border-b border-[#F0F0F0] w-full md:w-[50%]">
            <h5 className="font-montserrat font-bold text-[14px] md:text-[16px] text-primaryColor mb-[10px]">
              Name
            </h5>
            <input
              type="text"
              placeholder="Your name here"
              className="w-full outline-0 text-[#767676] placeholder:text-[14px]"
            />
          </div>

          <div className="pb-[16px] border-b border-[#F0F0F0] mt-[20px] w-full md:w-[50%]">
            <h5 className="font-montserrat font-bold text-[14px] md:text-[16px] text-primaryColor mb-[10px]">
              Email
            </h5>
            <input
              type="text"
              placeholder="Your email here"
              className="w-full outline-0 text-[#767676] placeholder:text-[14px]"
            />
          </div>

          <div className="pb-[16px] border-b border-[#F0F0F0] mt-[20px] w-full md:w-[50%]">
            <h5 className="font-montserrat font-bold text-[14px] md:text-[16px] text-primaryColor mb-[10px]">
              Message
            </h5>
            <textarea
              rows="3"
              placeholder="Your message here"
              className="w-full outline-0 text-[#767676] placeholder:text-[14px]"
            />
          </div>

          <button className="w-full md:w-auto px-8 py-3 border border-primaryColor font-montserrat font-bold text-[14px] text-primaryColor hover:bg-[#262626] hover:text-white duration-300 mt-[30px] mb-[20px] md:mb-[70px]">
            Post
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
