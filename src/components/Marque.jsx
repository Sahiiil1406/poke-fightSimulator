import React from "react";
import { InfiniteMovingComponent } from "@/UI/infinite_horizontal_moving";

export function MarqueScroll({ direction, border,texts, angle, className, colors }) {

  const marqueStyle = {
    transform: `rotate(${angle}deg)`,
  };
  
  
  return (
    <div className={`box-border relative overflow-hidden grotesk w-full h-14 whitespace-nowrap transform ${className}`} 
      style={marqueStyle}>
     
      <InfiniteMovingComponent direction={direction} texts={texts} colors={colors} border={border} />
    </div>
  );

}
