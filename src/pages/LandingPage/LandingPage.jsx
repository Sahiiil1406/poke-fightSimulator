import React from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";

import TeamCarousel from "./components/Teams/TeamCarousel";
import OurVision from "./components/OurVision";
import SocialLinks from "./components/SocialLinks";

export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<InfoSection />
			<OurVision/>
			<TeamCarousel />
			<SocialLinks />
			
		</>
	);
}
