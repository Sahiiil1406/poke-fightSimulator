import React from "react";
import teamData from "./TeamData.js";
import TeamCards from "./Team.jsx";

export default function TeamCarousel() {
	return (
		<div className="m-10">
			<h2 className="font-montserrat text-[60px] leading-[1em] text-white inline-block relative m-5 mb-20">
				<span className="border-b-4 border-primary-blue-500 inline">Our Team</span>
			</h2>
			<TeamCards pauseOnHover={false} repeat={2}>
				{teamData.map((teamMember, index) => (
					<div key={index} className="flex flex-col items-center mx-10">
						<img
							src={teamMember.image}
							alt={teamMember.name}
							className="rounded-full w-48 h-48 object-cover mb-4" // Increased size
						/>
						<h3 className="text-white font-semibold text-3xl mb-3"> {/* Increased font size */}
							{teamMember.name}
						</h3>
						<p className="text-gray-300 text-lg mb-3"> {/* Increased font size */}
							{teamMember.position}
						</p>
						<a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer"> {/* Added rel attribute for security */}
							<span className="flex items-center gap-1 bg-[#ff462e] px-3 py-2 rounded-3xl"> {/* Adjusted padding */}
								<i className="fab fa-linkedin"></i>
								<p>Follow</p>
							</span>
						</a>
					</div>
				))}
			</TeamCards>
		</div>
	);
}
