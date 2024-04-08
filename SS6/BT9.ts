let inputString: string = "zxerdctfvygbhu";
let uniqueChars: Set<string> = new Set(inputString);
let filteredString: string = Array.from(uniqueChars).join("");
console.log("Chuỗi sau khi lọc:", filteredString);
