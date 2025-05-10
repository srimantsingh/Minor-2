import React from 'react';
import resumes from '../data/ResumeList';
import ResumeCard from './ResumeCard';

// const ResumeGrid = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Explore Resumes</h1>

//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {resumes.map((resume) => (
//           <ResumeCard key={resume.id} {...resume} />
//         ))}
//       </div>
//     </div>
//   );
// };
const ResumeGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-4">Resume Templates</h1>
      <h2 className="text-2xl font-semibold text-center text-white mb-10">Explore Resumes</h2>
     
 
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} {...resume} />
        ))}
      </div>
    </div>
  );
};


export default ResumeGrid;
