import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/animations";

import AirslideContent from "./AirslideContent";
import ZiplineContent from "./ZiplineContent"; 
import KartClubContent from "./KartClubContent";
import WaterGunContent from "./WaterGunContent";
import PlaytopiaContent from "./PlaytopiaContent";
import InfinityPoolContent from "./InfinityPoolContent";

const items: TabsProps["items"] = [
  { key: "airslide", label: "AIRSLIDE", children: <AirslideContent /> },
  { key: "zipline", label: "ZIPLINE", children: <ZiplineContent /> },
  { key: "kart", label: "F1 KART CLUB", children: <KartClubContent /> },
  { key: "water", label: "WATER GUN", children: <WaterGunContent /> },
  { key: "playtopia", label: "PLAYTOPIA", children: <PlaytopiaContent /> },
  { key: "pool", label: "BỂ BƠI VÔ CỰC", children: <InfinityPoolContent /> },
];

export default function EmotionTabs() {
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
        Khơi dậy mọi xúc cảm
      </h2>
      <Tabs
        defaultActiveKey="airslide"
        items={items}
        centered
        size="large"
        tabBarGutter={24}
        className="experience-tabs"
      />
    </motion.section>
  );
}
