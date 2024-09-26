import React from 'react';

const socialLinks = [
  { platform: 'Instagram', icon: '/insta.svg', link: '#' },
  { platform: 'LinkedIn', icon: '/linkedin.svg', link: '#' },
  { platform: 'YouTube', icon: '/youtube.svg', link: '#' },
  { platform: 'WhatsApp', icon: '/whatsapp.svg', link: '#' },
  { platform: 'Telegram', icon: '/telegram.svg', link: '#' },
  { platform: 'Discord', icon: '/discord.svg', link: '#' },
  { platform: 'Twitter', icon: '/twitter.svg', link: '#' },
  { platform: 'Threads', icon: '/thread.svg', link: '#' },
];

export default function SocialLinks() {
  return (
   
    <div className="bg-black my-40 text-white text-start md:px-12">
        <h2 className="flex flex-col font-sharp-grotesk text-sm sm:text-lg md:text-3xl lg:text-4xl leading-tight text-white relative mb-8 md:mb-12 lg:mb-16 ml-[15%]">
			<span className="mb-2 grotesk">Follow Us on Social Media</span>
			<span className="text-[#69B7FF] text-xs sm:text-sm  md:text-lg lg:text-xl">
				Never miss any updates from E-Cell NITK</span>
	    </h2>
      <div className="flex justify-start px-14  sm:px-20 md:px-28 lg:px-48 gap-1 md:space-x-2 lg:space-x-8 flex-wrap ">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl md:rounded-2xl p-2 md:p-3"
          >
            <img src={link.icon} alt={link.platform} className="lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
    
  );
};
