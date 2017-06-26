/**
 * Created by Administrator on 2017/6/26.
 */
define(["jquery"], function($) {
    function f() {
        $(".btn2").click(function(){
            $("p").slideToggle();
        });
    }
    return {
        f: f
    }
});
