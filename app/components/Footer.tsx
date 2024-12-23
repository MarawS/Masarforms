import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#36A1BC] text-center py-6">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-wrap justify-center items-center gap-4 text-white">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
                    </p>

                    <div className="flex space-x mt-4 sm:mt-0">
                        <a
                            href="https://www.tiktok.com/@masar_2030?_t=8sSss2hAUjJ&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillTikTok className="text-2xl text-white" />
                        </a>
                        <a
                            href="https://x.com/masar_2030?s=11"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaSquareXTwitter className="text-2xl text-white" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/masar2030/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-2xl text-white" />
                        </a>
                        <a
                            href="https://youtube.com/@masar-yt1wy?si=BG7ADwTp-o8W9h9g"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="text-2xl text-white" />
                        </a>




                    </div>

                </div>
            </div><br />
        </footer >
    );
};

export default Footer;
