// promise_example.js

// Tạo một Promise
function helloAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000); // 2000ms = 2 giây
  });
}

// Gọi hàm và in ra kết quả
helloAsync().then((message) => {
  console.log(message); // Sau 2 giây sẽ in ra "Hello Async"
});
