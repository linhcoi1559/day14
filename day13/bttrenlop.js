//1. Viết function in ra câu “Xin chào Rikkei Academy”
function addName() {
  console.log("Xin chào Rikkei Academy");
}
addName();

//2. Viết function tính bình phương của một số
let squareNumber = function (num) {

  let pow = num * num;
  return pow;
};
console.log("giá trị là:", squareNumber(9));

//Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ thứ nhất tính từ năm 1 đến 100
const addCentury = function (year) {
Math.floor(year/100) + 1
return Math.floor(year/100) + 1;
  }

console.log("thế kỉ:", addCentury());

//Cho chuỗi dài hơn 15 kỹ tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “...” ở cuối chuỗi
const chuoi = function(num) {
let chuoi = ("1234567891123132132");
let arr = chuoi.slice(0,9)
return chuoi;
}
console.log(chuoi);


// SỐ chẵn-lẻ
const themso = function (num)
{
    if (num % 2 == 0){
        sodo = ('Số chẵn');
    }
    else {
        sodo = ('Số lẻ');
    }
    return sodo;
}
console.log("Số đó là số", themso(9) );

