// import React from 'react';

// const ResumeCard = ({ title, image,category, downloadUrl }) => {
//   return (
//     <div className="bg-white rounded-x1 shadow-md  overflow-hidden  flex flex-col items-center p-4">
//       <img src={image} alt={title} className="w-half h-13 object-cover rounded-lg" />
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       <p className="text-gray-500 mb-2">{category}</p>
// <a
//   href={downloadUrl}
//   download
//   className="text-blue-600 hover:underline font-medium 20px-20px"
// >
//   Download
// </a>
//     </div>
//   );
// };

import React from 'react';

const ResumeCard = ({ title, image, category, downloadUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4">
      <img src={image} alt={title} className="w-1/2 h-32 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">{category}</p>
      <a
        href={downloadUrl}
        download
        className="text-blue-600 hover:underline font-medium"
      >
        Download
      </a>
    </div>
  );
};

export default ResumeCard;

//export default ResumeCard;
// import React from 'react';

// const ResumeCard = ({ title, image, category, downloadUrl }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 w-[300px]">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover rounded-lg mb-3"
//       />
//       <h2 className="text-xl font-semibold mb-1">{title}</h2>
//       <p className="text-gray-500 mb-2">{category}</p>
//       <a
//         href={downloadUrl}
//         download
//         className="text-blue-600 hover:underline font-medium"
//       >
//         Download
//       </a>
//     </div>
//   );
// };

// export default ResumeCard;
