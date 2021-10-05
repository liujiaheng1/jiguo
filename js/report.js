var new_ = document.getElementById('newset_');
var ul = document.getElementById('mb');
var height1 = document.getElementsByClassName('center_text')[0];
var ip = '192.168.43.187';
// 点击下边框发生变化
$('.lei li').on('click',function(){
    $(this).addClass('border_')
    $(this).siblings('li').removeClass('border_')
})
// 点击更多执行ajax+模板引擎
newest.onclick = function(){
    height1.style.height = '5182px';
    this.style.display = 'none'
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
    ajax.open('get','http://'+ip+':3000/report/new' ,true)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status == 200){
               
                var set = JSON.parse(ajax.responseText)
              console.log(set);
                both(set)
            }
        }
    }
    // 往页面渲染
    function both(set){
        var html = template('report',{
            value:set
            
        })
        ul.innerHTML= html;
    }
}
// 点击最热执行ajax+模板引擎
hot.onclick = function(){
    height1.style.height = '5182px';
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
    ajax.open('get','http://'+ip+':3000/report/new' ,true)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status == 200){
               
                var set = JSON.parse(ajax.responseText)
              console.log(set);
                both(set)
            }
        }
    }
    // 往页面渲染的过程
    function both(set){
        var html = template('report',{
            value:set
            
        })
        ul.innerHTML= html;
    }
}