

// // const ResumeGrid = () => {
// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-6">
// //       <h1 className="text-3xl font-bold mb-6 text-center">Explore Resumes</h1>

// //       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //         {resumes.map((resume) => (
// //           <ResumeCard key={resume.id} {...resume} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // const ResumeGrid = () => {
// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-4xl font-bold text-center text-white mb-4">Resume Templates</h1>
// //       <h2 className="text-2xl font-semibold text-center text-white mb-10">Explore Resumes</h2>
     
 
      
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {resumes.map((resume) => (
// //           <ResumeCard key={resume.id} {...resume} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };


// // export default ResumeGrid;



// const ResumeGrid = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
//       {resumes.map((resume) => (
//         <div key={resume.id} className="text-center bg-white p-4 rounded shadow-md">
//           <img
//             src={resume.image}
//             alt={resume.title}
//             className="mx-auto h-[200px] w-[150px] object-cover"
//           />
//           <h3 className="text-lg font-bold mt-2">{resume.title}</h3>
//           <p className="text-gray-600">{resume.category}</p>
//           <a
//             href={resume.downloadUrl}
//             download
//             className="text-blue-500 underline mt-2 block"
//           >
//             Download
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResumeGrid;
// import React from "react";
// import { resumes } from "../data/ResumeList";

import React from 'react';
import resumes from '../data/ResumeList';
import ResumeCard from './ResumeCard';

const ResumeGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Resume Gallery</h1>

      <div className="flex flex-wrap justify-start gap-6">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            className="bg-white text-black rounded-xl shadow-md p-4 w-1/3 text-center"
          >
            <img
              src={resume.image}
              alt={resume.title}
              className="h-40 w-full object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{resume.title}</h2>
            <p className="text-sm text-gray-600">{resume.category}</p>
            <div className="mt-4">
              <a
                href={resume.downloadUrl}
                download
                className="inline-block bg-blue-600 text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-blue-800 hover:text-white transition duration-300"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeGrid;

