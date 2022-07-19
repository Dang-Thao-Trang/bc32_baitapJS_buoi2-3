/**
 * Mô hình 3 khối
 * -Đầu vào:
 * + cd: chiều dài hình chữ nhât user nhập
 * + cr: chiều rộng hình chữ nhật user nhập 
 * -Xử lý:
 *  + Chu vi = ( cd + cr ) / 2
 * + Diện tích = cd * cr
 * -Đầu ra: Xuất chu vi. Xuất diện tích
 */

function rectangle(){
    var longRectangle = +document.getElementById('long').value;
    var widthRectangle = +document.getElementById('width').value;
    //truy xuat input
    var rectanglePerimeter = (longRectangle + widthRectangle) * 2;
    var rectangleArea = longRectangle * widthRectangle;
    //phep tinh
    document.getElementById('perimeter').innerHTML = rectanglePerimeter.toLocaleString();
    document.getElementById('area').innerHTML = rectangleArea.toLocaleString();
    // gan ket qua
}

