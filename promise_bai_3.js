
function getError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong")); 
    }, 1000);
  });
}
getError()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Caught error:", err.message); 
  });
