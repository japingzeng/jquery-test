/**
 * Created by Administrator on 2017/6/26.
 */
define(["jquery"], function($) {
    var isShow = true;
    function click1buton() {
        $(".btn1").click(function(){
            if (isShow) {
                $("div:hidden").show(3000);
                isShow = false;
            } else {
                $(".two").hide(3000);
                isShow = true;
            }
            //也可直接使用toggle方法实现
            //$(".two").toggle();
        });
    }

    //function f() {
    //    $(".btn2").click(function(){
    //        $("p").slideToggle();
    //    });
    //}
    return {
        click1buton: click1buton
    }
});