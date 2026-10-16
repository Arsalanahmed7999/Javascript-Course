const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

// btn.addEventListener('click', ()=>{
//     // box.style.backgroundColor = "blue";
//     // box.style.color = "white";
//     // box.style.fontSize = "30px";
// })
// btn.addEventListener("click", () => {
//   if (box.classList.contains("bgBlue")) {
//     box.classList.remove("bgBlue");
//   } else {
//     box.classList.add("bgBlue");
//   }
// });
btn.addEventListener("click", () => {
    box.classList.toggle("bgBlue");
});

//Anonymous function
