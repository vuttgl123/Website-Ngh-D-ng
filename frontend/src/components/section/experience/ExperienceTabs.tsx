import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations"; // ✅ Import animation

import BachLongContent from "./BachLongContent";
import DongChimThanContent from "./DongChimThanContent";
import MocChauSpaceContent from "./MocChauSpaceContent";
import TrekkingContent from "./TrekkingContent";

const items: TabsProps["items"] = [
  {
    key: "bachlong",
    label: "CẦU KÍNH BẠCH LONG",
    children: <BachLongContent />,
  },
  {
    key: "dongchimthan",
    label: "ĐỘNG CHIM THẦN",
    children: <DongChimThanContent />,
  },
  {
    key: "space",
    label: "MỘC CHÂU SPACE",
    children: <MocChauSpaceContent />,
  },
  {
    key: "trekking",
    label: "TREKKING",
    children: <TrekkingContent />,
  },
];

export default function ExperienceTabs() {
  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-15"
    >
      <h2
        className="text-green-700 text-3xl md:text-4xl lg:text-5xl italic text-center mb-10"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Hành trình kết nối trải nghiệm – <span className="font-bold">Khơi nguồn cảm xúc</span>
      </h2>

      <Tabs
        defaultActiveKey="bachlong"
        items={items}
        centered
        size="large"
        tabBarGutter={24}
        className="experience-tabs"
      />
    </motion.section>
  );
}
