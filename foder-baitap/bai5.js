/**
 * Mô hình 3 khối
 * - Giả sử n là số có 2 chữ số mà user nhập
 * - Đầu vào: use nhap so 
 * - Xử lý:
 *  + lấy số đơn vị : soHangDv = n % 10
 *  + lấy số hàng chục: soHangChuc = Math.floor(n /10)
 * - Đầu ra: tổng 2 ký số user nhập
 */

function sumDigit(){
    var twoDigit = document.getElementById('twoDigit').value;

    var dozen = Math.floor(twoDigit / 10);
    var unit = twoDigit % 10;
    var sumTwoDigit = dozen + unit;

    document.getElementById('digit').innerHTML = sumTwoDigit;

}
