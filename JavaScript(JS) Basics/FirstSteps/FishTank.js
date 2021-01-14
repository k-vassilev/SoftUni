function aquarium(daljina, shirochina, visochina, procent) {
  let vAquarium = Number(daljina) * Number(shirochina) * Number(visochina);
  let vAquariumL = Number(vAquarium) * 0.001;
  let novProcent = Number(procent) * 0.01;

  let final = Number(vAquariumL) * (1 - Number(novProcent));

  console.log(final);
}

aquarium("105", "77", "89", "18.5");
