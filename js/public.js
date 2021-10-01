$('#mouse li').on('mouseenter',function(){
    $(this).find('a').css('color','#ff4b3f');
  
    $(this).siblings('li').find('a').css('color','black')
})

// 以下代码有瑕疵，待我再修改
// $('.both li').on('mouseenter',function(){
//     $(this).find('a').css('color','white');
//     $(this).siblings('li').find('a').css('color','#a5a3a4')
// })