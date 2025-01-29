document.addEventListener("DOMContentLoaded", function () {
    const quoteContainer = document.getElementById("quote-of-the-day");
  
    // Fetch quote from Google Cloud Function
    fetch("https://us-central1-balmy-sanctuary-434411-g6.cloudfunctions.net/Blog-Website-FastAPI")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log("Received Quote:", data); // Log the response object
        if (data && data.quote) {
          quoteContainer.textContent = data.quote; // Display the quote
        } else {
          quoteContainer.textContent = "Failed to load the quote. Try again later.";
        }
      })
      .catch((error) => {
        quoteContainer.textContent = "Failed to load the quote. Try again later.";
        console.error("Error fetching quote:", error); // Log any error
      });
});





// document.addEventListener("DOMContentLoaded", function () {
//     const quoteContainer = document.getElementById("quote-of-the-day");
  
//     // Fetch quote from FastAPI
//     fetch("https://us-central1-balmy-sanctuary-434411-g6.cloudfunctions.net/Blog-Website-FastAPI")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Received Quote:", data);  // Log the entire response object
//         if (data && data.quote) {
//           quoteContainer.textContent = data.quote;
//         } else {
//           quoteContainer.textContent = "Failed to load the quote. Try again later.";
//         }
//       })
//       .catch((error) => {
//         quoteContainer.textContent = "Failed to load the quote. Try again later.";
//         console.error("Error fetching quote:", error);
//       });
//   });
  


// document.addEventListener("DOMContentLoaded", function () {
//     const quoteContainer = document.getElementById("quote-of-the-day");
  
//     // Fetch quote from FastAPI
//     fetch("http://127.0.0.1:8000/quote")
//       .then((response) => response.json())
//       .then((data) => {
//         quoteContainer.textContent = data.quote;
//       })
//       .catch((error) => {
//         quoteContainer.textContent = "Failed to load the quote. Try again later.";
//         console.error("Error fetching quote:", error);
//       });
//   });
  