//隐藏下拉框的监听事件
$(document).ready(function () {
    // 搜索栏变长
    $(".search-form .search-text").click(function(){
        $(".search-form").css("width","570px");
        $(".search-text").css("width","500px");
    })
    //失去焦点变回原长度
    $(".search-text ").blur(function(){
        $(".search-form").css("width","350px");
        $(".search-text").css("width","280px");
    })

    //导航条更改id
    $(".aside-main .nav .catalogue").click(function () { 
        // 先改变其他两个的id，和display
        $(".aside-main .nav .about-me").attr("id"," ");
        $(".aside-main .nav .connect").attr("id"," ");
        $(".aside-main .nav .catalogue").attr("id","click");

        $(".aside-main .nav-item .connect").attr("id"," ");
        $(".aside-main .nav-item .about-me").attr("id"," ");
        $(".aside-main .nav-item .catalogue").attr("id","active");
    });

    $(".aside-main .nav .connect").click(function () { 
        $(".aside-main .nav .catalogue").attr("id","");
        $(".aside-main .nav .about-me").attr("id"," ");
        $(".aside-main .nav .connect").attr("id","click");

        $(".aside-main .nav-item .catalogue").attr("id"," ");
        $(".aside-main .nav-item .about-me").attr("id"," ");
        $(".aside-main .nav-item .connect").attr("id","active");
    });


    $(".aside-main .nav .about-me").click(function () { 
        $(".aside-main .nav .catalogue").attr("id"," ");
        $(".aside-main .nav .connect").attr("id"," ");
        $(".aside-main .nav .about-me").attr("id","click");

        $(".aside-main .nav-item .catalogue").attr("id"," ");
        $(".aside-main .nav-item .connect").attr("id"," ");
        $(".aside-main .nav-item .about-me").attr("id","active");
    });

    // 失去焦点变回原id
    //鼠标悬停导航栏下拉框显示
    $("#item-2").hover(function () {
        $(".submenu").css("display","block");
        
        }, function () {
            $(".submenu").css("display","none");
        }
    );
    $(".menu .item-dropdown").hover(function () {
        $(".item-dropdown .hidden").css("display","block");
        }, function () {
            $(".item-dropdown .hidden").css("display","none");
        }
    );
});
// 左侧侧边栏滚动
$(function() {
    var $sidebar   = $(".aside"), 
        $footer    = $("#footer"),
        $window    = $(window),
        docHeight = $(document).height(),
        windowHeight = $(window).height(),
        offset     = $sidebar.offset(),
        footerOffset = $footer.offset(),
        imgLength = 400;
        asideLength = 800;
        

    $window.scroll(function() {

        // 当被折叠部分大于侧边栏距顶部距离时 且 距离页脚的距离大于自身长度时
        if ($window.scrollTop() > offset.top && (footerOffset.top - $window.scrollTop()) > asideLength) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top
            });
        // 当被折叠部分大于侧边栏距顶部距离时 且 距离页脚的距离小于自身长度时
        }else if( $window.scrollTop() > offset.top && (footerOffset.top - $window.scrollTop()) <= asideLength){
            $sidebar.stop().animate({
                marginTop: footerOffset.top - asideLength -imgLength
            });
        }
        // 
        else if($window.scrollTop() <= offset.top){
            $sidebar.stop().animate({
                marginTop: 0
            });
        }


        
        // 计算滚动的百分比= math.abs( (被卷的距离 - bodyOffset.Top)/bodyLength)* 100
        if($window.scrollTop() >= 0){
            let number = ($window.scrollTop()/(docHeight - windowHeight))* 100;
            $(".tool-main .number .text").text(number.toFixed(0) + '%');
        }
    });
    
});

