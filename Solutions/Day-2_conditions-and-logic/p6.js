function triangleType(s1, s2, s3) {
  if (s1 ** 2 + s2 ** 2 === s3 ** 2) return "Right-Angled Triangle";
  else if (s1 === s2 && s1 === s3) return "Equilateral";
  else if (s1 === s2 || s1 === s3 || s2 === s3) return "Isosceles";
  else return "Scalene";
}

console.log(triangleType(3,4,5));