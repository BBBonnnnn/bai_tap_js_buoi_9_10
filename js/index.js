
var arrNhanvien = [];
document.querySelector('#btnThemNV').onclick = function () {
    var nhanVien = new thongTinNV();
    nhanVien.taiKhoan = document.querySelector('#tknv').value;
    nhanVien.hoVaTen = document.getElementById('name').value;
    nhanVien.email = document.getElementById('email').value;
    nhanVien.matKhau = document.getElementById('password').value;
    nhanVien.ngayLam = document.getElementById('datepicker').value;
    nhanVien.luongCoBan = +document.getElementById('luongCB').value;
    nhanVien.chucVu = document.getElementById('chucvu').value;
    nhanVien.gioLam = +document.getElementById('gioLam').value;
    console.log(nhanVien)

    //    checkValidation
    var valid = true;
    var errorMessge = '';
    valid = checkRong(nhanVien.taiKhoan, 'tbTKNV', 'Tài khoản') & checkRong(nhanVien.hoVaTen, 'tbTen', 'Họ và tên') & checkRong(nhanVien.email, 'tbEmail', 'Email')
        & checkRong(nhanVien.matKhau, 'tbMatKhau', 'Mật khẩu') & checkRong(nhanVien.ngayLam, 'tbNgay', 'Ngày làm') & checkRong(nhanVien.luongCoBan, 'tbLuongCB', 'Lương cơ bản')
        & checkRong(nhanVien.gioLam, 'tbGiolam', 'Giờ làm') & checkEmail(nhanVien.email, 'checkEmail', 'Email') & checkAllLetters(nhanVien.hoVaTen, 'checkletters', 'Họ và Tên')
        & checkLength(nhanVien.taiKhoan, 'checkLengthTK', 4, 6, 'Tài khoản') & checkRange(nhanVien.luongCoBan, 'checkLuongCB', 1000000, 20000000, 'Lương Cơ Bản')
        & checkRange(nhanVien.gioLam, 'checkGiolam', 80, 200, 'Giờ Làm')  &checkLength(nhanVien.matKhau, 'checkMatKhau', 6, 10, 'Mật khẩu')
        & checkPosition(nhanVien.chucVu, 'checkChucVu', 'Chức vụ')
        & isValidDate(nhanVien.ngayLam, 'formatNgay') & checkPassWord(nhanVien.matKhau, 'checkMatKhau2', 'Mật khẩu')
    if (!valid) {
        return;
    }

    arrNhanvien.push(nhanVien);
    console.log(nhanVien);
    renderNhanVien(arrNhanvien);
    saveStorage();
    console.log('arrNhanVien', arrNhanvien);
    document.querySelector('#formm').reset()
};

document.querySelector('#btnCapNhat').onclick = function () {
    var nhanVienEdit = new thongTinNV();
    nhanVienEdit.taiKhoan = document.querySelector('#tknv').value;
    nhanVienEdit.hoVaTen = document.getElementById('name').value;
    nhanVienEdit.email = document.getElementById('email').value;
    nhanVienEdit.matKhau = document.getElementById('password').value;
    nhanVienEdit.ngayLam = document.getElementById('datepicker').value;
    nhanVienEdit.luongCoBan = +document.getElementById('luongCB').value;
    nhanVienEdit.chucVu = document.getElementById('chucvu').value;
    nhanVienEdit.gioLam = +document.getElementById('gioLam').value;
    console.log('nhanvienEdit', nhanVienEdit)
    var valid = true;
    var errorMessge = '';
    valid = checkRong(nhanVienEdit.taiKhoan, 'tbTKNV', 'Tài khoản') & checkRong(nhanVienEdit.hoVaTen, 'tbTen', 'Họ và tên') 
        & checkRong(nhanVienEdit.matKhau, 'tbMatKhau', 'Mật khẩu') & checkRong(nhanVienEdit.ngayLam, 'tbNgay', 'Ngày làm') & checkRong(nhanVienEdit.luongCoBan, 'tbLuongCB', 'Lương cơ bản')
        & checkRong(nhanVienEdit.gioLam, 'tbGiolam', 'Giờ làm') & checkAllLetters(nhanVienEdit.hoVaTen, 'checkletters', 'Họ và Tên')
        & checkLength(nhanVienEdit.taiKhoan, 'checkLengthTK', 4, 6, 'Tài khoản') & checkRange(nhanVienEdit.luongCoBan, 'checkLuongCB', 1000000, 20000000, 'Lương Cơ Bản')
        & checkRange(nhanVienEdit.gioLam, 'checkGiolam', 80, 200, 'Giờ Làm') & checkLength(nhanVienEdit.matKhau, 'checkMatKhau', 6, 10, 'Mật khẩu')
        & checkPosition(nhanVienEdit.chucVu, 'checkChucVu', 'Chức vụ')
        & isValidDate(nhanVienEdit.ngayLam, 'formatNgay') & checkPassWord(nhanVienEdit.matKhau, 'checkMatKhau2', 'Mật khẩu')
    if (!valid) {
        return;
    }
    var indexEdit = -1;
    for (var index = 0; index < arrNhanvien.length; index++) {
        if (arrNhanvien[index].email === nhanVienEdit.email) {
            indexEdit = index;
            nvMang = arrNhanvien[index];
            break;
        }
    }
    nvMang.taiKhoan = nhanVienEdit.taiKhoan;
    nvMang.hoVaTen = nhanVienEdit.hoVaTen;
    nvMang.email = nhanVienEdit.email;
    nvMang.matKhau = nhanVienEdit.matKhau;
    nvMang.ngayLam = nhanVienEdit.ngayLam;
    nvMang.luongCoBan = nhanVienEdit.luongCoBan;
    nvMang.chucVu = nhanVienEdit.chucVu;
    nvMang.gioLam = nhanVienEdit.gioLam;
    renderNhanVien(arrNhanvien);
    saveStorage();
    document.querySelector('#btnThemNV').disabled = false;
    document.querySelector('#formm').reset()
}


function renderNhanVien(arrNV) {
    var stringHTML = '';
    for (var index = 0; index < arrNV.length; index++) {
        var nvNew = new thongTinNV();
        var nv = arrNV[index];
        Object.assign(nvNew, nv);
        stringHTML += `
        <tr>
        <td>${nvNew.taiKhoan}</td>    
        <td>${nvNew.hoVaTen}</td>    
        <td>${nvNew.email}</td>    
        <td>${nvNew.ngayLam}</td>    
        <td>${nvNew.chucVu}</td>    
        <td>${nvNew.tinhTongLuong()}</td>    
        <td>${nvNew.xepLoaiNV()}</td>    
        <td>
        <button data-toggle="modal" data-target="#myModal" class="btn btn-success" onclick="suaNhanVien('${index}')">Sửa</buttom>
        <button class="btn btn-danger mx-2" onclick="xoaNV('${index}')">Xóa</buttom>
        </td>
        </tr>    
        `
    }
    document.querySelector('#tableDanhSach').innerHTML = stringHTML;
    return stringHTML;
}


function suaNhanVien(indexSua) {

    document.querySelector('#tknv').value = arrNhanvien[indexSua].taiKhoan;
    document.querySelector('#name').value = arrNhanvien[indexSua].hoVaTen;
    document.querySelector('#email').value = arrNhanvien[indexSua].email;
    document.querySelector('#password').value = arrNhanvien[indexSua].matKhau;
    document.querySelector('#datepicker').value = arrNhanvien[indexSua].ngayLam;
    document.querySelector('#luongCB').value = arrNhanvien[indexSua].luongCoBan;
    document.querySelector('#chucvu').value = arrNhanvien[indexSua].chucVu;
    document.querySelector('#gioLam').value = arrNhanvien[indexSua].gioLam;
    document.querySelector('#btnThemNV').disabled = true;
    document.querySelector('#email').disabled = true;
}

function xoaNV(indexXoa) {
    arrNhanvien.splice(indexXoa, 1);
    renderNhanVien(arrNhanvien);
}


function saveStorage() {
    var stringArrNV = JSON.stringify(arrNhanvien);
    localStorage.setItem('stringArr', stringArrNV);
}

function getStorage() {
    if (localStorage.getItem('stringArr')) {
        var sArrNhanVien = localStorage.getItem('stringArr');
        arrNhanvien = JSON.parse(sArrNhanVien)
    }
}
getStorage();


document.querySelector('#searchName').oninput = function () {
    var key = document.querySelector('#searchName').value.trim();
    key = stringToSlug(key);
    var arrNhanVienTimKiem = []
    for (var index = 0; index < arrNhanvien.length; index++) {
        var nvNew = new thongTinNV();
        var nv = arrNhanvien[index];
        Object.assign(nvNew, nv);
        if (stringToSlug(nvNew.xepLoaiNV().trim()).search(key) !== -1) {
            arrNhanVienTimKiem.push(nvNew);
        }
    }
    renderNhanVien(arrNhanVienTimKiem);
}