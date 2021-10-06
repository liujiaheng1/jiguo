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
btn.addEventListener('submit',function(e){
    var oevent = e || window.event;
    oevent.preventDefault();
    oevent.returnValue = false
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
    console.log(username_value,pass_value);
    var arr = {
        'username':username_value,
        'password':pass_value
    }
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get', 'http://192.168.43.187:3000/users/login', true);
    ajax.send(arr);
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