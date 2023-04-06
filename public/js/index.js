const btn = document.querySelectorAll("#copyurl");
console.log(btn);

for (let i = 0; i < btn.length; i++) 
{
  btn[i].addEventListener("click", () => {
    console.log(btn[i].value);
    var text = btn[i].value;
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  });
}
