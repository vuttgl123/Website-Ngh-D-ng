import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { slideDown } from "../../utils/animations";

export default function Header() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Trigger hiệu ứng khi cuộn xuống
      if (scrollY > 10 && canAnimate) {
        setShouldAnimate(true);
        setCanAnimate(false); // chặn lặp lại
      }

      // Reset nếu cuộn về top
      if (scrollY <= 10 && !canAnimate) {
        setCanAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [canAnimate]);

  return (
    <motion.header
      variants={slideDown}
      initial="initial"
      animate={shouldAnimate ? "animate" : "initial"}
      onAnimationComplete={() => setShouldAnimate(false)}
      className="w-full bg-[#f5eee5] shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </motion.header>
  );
}
