/**
 * Mô hình 3 khối
 * - Đầu vào:Giả sử n1 = , n2=, n3=, n4=, n5=
 * là số thực user nhập để tính giá trị trung bình cộng của 5 số
 *  -Xử lý dữ liệu : 
 *  + Tạo biến n gán giá trị n1, n2, n3, n4, n5
 *  + Giá trị trung bình của 5 số=(n1 + n2 + n3 + n4 + n5) / 5 
 * -Đầu ra: xuất giá trị trung bình 5 số mà user nhập
 */

function totalAverage(){
    var realNumber1 = +document.getElementById('realNumber1').value;
    var realNumber2 = +document.getElementById('realNumber2').value;
    var realNumber3 = +document.getElementById('realNumber3').value;
    var realNumber4 = +document.getElementById('realNumber4').value;
    var realNumber5 = +document.getElementById('realNumber5').value;
// truy xuat input
    var averageTotal = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
// thuc hien phep tinh
    document.getElementById('average').innerHTML = averageTotal;
// gan ket qua cho lenh truy xuat ket qua
}

