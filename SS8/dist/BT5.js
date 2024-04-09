var unionExemple = function (element) {
    console.log(element);
};
var intersectionExemple = function (element) {
    console.log(element);
};
unionExemple(12);
intersectionExemple(123); //lỗi do ko có biến nào đồng thời là number và string
/*với union type thì element có thể là 1 trong 2 kiểu number hoặc string nhưng với
 intersection thì bắt buộc biến phải là cả 2 kiểu dữ liệu đó đồng thời*/ 
