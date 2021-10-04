var ip = '192.168.43.187';
var ul = document.getElementById('mb');
var newest = document.getElementById('newest');
var newset_ = document.getElementById('newset_');
var num = 0;
var num1 = 1;
// 点击下边框发生变化
$('.lei li').on('click',function(){
    $(this).addClass('border_')
    $(this).siblings('li').removeClass('border_')
})
// ajax+模板引擎函数
go()
function go(){
    num++;
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP')
    ajax.open('get','http://192.168.43.187:3000/play/new' ,true);
    ajax.send();
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status == 200){
               
                var set = JSON.parse(ajax.responseText)
              
                both(set)
            }
        }
    }
    function both(set){
        var html = template('first',{
            value:set[num]
            
        })
       
        ul.innerHTML+= html;
    }
    if(num>3){
       num =0;
    }
    console.log(num);
}
/* * * * * * * * * * * * * * * * * * * 最新 * * * * * * * * * * * * * * * * * * *  */
// 点击更多加载页面
newest.onclick = function(){
    go()
}
// 点击最新加载页面
newset_.onclick = function(){
    go();
    ul.innerHTML = '';
    $('#mb').css('display','block');
    $('#newest').css('display','block');
    $('#display').css('display','none');
}
/* * * * * * * * * * * * * * * * * * * 最热 * * * * * * * * * * * * * * * * * * *  */
function go_1(){
    num1++;
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP')
    ajax.open('get','http://192.168.43.187:3000/play/hot' ,true);
    ajax.send();
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status == 200){
               
                var set = JSON.parse(ajax.responseText)
                both(set)
            }
        }
    }
    function both(set){
        var html = template('first',{
            value:set[num1]
            
        })
        ul.innerHTML += html;
    }
    if(num1>=3){

        
        num1 =0;
    }
    console.log(num);
}
hot.onclick = function(){
    go_1()
    ul.innerHTML = '';
    newest.style.display = 'block'
    $('#mb').css('display','block');
    $('#newest').css('display','block');
    $('#display').css('display','none');
}
$('#classify').on('click',function(){
    $('#mb').css('display','none');
    $('#newest').css('display','none');
    $('#display').css('display','block');
})