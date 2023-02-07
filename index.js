const N = x * 100;
const q = 0;
const y = 0;
const z = 0;
const a = 0;

function change() {
  while (N > 0) {
    if ((N) => 25) {
      N -= 25;
      x += 1;
    } else if ((N) => 10) {
      N -= 10;
      y += 1;
    } else if ((N) => 5) {
      N -= 5;
      z += 1;
    } else if ((N) => 1) {
      N -= 1;
      a += 1;
    }
  }
  let total = x + y + z + a;
  console.log(total);
  console.log(x, y, z, a);
}
