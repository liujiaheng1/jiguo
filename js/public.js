$('#mouse li').on('mouseenter',function(){
    $(this).find('a').css('color','#ff4b3f');
  
    $(this).siblings('li').find('a').css('color','black')
})
