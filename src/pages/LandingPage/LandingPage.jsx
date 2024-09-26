import React from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";

import TeamCarousel from "./components/Teams/TeamCarousel";
import OurVision from "./components/OurVision";


export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<InfoSection />
			<OurVision/>
			<TeamCarousel />
		</>
	);
}
