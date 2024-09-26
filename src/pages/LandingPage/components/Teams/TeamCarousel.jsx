import React from "react";
import teamData from "./TeamData.js";
import TeamCards from "./Team.jsx";
import { Linkedin } from "lucide-react";

export default function TeamCarousel() {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 my-8 md:my-10">
    	<h2 className="flex flex-col font-sharp-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white relative mb-8 md:mb-12 lg:mb-16 ml-[15%]">
			<span className="mb-2 grotesk">Our Team</span>
			<span className="text-[#8B8B8B] text-sm sm:text-base md:text-lg lg:text-xl">
				Challenge your limits with events full of uncertainty</span>
		</h2>

      <TeamCards pauseOnHover={false} repeat={2}>
        {teamData.map((teamMember, index) => (
          <div key={index} className="flex flex-col items-center mx-4 sm:mx-6 md:mx-8">
            <div className="relative mb-3 sm:mb-4">
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
              />
              <a
                href={teamMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 bg-black border-[2px] border-white rounded-full p-2 sm:p-3 hover:bg-[#3DA0FF] transition-colors duration-300"
              >
                <Linkedin size={32} className="text-white" />
              </a>
            </div>
            <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">
              {teamMember.name}
            </h3>
            <p className="text-[#3DA0FF] gilroy-medium text-base sm:text-lg mb-3">
              {teamMember.position}
            </p>
          </div>
        ))}
      </TeamCards>
    </div>
  );
}