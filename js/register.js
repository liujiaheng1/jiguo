// 验证手机号
phone.addEventListener('blur',function(){
    var phone_value = phone.value
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if(!reg.test(phone_value)){
       
        this.style.border = '1px solid red';
        this.value = '';
        return;
    }else{
        this.style.border = 'none'
    }

})
// 验证图片校验码
photo.addEventListener('blur',function(){
    var num = 'r2B7';
    var photo_value = photo.value;
    if(photo_value != num){
        this.style.border = '1px solid red';
        return;
    }else{
        this.style.border = 'none'
    }
})
// 用户名
username.addEventListener('blur',function(){
    var username_value = username.value;
    var reg1 = /^[\da-zA-Z_\u4e00-\u9f5a]{4,8}$/;
    if(!reg1.test(username_value)){
        this.style.border = '1px solid red'
        this.value = ''
        return;
    }else{
        this.style.border = 'none'
    }
})
// 验证密码
pass.addEventListener('blur',function(){
    var pass_value = pass.value;
    var reg2 = /^[\w]{6,12}$/;
    if(!reg2.test(pass_value)){
        this.style.border = '1px solid red';
        this.value = '';
        return;
    }else{
        this.style.border = 'none'
    }
})
// 验证确认密码
ypass.addEventListener('blur',function(){
    var ypass_value = ypass.value;
    var pass_value = pass.value;
    if(ypass_value != pass_value){
        this.style.border = '1px solid red';
        this.value = '';
        return;
    }else{
        this.style.border = 'none'
    }
})

// ajax请求向后台发送数据
btn.addEventListener('submit',function(e){
    var oevent = e || window.event;
    oevent.preventDefault();
    oevent.returnValue = false
    // 验证手机号
    var phone_value = phone.value
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if(!reg.test(phone_value)){
       
        phone.style.border = '1px solid red';
        phone.value = '';
        return;
    }else{
        phone.style.border = 'none'
    }
    // 验证图片校验码
    var num = 'r2B7';
    var photo_value = photo.value;
    if(photo_value != num){
        photo.style.border = '1px solid red';
        return;
    }else{
        photo.style.border = 'none'
    }
    // 验证用户名
    var username_value = username.value;
    var reg1 = /^[\da-zA-Z_\u4e00-\u9f5a]{4,8}$/;
    if(!reg1.test(username_value)){
        username.style.border = '1px solid red'
        username.value = ''
        return;
    }else{
        username.style.border = 'none'
    }
    // 验证密码
    var pass_value = pass.value;
    var reg2 = /^[\w]{6,12}$/;
    if(!reg2.test(pass_value)){
        pass.style.border = '1px solid red';
        pass.value = '';
        return;
    }else{
        pass.style.border = 'none'
    }
    // 验证确认密码
    var ypass_value = ypass.value;
    var pass_value = pass.value;
    if(ypass_value != pass_value){
        ypass.style.border = '1px solid red';
        ypass.value = '';
        return;
    }else{
        ypass.style.border = 'none'
    }
    console.log('lllll');
    // 向后台提交数据
    var arr = 'path:/users/register&phone'+phone_value+'&code'+photo_value+'&username'+username_value+'password'+pass_value;
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('post', 'http://192.168.43.187:3000/users/register', true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log(ajax.responseText);
                // 以 " 符号进行分割 截取下标5到6的内容，之后弹出警示信息
                // var our = ajax.responseText.split('"').slice(5,6)
                // alert(our)

                
            }
        }
    }
})