
var arrNhanvien =[];
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

    

   arrNhanvien.push(nhanVien);
   console.log(nhanVien);
   renderNhanVien(arrNhanvien);
   saveStorage(); 
   console.log('arrNhanVien',arrNhanvien);
};

document.querySelector('#btnCapNhat').onclick = function() {
    var nhanVienEdit = new thongTinNV();
    nhanVienEdit.taiKhoan = document.querySelector('#tknv').value;
    nhanVienEdit.hoVaTen = document.getElementById('name').value;
    nhanVienEdit.email = document.getElementById('email').value;
    nhanVienEdit.matKhau = document.getElementById('password').value;
    nhanVienEdit.ngayLam = document.getElementById('datepicker').value;
    nhanVienEdit.luongCoBan = +document.getElementById('luongCB').value;
    nhanVienEdit.chucVu = document.getElementById('chucvu').value;
    nhanVienEdit.gioLam = +document.getElementById('gioLam').value;
    console.log('nhanvienEdit',nhanVienEdit)
    var indexEdit = -1;
    for(var index=0;index<arrNhanvien.length;index++){
        if(arrNhanvien[index].email ===nhanVienEdit.email) {
            indexEdit =index;
            nvMang = arrNhanvien[index];
            break;
        }
    }
    nvMang.taiKhoan = nhanVienEdit.taiKhoan ; 
    nvMang.hoVaTen=nhanVienEdit.hoVaTen  ;
    nvMang.email =nhanVienEdit.email  ;
    nvMang.matKhau=nhanVienEdit.matKhau;  
    nvMang.ngayLam=nhanVienEdit.ngayLam ; 
    nvMang.luongCoBan=nhanVienEdit.luongCoBan;  
    nvMang.chucVu=nhanVienEdit.chucVu  ;
    nvMang.gioLam=nhanVienEdit.gioLam;
    renderNhanVien(arrNhanvien);
    saveStorage();
    document.querySelector('#btnThemNV').disabled = false;
}


function renderNhanVien (arrNV) {
    var stringHTML = '';
    for( var index = 0; index< arrNV.length;index++){
        var nvNew = new thongTinNV();
        var nv = arrNV[index];
        Object.assign(nvNew,nv);
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

function xoaNV (indexXoa) {
    arrNhanvien.splice(indexXoa,1);
    renderNhanVien(arrNhanvien);
}


function saveStorage(){
    var stringArrNV = JSON.stringify(arrNhanvien);
    localStorage.setItem('stringArr',stringArrNV);
}

function getStorage(){
    if(localStorage.getItem('stringArr')) {
        var sArrNhanVien = localStorage.getItem('stringArr');
        arrNhanvien = JSON.parse(sArrNhanVien)
        console.log(arrNhanvien)
    }
}
getStorage();


document.querySelector('#searchName').oninput = function() {
  var key = document.querySelector('#searchName').value.trim();
    var arrNhanVienTimKiem = []
  for( var index = 0;index<arrNhanvien.length;index++){
    var nv = arrNhanvien[index];
    if(nv.hoVaTen.trim().search(key)!==-1){
        arrNhanVienTimKiem.push(nv);
    }
  }
  renderNhanVien(arrNhanVienTimKiem);
}