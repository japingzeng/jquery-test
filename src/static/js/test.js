/**
 * Created by Administrator on 2017/6/26.
 */
var isShow = true;
function click1buton() {
    $(".btn1").click(function(){
        if (isShow) {
            $(".two").css().show(9000);
            isShow = false;
        } else {
            $(".two").css().hide();
            isShow = true;
        }
        //$(".two").toggle();
    });
}
click1buton();
