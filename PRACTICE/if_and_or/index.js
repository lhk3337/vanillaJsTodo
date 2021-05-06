if ("10" === 10) {
  console.log("yes");
} else {
  console.log("no");
}

if (20 > 5 && "nicolas" === "nicolas") {
  console.log("Yes");
} else {
  console.log("No");
}

if (20 > 5 || "nicolas" === "ncolas") {
  console.log("Yes");
} else {
  console.log("No");
}

const age = prompt("How old are you?");
if (age >= 18 && age <= 21) {
  console.log("You can drink but you should not.");
} else if (age > 21) {
  console.log("Go ahead");
} else {
  console.log("Too young");
}
