$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $("#header-content").addClass("scrolled");
        $("#header").css("opacity","0.9");
    }
    else{
        $("#header-content").removeClass("scrolled");
        $("#header").css("opacity","1");
    }
});
$(document).ready(function(){
    //index
    $("#regist-view").hide();$("#forgot-view").hide();
    $(".go-login-btn").click(function(){$(".frm-view").hide();$("#login-view").show();});
    $(".go-regist-btn").click(function(){$(".frm-view").hide(); $("#regist-view").show();});
    $(".go-forgot-btn").click(function(){$(".frm-view").hide();$("#forgot-view").show();});
    $(".login-btn").click(function(){
        if($("#lg_userid").val()==""){
            alert("아이디를 입력해 주세요.");
            return false;
        }
        else if($("#lg_password").val()==""){
            alert("암호를 입력해 주세요.");
            return false;
        }
        else if($("#lg_userid").val()=="daiunii" && $("#lg_password")=="a1234"){
            alert("Login success");
        }
        else alert("You can not access this page");
    });
    //timeline
    $(".profile_img").click(function(){
        $(".profile_img_input").click();
    });
    $(".regist-submit-btn").click(function(){
        if(!$("#reg_agree").is(":checked")){
            alert("agree check false");
            return false;
        }
    });
    $(".profile").click(function(){
        location.href="myPage.html";
    });
    $("#header-logo").click(function(){
        location.href="timeLine.html";
    });
    //mypage
    $("#tap_menus").find("a").click(function(){
        $("#tap_menus").find("a").removeClass("tap_menu_active");
        $(this).addClass("tap_menu_active");
    });
    $(".feed_area").children().find("img").click(function(){
        var $thisimg = $(this).attr("src");
        $(".detail_picture").find("img").attr("src",$thisimg);
    });
    $("tr").click(function(){
        console.log($(this).html());
    });
});