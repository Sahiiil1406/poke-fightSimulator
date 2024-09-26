import React from "react";
import logo from "../assets/e-cell_logo.png"
import { MarqueScroll } from "../components/Marque";

export default function Footer() {
  return (
    <>
    
    <div className="flex flex-col space-y-[-3.5em]">
    <div>
     <MarqueScroll
        border="border-white"
				texts={['Entrepreneurship', 'Startups', 'Networking']}
        colors={['white', 'white', 'white']}
				angle={2}
				className="bg-black"
			></MarqueScroll>
      </div>
      <div className="flex flex-col space-y-[-3.5em]">
      <MarqueScroll
        border="border-white"
				texts={['Entrepreneurship', 'Startups', 'Networking']}
        colors={['white', 'white', 'white']}
				angle={-2}
				className="bg-black"
			></MarqueScroll>
      </div>
    </div> 
      
      
    <footer className="bg-gradient-to-r  from-[#001b339a] to-[#4608009a] text-white py-12 ">
      <div className="container w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-32 justify-center items-center ">
        <div className="mb-8 md:mb-0">
          <div className="flex  mb-4">
            <img src={logo} alt="E-Cell Logo" width={50} height={50} className="mr-2" />
            <div>
              <h2 className="text-2xl font-bold">E-Cell</h2>
              <p className="text-sm text-blue-300">NITK Surathkal</p>
            </div>
          </div>
          <p className="mb-4 text-lg font-semibold">Follow Us on</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>
        
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-row md:space-x-12 gap-10 md:gap-0 lg:gap-16">
            <ul className="space-y-2 mb-4 md:mb-0">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Events</a></li>
              <li><a href="#" className="hover:text-gray-300">Ambassadors</a></li>
              <li><a href="#" className="hover:text-gray-300">Brochure</a></li>
              <li><a href="#" className="hover:text-gray-300">Accomodation</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Team</a></li>
              <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
              <li><a href="#" className="hover:text-gray-300">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:ecelliitk@gmail.com" className="hover:text-gray-300 break-all">ecelliitk@gmail.com</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+919096642803" className="hover:text-gray-300">+91-9096642803,<br />6200968914</a>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              <p>NITK, NH 66,<br />Srinivasnagar,<br />Surathkal Mangalore,<br />Karnataka - 575025</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    
    </>
  )
}



// <div className="flex flex-col md:space-y-[-1.5em] space-y-[-2em]">
//         <div>
//       <MarqueScroll
//         direction="left"
//         border="border-none"
// 				texts={['INNOVATE', 'CREATE', 'INSPIRE']}
//         colors={['white', '#1575CC', '#F34C19']}
// 				angle={2}
// 				className=" bg-none"
// 			></MarqueScroll>
//       </div>
//       <div>
//       <MarqueScroll
//         direction="right"
//         border="border-none"
// 				texts={['INSPIRE', 'INNOVATE', 'CREATE']}
//         colors={['#F34C19', 'white', '#1575CC']}
// 				angle={2}
// 				className="bg-none"
// 			></MarqueScroll>
//       </div>
//       </div>

