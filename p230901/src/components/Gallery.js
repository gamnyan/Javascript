import { useState } from "react";
import SculptureList from "../data/SculptureList.json";

export const Gallery = () => {
   const [index, setIndex] = useState(0);
   console.log([index, setIndex]);

   const [showMore, setShowMore] = useState(false);
   const hasNext = index < SculptureList.length - 1;
   const hasPrev = index > 0;

   const handlePrev = () => {
      if (!hasPrev) {
         setIndex(SculptureList.length - 1);
      } else {
         setIndex(index - 1);
      }
   };
   const handleNext = () => {
      if (!hasNext) {
         setIndex(0);
      } else {
         setIndex(index + 1);
      }
   };
   const handleShowMore = () => setShowMore(!showMore);

   let sculpture = SculptureList[index];

   return (
      <>
         <button disabled={!hasPrev} onClick={handlePrev}>
            Prev
         </button>
         <button disabled={!hasNext} onClick={handleNext}>
            Next
         </button>
         <h2>
            <i>{sculpture.name}</i> by {sculpture.artist}
         </h2>
         <h3>
            ({index + 1} of {SculptureList.length})
         </h3>
         <button onClick={handleShowMore}>{showMore ? "Hide" : "Show"} details</button>
         {showMore ? <p>{sculpture.description}</p> : ""}
         <br />
         <img src={sculpture.url} alt={sculpture.alt} />
      </>
   );
};

Gallery.displayName = Gallery;
