/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Giả sử số ngày làm nhân viên A có n=26 ngày trong tháng 7/2022. Trong đó n là số ngày công được user ghi nhận
 *  + tiền lương 1 ngày là 100.000vnd
 * 
 * -Xử lý dữ liệu:
 *  + Tiền lương tháng = n * 100.000vnd
 * 
 * - Đầu ra: Tiền lương của nhân viên A tháng 7/2022 
 */
function salaryMonth(){
var dayWord = document.getElementById('dayWord').value;
var moneyDay = document.getElementById('moneyDay').value;
//Truy xuat input
var salaryOnMonth = dayWord * moneyDay;
// tao bien tinh
document.getElementById('salary').innerHTML = salaryOnMonth.toLocaleString();
//truy xuat vao ket qua va hien thi ket qua
}