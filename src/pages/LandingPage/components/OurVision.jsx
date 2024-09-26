import React from "react";
import Button from "../../../components/Button";

export default function OurVision() {
    return (
        <div className="">
            <p className="text-white text-center text-5xl py-2 underline underline-offset-8 decoration-sky-500">Our Vision</p>
            <div className="flex mx-40 my-28 relative">
                <div className="relative mr-[-150px] mt-[-50px] z-10 flex flex-col items-end">
                    <img src="Prof. B Ravi.png" alt="" className=""/>
                    <h3 className="text-2xl mt-4">- Prof. B.Ravi</h3>
                    <h5 className="text-sky-500">Director NITK</h5>
                </div>
                <div className="flex-1 flex z-0 flex-col justify-center relative bg-[url('vision-bg.png')] bg-no-repeat bg-center bg-contain">
                    <img src="quote-open.png" alt="" className="w-20 absolute left-20 top-20" />
                    <p className="text-center mx-60 text-2xl italic">E-Cell NITK Surathkal is a dynamic student-run organization at NITK dedicated to empowering entrepreneurs and fostering innovation.</p>
                    <img src="quote-close.png" alt="" className="w-20 absolute right-20 bottom-20" />
                </div>
            </div>
        </div>
    );
}
