;$(function()
{
	'use strict';
	var sidebar=$('#sidebar'),//选择侧栏
		mask=$('.mask'),
		backButton=$('.side_btn'),
		sidebar_trigger=$('#sidebar_trigger');

	function showSideBar()
	{
		mask.fadeIn();
		sidebar.css('right',0);
	}

	function hideSideBar()
	{
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}

    sidebar_trigger.on('click',showSideBar);//监听侧栏触发器click事件
    mask.on('click',hideSideBar);//监听mask的点击事件

    backButton.on('click',function(){
    	$('html,body').animate({
    		scrollTop:0
    	},800);
    })

    $(window).on('scroll',function(){//监听事件
    	if ($(window).scrollTop() > $(window).height()){
  //滚出屏幕的高度（以浏览器上方为准）大于浏览器屏幕的静态高度
  //已滚动部分高于窗口高度
    	backButton.fadeIn();
    }
    else
    	backButton.fadeOut();
    })


    // $(window).trigger('scroll');//触发scroll事件

    $('.fonta').on('click',function(){
        var topvalue=$(window).height()+20;
        $('html,body').animate({scrollTop:topvalue+'px'},200,'swing');
    });
    

})






