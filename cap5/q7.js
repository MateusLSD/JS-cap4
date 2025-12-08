let l1 = Number(prompt("Lado 1:"));
let l2 = Number(prompt("Lado 2:"));
let l3 = Number(prompt("Lado 3:"));

if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {

  if (l1 === l2 && l2 === l3) {
    console.log("Equilátero");
  } else if (l1 === l2 || l1 === l3 || l2 === l3) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }

} else {
  console.log("Triângulo inválido!");
}