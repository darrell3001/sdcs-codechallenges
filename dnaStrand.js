function DNAStrand(dna) {
  var c = "";
  for (i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        c += "T";
        break;
      case "T":
        c += "A";
        break;
      case "G":
        c += "C";
        break;
      case "C":
        c += "G";
        break;
      default:
    }
  }
  return c;
}
