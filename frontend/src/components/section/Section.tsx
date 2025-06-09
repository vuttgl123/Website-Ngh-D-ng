import IntroHeading from "./intro/MainIntroHeading"
import InspirationSection from "./intro/StoryBlock"
import MocChauIslandSection from "./intro/MocChauIslandSection"
import ConnectionSection from "./intro/ConnectionSection"
import WaveBot from "../../utils/WaveBot"
import Experience from "../section/experience/Experience"
import Emotion from "../section/emotion/Emotion"
import AccommodationSection from "./AccommodationSection"
import NebulaGlampingSection from "./NebulaGlampingSection"
import LuneCampingSection from "./LuneCampingSection"


export default function Section() {
  return (
    <>
      <IntroHeading />
      <InspirationSection />
      <MocChauIslandSection />
      <ConnectionSection />
      <WaveBot/>
      <Experience />
      <Emotion/>
      <AccommodationSection />
      <WaveBot/>
      <NebulaGlampingSection />
      <LuneCampingSection />
      <WaveBot/>
    </>
  )
}
