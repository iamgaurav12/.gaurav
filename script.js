const btn = document.getElementById("button");
const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    //i<6 kkyuki HEX color 6 digit ka hai hota hai
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};
//Math.floor returns and integer value. Why integer needed?  bcuz the val has indexing at integer only like O to n (In case of val variable it is defined)

//Math.random() range is between 0-0.99 which is not sufficient to call val index so we multiply it with 16 so we reach out at the last index
console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
