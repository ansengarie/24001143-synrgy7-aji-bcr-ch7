import feather from "feather-icons";
import { useEffect } from "react";

const Footer: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <footer className="py-20">
      <div className="flex items-center justify-center w-full h-full">
        <div className="container justify-between block w-11/12 space-y-4 md:w-3/4 md:flex md:space-y-0">
          <div className="w-full md:w-1/4">
            <div className="space-y-4">
              <p className="text-sm font-light text-black w-[80%] md:w-full">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="text-sm font-light text-black">
                binarcarrental@gmail.com
              </p>
              <p className="text-sm font-light text-black">081-233-334-808</p>
            </div>
          </div>
          <div className="w-fit">
            <div className="flex flex-col space-y-4">
              <a
                href="#our"
                className="text-sm font-normal text-black md:font-light"
              >
                Our Services
              </a>
              <a
                href="#why"
                className="text-sm font-normal text-black md:font-light"
              >
                Why Us
              </a>
              <a
                href="#testimonial"
                className="text-sm font-normal text-black md:font-light"
              >
                Testimonial
              </a>
              <a
                href="#faq"
                className="text-sm font-normal text-black md:font-light"
              >
                FAQ
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="space-y-4">
              <p className="text-sm font-light text-black">Connect with us</p>
              <div className="flex justify-start gap-4">
                <i
                  data-feather="facebook"
                  aria-label="facebook"
                  className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"
                ></i>
                <i
                  data-feather="instagram"
                  aria-label="instagram"
                  className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"
                ></i>
                <i
                  data-feather="twitter"
                  aria-label="twitter"
                  className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"
                ></i>
                <i
                  data-feather="mail"
                  aria-label="mail"
                  className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"
                ></i>
                <i
                  data-feather="twitch"
                  aria-label="twitch"
                  className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"
                ></i>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="space-y-4">
              <p className="text-sm font-light text-black">
                Copyright Binar 2022
              </p>
              <div className="bg-[#0D28A6] w-[100px] h-9"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
