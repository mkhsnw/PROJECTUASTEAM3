function hitung() {
  const Q = parseInt(document.getElementById("Q").value);
  const LQ = parseInt(document.getElementById("LQ").value);
  const F1 = parseInt(document.getElementById("F1").value);
  const F2 = parseInt(document.getElementById("F2").value);

  // Hitung F total
  const Ftotal = Q * LQ;

  // Hitung Sigma Ma
  const LRvB = parseInt(document.getElementById("LRvB").value);
  const LQ1 = parseInt(document.getElementById("LQ1").value);
  const LF1A = parseInt(document.getElementById("LF1A").value);
  const LF2A = parseInt(document.getElementById("LF2A").value);
  const LF1B = parseInt(document.getElementById("LF1B").value);
  const LF2B = parseInt(document.getElementById("LF2B").value);

  const RvA = (F1 * LF1A + F2 * LF2A + Q * LQ * LQ1) / LRvB;
  const RvB = (F1 * LF1B + F2 * LF2B + Q * LQ * LQ1) / LRvB;

  // Hitung Sigma Mb
  const LRvA = parseInt(document.getElementById("LRvA").value);

  document.getElementById("ftotal").innerHTML = `Ftotal = ${Ftotal}`;
  document.getElementById("RvA").innerHTML = `RvA = ${RvA}`;
  document.getElementById("RvB").innerHTML = `RvB = ${RvB}`;
}
