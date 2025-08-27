
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 100); 
      if (num >= 0) {
        resolve(num);
      } else {
        reject(new Error("Failed to generate number"));
      }
    }, 1000);
  });
}

getRandomNumber()
  .then((number) => {
    console.log("Random number:", number);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
