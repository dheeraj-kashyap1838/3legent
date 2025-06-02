// "use client";

// import Image from "next/image";
// import React from "react";
// import type { BannerGrid } from "@/type/type";
// import ErrowButton from "../ErrowButton/ErrowButton";

// interface BannerProp {
//   data: BannerGrid[];
// }

// function BannerGrid({ data }: BannerProp) {
//   const large = data.find((elem) => elem.layout === "large");
//   const small = data.filter((elem) => elem.layout === "small");


//   return (
//     <section className="px-6">
//       <div className="container mx-auto flex md:flex-row flex-col gap-6 ">
//         <div className="max-w-[548px] md:p-12 p-8 max-h-[664px]  w-full flex flex-col justify-between bg_primary">
//           <div className="md:max-w-[360px] max-w-[247px] w-full ">
//             <h1 className="font-medium font_poppins md:text-[34px] text-[28px]">
//               {large?.name}
//             </h1>
//             <ErrowButton data={large?.button} />
//           </div>
//           <Image
//             width={548}
//             height={668}
//             src={large?.image.path ?? ""}
//             alt={large?.image.alt ?? ""}
//           />
//         </div>
//         <div className="max-w-[548px] flex flex-col gap-6  w-full">
//           {small.map((elem, id) => {
//             return (
//               <div key={id} className="bg_primary flex max-h-[319px] h-full">
//                 <div className="max-w-[210px]  w-full ">
//                   <h1 className="font-medium font_poppins md:text-[34px] text-[28px] tracking-[0.6px] leading-[34px] ">
//                     {elem.name}
//                   </h1>
//                   <ErrowButton data={elem?.button} />
//                 </div>
//                 <Image
//                   width={500}
//                   height={499}
//                   src={elem.image.path}
//                   alt={elem.image.alt}
//                   className="max-h-[319px]"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BannerGrid;
