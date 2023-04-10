function stringToSlug(title) { 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}


// -------------------validation------------------------------


function checkRong(value,id,placeholder) {

    if( typeof(value)==="string") {
        if(value.trim()===''){
            document.querySelector(`#${id}`).className = "block text-danger";
            document.querySelector(`#${id}`).innerHTML = `${placeholder} không được để trống.`
            return false;
        }else{
            document.querySelector(`#${id}`).className = "d-none";
            document.querySelector(`#${id}`).innerHTML = '';
            return true;
     }
    }else if(typeof(value)==="number") {
        if(value===0){
            document.querySelector(`#${id}`).className = "block text-danger";
            document.querySelector(`#${id}`).innerHTML = `${placeholder} không được để trống.`
            return false;
        }else{
            document.querySelector(`#${id}`).className = "d-none";
            document.querySelector(`#${id}`).innerHTML = '';
            return true;
     }
    }

}

// ---------------------------checkEmail------------------------------

    function checkEmail(value,id,placeholder) {
     var regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     if(regexEmail.test(value)) {
        document.querySelector(`#${id}`).innerHTML = ''
        return true;
     }else {
        document.querySelector(`#${id}`).className = "block text-danger";
        document.querySelector(`#${id}`).innerHTML = `${placeholder} không đúng format`
        return false;
     }
    }
    // ----------------------checkAllLetters--------------
    function checkAllLetters(value,id,placeholder) {
        var regexLetters = /^[A-Za-z]+$/;
        if(regexLetters.test(value)) {
           document.querySelector(`#${id}`).innerHTML = ''
           return true;
        }else {
           document.querySelector(`#${id}`).className = "block text-danger";
           document.querySelector(`#${id}`).innerHTML = `${placeholder} chỉ nhập ký tự`
           return false;
        }
       }

    //----------------checkLength----------------
    function checkLength(value,id,minLength,maxLength,placeholder) {
    
        if(value.trim().length<minLength ||value.trim().length>maxLength) {
            document.querySelector(`#${id}`).className = "block text-danger";
            document.querySelector(`#${id}`).innerHTML = `${placeholder} độ dài từ ${minLength}-${maxLength} kí tự`
            return false;
        }else {
            document.querySelector(`#${id}`).innerHTML = ''
            return true;
        }
       }

    //-----------------checkRange--------------------------
    function checkRange(value,id,min,max,placeholder) {
    
        if(value<min ||value>max) {
            document.querySelector(`#${id}`).className = "block text-danger";
            document.querySelector(`#${id}`).innerHTML = `${placeholder} từ ${min}-${max}`
            return false;
        }else {
            document.querySelector(`#${id}`).innerHTML = ''
            return true;
        }
       }
    //    ---------------------checkPosition------------------------
    function checkPosition(value,id,placeholder) {
        switch(value){
            case 'Chọn chức vụ':
                document.querySelector(`#${id}`).className = "block text-danger";
                document.querySelector(`#${id}`).innerHTML = `Chọn ${placeholder} phù hợp`
                return false;
            default:
                document.querySelector(`#${id}`).innerHTML = ''
                return true;
        }
    }
    // ---------------------checkDateFormat---------------------
    function isValidDate(dateString,id)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)){
    document.querySelector(`#${id}`).className = 'block text-danger';
    document.querySelector(`#${id}`).innerHTML = `Chọn ngày theo format mm/dd/yyyy`
        return false;}

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
        document.querySelector(`#${id}`).innerHTML = ``

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

// ----------------------checkPassWord----------------

function checkPassWord(value,id,placeholder) {
    var regexPassWord=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    if(regexPassWord.test(value)) {
       document.querySelector(`#${id}`).innerHTML = ''
       return true;
    }else {
       document.querySelector(`#${id}`).className = "block text-danger";
       document.querySelector(`#${id}`).innerHTML = `${placeholder} chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
       để trống`
       return false;
    }
   }   