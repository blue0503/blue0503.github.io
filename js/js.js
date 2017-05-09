/*
 *作者木木
 *
 *http://www.dao-gu.com
 */
var visitor = '亲爱的';
var isindex = true;
var title = $(document).find("title").text();

//右键菜单
jQuery(document).ready(function($) {
    $("#spig").mousedown(function(e) {
        if (e.which == 3) {
            showMessage("秘密通道:<br />    <a href=\"#top\">向上飞</a>    ", 10000);
        }
    });
    $("#spig").bind("contextmenu", function(e) {
        return false;
    });
});

//鼠标在消息上时
jQuery(document).ready(function($) {
    $("#message").hover(function() {
        $("#message").fadeTo("100", 1);
    });
});


//鼠标在上方时
jQuery(document).ready(function($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function() {
        $(".mumu").fadeTo("300", 0.3);
        msgs = [" ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "看，我会隐身哦！(/ω＼)嘿嘿！", "什么事？亲爱的(●'◡'●)ﾉ♥ ", " |ω・`把手拿开我才出来！"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function() {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 中午的时光真难熬！还好有你在！', 6000);
        } else {
            showMessage(visitor + ' 快来逗我玩吧！', 6000);
        }
    } else {
        showMessage('欢迎' + visitor + '来到IKA网页' + title + '我是看板娘IKA ', 6000);
    }
    $(".spig").animate({
        top: 300,
        left: 80
    }, {
        queue: false,
        duration: 1000
    });

});

//鼠标在某些元素上方时
jQuery(document).ready(function($) {
    $('#go-action').mouseover(function() {
        showMessage('哼哼！是时候展现一波车技了！ (•̀ᴗ•́)و ̑̑');
    });
    $('#go-about').mouseover(function() {
        showMessage('那里是关于网站建设，代码使用什么的...');
    });
    $('#go-contact').mouseover(function() {
        showMessage('大大,有人找你哟！');
    });

    $('.previous').mouseover(function() {
        showMessage('要翻到上一页吗?');
    });
    $('.next').mouseover(function() {
        showMessage('要翻到下一页吗?');
    });
    /* $('.sidenav li a').mouseover(function() {
         showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
     });
     $('#comments').mouseover(function() {
         showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
     });
     $('.btn-fw').mouseover(function() {
         showMessage('确认提交了么？');
     });
     $('#s').focus(function() {
         showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
     });
     $('.category a').mouseover(function() {
         showMessage('点击查看此分类下的所有日记');
     });
     $('.tag a').mouseover(function() {
         showMessage('点它可以查看这个标签下的所有日记');
     });
     $('.note-author').mouseover(function() {
         showMessage('点它可以查看这个作者的所有日记');
     });
     $('.note-date').mouseover(function() {
         showMessage('点它可以查看这个月的所有日记');
     });
     $('.note-title').mouseover(function() {
         showMessage('要看看「<span style="color:#0099cc;">' + $(this).text() + '</span>」这篇日记么？');
     });*/
    $('#go-itank').mouseover(function() {
        showMessage('这是我家的小车～');
    });
    $('#go-kinect').mouseover(function() {
        showMessage('空手开车的秘诀^_^');
    });
    $('#go-yun').mouseover(function() {
        showMessage('这是我家的Wi-Fi呢～');
    });
    $('#go-cam').mouseover(function() {
        showMessage('这是我家宠物“摄影狮”');
    });
    $('#go-processing').mouseover(function() {
        showMessage('空手开车靠它了');
    });
    $('#go-arduino').mouseover(function() {
        showMessage('小车的控制靠它了～');
    });
    $('#go-sublime').mouseover(function() {
        showMessage('文字编辑软件，我就是这里出生的！（ง •̀_•́)ง ');
    });
    $('#spig-hide').mouseover(function() {
        showMessage('不要～ (PД`q｡)・我不要进小黑屋');
    });
    $('#spig-show').click(function() {
        showMessage('哈哈～ ヾ (o ° ω ° O ) ノ゙ 俺IKA终于重见天日啦～');
    });
    $('#go-topa').click(function() {
        showMessage('咻～～');
    });
});


//无聊讲点什么
jQuery(document).ready(function($) {

    window.setInterval(function() {
        msgs = ["陪我聊天吧！", "吾名IKA， (。-`ω´-)敢问，你是我的master吗？", "呀…… >ㅂ< ………", " 哼，都～●　　 　 　 ●  不理我！ \" 　　^　　 \"", "我可爱吧！嘻嘻!~^_^!~~", "偷看(/ω・＼) ", "盯~~~~~~"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);

});

//无聊动动
jQuery(document).ready(function($) {
    window.setInterval(function() {
        msgs = ["秘术！风遁！", "(*´∇｀*)啦~啦～啦～啦～", "我飘过去了", "我相信，我已经引起了你的注意～～得意 <(▰˘◡˘▰)>！"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        }, {
            duration: 2000,
            complete: showMessage(msgs[i])
        });
    }, 45000);
});

//评论资料
jQuery(document).ready(function($) {
    $(".contact").click(function() {
        showMessage("认真填写哦！不然我可是会生气的哦～");
        $(".spig").animate({
            top: $("#comment_sohu").offset().top - 70,
            left: $("#comment_sohu").offset().left - 170
        }, {
            queue: false,
            duration: 1000
        });
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function() {
        $(".spig").animate({
            top: $(window).scrollTop() + f + 200
        }, {
            queue: false,
            duration: 1000
        });
    });
});

//鼠标点击时
jQuery(document).ready(function($) {
    var stat_click = 0;
    $(".mumu").click(function() {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["(￣ε(#￣)☆╰╮o(￣皿￣///)变态 ", "你已经摸我" + stat_click + "次了", "我要藏起来", "哼         ●　　 　 　 ●   \" 　　^　　 \""];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["秘术！～大～风～车～！", "哇～咔咔咔咔咔咔咔...", "banana!", "我跑呀跑呀跑！~~", "", "你不走，我走！", "你走", "●　　 　 　 ●   \" 　　^　　 \""];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            }, {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function($) {
    $("#spig").mousedown(function(e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
    });
    $(document).mousemove(function(e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
                ismove = true;
            }
        }
    }).mouseup(function() {
        _move = false;
    });
});

//点击不跳转
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
});


// go-top display

$(document).ready(function() {
    $(window).scroll(function() {
        var a = document.getElementById("top").offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
            //alert("div在可视范围");
            document.getElementById("go-top").style.display = "none";
        } else {
            document.getElementById("go-top").style.display = "block";
        }
    });
});

//  spig display

$(document).ready(function($) {
    $("#spig-hide").click(function() {
        document.getElementById("spig").style.display = "none";
    });
    $("#spig-show").click(function() {
        document.getElementById("spig").style.display = "";
    })
});
