function thongTinNV () {
    this.taiKhoan= '',
    this.hoVaTen= '',
    this.email= '',
    this.matKhau= '',
    this.ngayLam= '',
    this.chucVu= '',
    this.gioLam= 0,
    this.luongCoBan= 0,
    this.tinhTongLuong= function () {
        var tongLuong = 0;
        switch (this.chucVu) {
            case 'Sếp':
                tongLuong = this.luongCoBan * 3
                break;
            case 'Trưởng phòng':
                tongLuong = this.luongCoBan * 2
                break;
            case 'Trưởng phòng':
                tongLuong = this.luongCoBan 
                break;
        }
        return tongLuong;
    },
    this.xepLoaiNV= function() {
        var xepLoai = ''
        if(this.gioLam >=192){
            xepLoai = 'Xuất sắc';
        } else if (this.gioLam <192 && this.gioLam >=176){
            xepLoai = 'Giỏi';
        } else if (this.gioLam <176 && this.gioLam >=160){
            xepLoai = 'Khá';
        } else if  (this.gioLam <160 && this.gioLam >0) {
            xepLoai = 'Trung bình';
        }
        return xepLoai;
    }
}