/**
 * Created by Administrator on 2017/6/26.
 */
define(['jquery'], function($){
    function allSimpleChange() {
        var $category = $('ul li:gt(5):not(:last)');

        $category.hide();
        var $toggleBtn = $('div.showmore > a');
        $toggleBtn.click(function() {
           $category.show();
           $(this).find('span')
                   .css("background", "url(img/up.gif) no-repeat 0 0")
                   .text("精简显示品牌");
           $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
                      .addClass("promoted");
            return false;
        });
    }
});