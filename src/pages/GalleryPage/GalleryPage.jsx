import React from "react";
import PhotoGrid from "./PhotoGrid";
import Carousel from "./Carousel";

export default function GalleryPage() {
	return <div className="flex flex-col mt-[10%]">
		<Carousel/>
		<PhotoGrid />
		</div>;
}
