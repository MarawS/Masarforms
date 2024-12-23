"use client";
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbTimelineEventText } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineComputer } from "react-icons/md";
import { GiOldMicrophone } from "react-icons/gi";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineVideoCameraFront } from "react-icons/md";






const Objectives = () => {
    return (
        <section className="py-20 bg-white px-6" id="objectives">
            <div className=" mx-auto text-center">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-[#36A1BC] mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    إدارات مبادرة مسار
                </motion.h2>
                {/* <div className="py-20 px-6">
                    <iframe className="py-20 px-6" src="https://docs.google.com/forms/d/e/1FAIpQLSfhcPbg9G5firBDWvtGqo_cNwWn-gnD60k9AF1NxLSZ5ywslw/viewform?embedded=true">جارٍ التحميل…</iframe>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5 text-center">
                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.1,
                                delay: 0.1,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <GrUserManager className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة الموارد البشرية
                        </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            إدارة جميع العمليات المتعلقة بالأعضاء داخل المبادرة.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >

                            <GoProjectRoadmap className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة المشاريع والتطوير
                        </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            العمل على التخطيط الاستراتيجي والإبداع في تطوير المشاريع.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <LuLayoutDashboard className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة الجودة                        </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            تُركز على تعزيز كفاءة الأداء وضمان الالتزام بمعايير الجودة العالية داخل المبادرة.                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <TbTimelineEventText className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة الفعاليات                   </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            تُعنى بتنظيم وتنسيق جميع الأنشطة والفعاليات، سواء الحضورية أو الافتراضية.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <IoIosPeople className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة العلاقات العامة                   </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            تعزيز صورة المبادرة داخليًا وخارجياً وبناء علاقات استراتيجية.                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <MdOutlineComputer className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة التقنية                  </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            إنشاء وتحديث الموقع الإلكتروني وتنفيذ الفعاليات التقنية.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <GiOldMicrophone className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة البودكاست                  </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            تختص بإنتاج محتوى إبداعي يحقق رؤية وأهداف المبادرة.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <AiOutlinePicture className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة التصاميم                 </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            تقديم تصاميم مبتكرة تُعزز من هوية المبادرة.                           </p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 p-4 rounded-lg shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <MdOutlineVideoCameraFront className="text-[#052C36] w-7 h-7 priority" />
                        </motion.div>
                        <h3 className="text-[#052C36]">
                            إدارة  الاعلام والتسويق
                        </h3>
                        <br />
                        <p className="text-sm md:text-xl text-[#052C36]">
                            تُنتج محتوى مرئي وخطط تسويقية للفعاليات.                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Objectives;
