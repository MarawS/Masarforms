"use client";
import { motion, useScroll } from "framer-motion";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Objectives from "./components/Objectives";
import Formbutton from "./components/Formbutton";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <Header />
      <About />
      <Objectives />
      <Formbutton />
      <Footer />
      
    </div>
  );
}
