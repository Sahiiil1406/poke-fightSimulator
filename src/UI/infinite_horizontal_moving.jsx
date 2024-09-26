import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";


export const InfiniteMovingComponent = ({
  border,
  texts,
  colors,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const redStyle={
    WebkitTextStroke: `1px #8E0000`,
    color: `transparent`,
    fontWeight: "bold",
    fontStretch: "expanded",
    letterSpacing: "0.1em",

  }

  //add dots in place of "." in text
  //const wordsWithDots = text.split('.').join(' • ');

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);

        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    // outer container
    <div
      ref={containerRef}
      className={cn(
        `relative w-full overflow-hidden h-12 md:h-14 border-b-[1px] border-t-[1px] ${border} whitespace-nowrap`,
        className
      )}
    >
      <ul
        // div with scroll-animation
        ref={scrollerRef}
        className={cn(
          "text-background-950 flex justify-center text-lg md:text-2xl py-2 font-normal grotesk",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        
        {/* <p className="mx-2 tracking-widest " style={{ letterSpacing: "0.1em" }}>{wordsWithDots}</p> */}
        {texts.map((text, index) => (
          <React.Fragment key={index}>
            <p
              className="mx-2 grotesk tracking-widest"
              style={{
                color: colors[index],
                letterSpacing: "0.1em",
              }}
            >
              {text}
            </p>
            {index < texts.length  && (
              <p
                className="mx-2 tracking-widest"
                style={{
                  color: "white",
                  letterSpacing: "0.1em",
                }}
              >
                •
              </p>
            )}
          </React.Fragment>
        ))}

      </ul>
    </div>
  );
};