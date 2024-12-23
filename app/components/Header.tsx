"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`flex items-center w-full py-3 px-4 sm:px-10 bg-transparent absolute top-0 z-50 transition-all duration-300 ease-in-out`}
        >

            <div className="relative w-full">
                <br />
                <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center">
                        <Link rel="stylesheet" href="https://forms.gle/i5LUjwrNrZTKiyaX6">

                            <motion.button
                                className=" text-sm md:text-md lg:text-md bg-[#36A1BC] text-white flex items-center transition-all rounded-3xl px-4 py-3"
                                whileHover={{ scale: 1.1 }}

                            >
                                للتسجيل في مسار
                            </motion.button>

                        </Link>
                    </div>

                    <div className="sm:hidden flex items-center">
                        <button
                            className="text-black"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
                        </button>
                    </div>

                    <div className="flex items-center">
                        <Link href="/">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                                <Image
                                    src="/logo.ico"
                                    alt="logo"
                                    width={isScrolled ? 60 : 80}
                                    height={isScrolled ? 60 : 80}
                                    className="w-12 md:w-20"
                                />
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
