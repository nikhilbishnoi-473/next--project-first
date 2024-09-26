// "use client";
// import React, { useEffect, useRef } from "react";
// import VanillaTilt from "vanilla-tilt";

// const Tilt = () => {
//   const tiltRef = useRef(null);

//   useEffect(() => {
//     // Initialize VanillaTilt
//     VanillaTilt.init(tiltRef.current, {
//       max: 25, // Maximum tilt rotation
//       speed: 400, // Speed of the enter/exit transition
//       scale: 1.1, // Scale on hover
//       glare: true, // Enable glare effect
//       "max-glare": 0.5, // Max glare opacity
//     });

//     // Cleanup function to destroy VanillaTilt instance
//     return () => {
//       tiltRef.current.vanillaTilt.destroy();
//     };
//   }, []);

//   return (
//     <div ref={tiltRef} className="tilt-box bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold">Tilt Me!</h2>
//       <p>This element will tilt when you hover over it.</p>
//     </div>
//   );
// };

// export default Tilt;
