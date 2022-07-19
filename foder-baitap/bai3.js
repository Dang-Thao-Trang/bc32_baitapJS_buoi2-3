/**
 * Mô hình 3 khối
 * - Đầu vào: Mệnh giá 1usd = 23.500vnđ. User cần tính 2usd sang tiền Việt
 * - Xử lý: 
 *  + tạo biến gán n = 2 là số tiền usd mà user nhập 
 *  + m = 23.500 : là giá trị quy đổi trên 1 usd 
 *  + Số tiền quy đổi = n * m
 * - Đầu ra: Số tiền quy đổi trên n mà user nhập
 */

function  exchangeRate() {
    var moneyUSD = document.getElementById('moneyUSD').value;
    var rate = moneyUSD * 23500;
    document.getElementById('moneyVnd').innerHTML = rate.toLocaleString();
}