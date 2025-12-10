function charType(char) {
//   typeof char !== "string" &
  if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) return "Digit";
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
    return "UpperCase Alphabet";
  if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
    return "LowerCase Alphabet";
}
console.log(charType("j"));
