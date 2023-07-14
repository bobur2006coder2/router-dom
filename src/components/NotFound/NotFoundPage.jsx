import React from "react";


const NotFoundPage = () => {
  return (
<>
      <h1>404</h1> 
      <p>The page you are looking for could not be found.</p>
      <p>
        <a href="/home">Return to the homepage</a>
      </p>

</>
  
  );
};

export default NotFoundPage;

// const fadein = () => {
//   return {
//     opacity: 0,
//     animation: "fadein 1s ease-in-out",
//   };
// };