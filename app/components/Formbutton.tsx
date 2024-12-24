"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Formbutton = () => {
    return (
        <Link rel="stylesheet" href="https://forms.gle/i5LUjwrNrZTKiyaX6">
            <motion.section
                id="Formbutton"
                className="flex flex-col items-center justify-center py-8 px-6 bg-gray-100 text-[#052C36] sm:py-20 md:py-24 lg:py-32 sm:px-10 md:px-16 lg:px-24"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    className="text-1xl sm:text-2xl md:text-2xl lg:text-xl font-extrabold mb-4 text-center bg-[#36A1BC] text-white rounded-2xl px-8 py-3"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >

                    للتسجيل الآن
                </motion.h2>


                {/* <motion.p
                className="text-xl sm:text-lg md:text-xl lg:text-3xl leading-relaxed max-w-lg sm:max-w-2xl md:max-w-3xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >

                مبادرة سعودية تطوعية تهدف إلى تثقيف الخريجين والباحثين عن عمل بالمسميات الوظيفية في سوق العمل السعودي والتي توافق
                <br /> <span className="text-[#36A1BC] font-semibold">رؤية المملكة 2030 </span>
                ، ومتطلباتها لتحديد مسارهم المهني..
                .
            </motion.p> */}
            </motion.section>
        </Link>
    );
};

export default Formbutton;
