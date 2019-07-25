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
    $("#correct_num").val(getRandomNumber());
    $("#base_check_btn").click(function(){
        var correctNumber = $("#correct_num").val();
        var s=0; b=0;
        var getnum = $("#base_check_num").val();
        if(getnum>9999||getnum<1000){
            $(".error_msg").text("1~9사이의 4자리 숫자로 입력해 주세요.");
            return false;
        }
        else{
            for(var i=0;i<4;i++){
				for(var j=i+1;j<4;j++){
					if(getnum.charAt(j)==getnum.charAt(i)){
						$(".error_msg").text("중복 된 숫자는 입력할 수 없습니다.");
						return false;
					}
				}
			}
        }
        $(".error_msg").text("");
        for(var i=0;i<4;i++){
            if(correctNumber.charAt(i)==getnum.charAt(i)) s++;
            else{
                for(var j=0;j<4;j++){
                    if(correctNumber.charAt(j)==getnum.charAt(i)) b++;
                }
            }
        }
        $(".base_s").text(s);$(".base_b").text(b);
        if(s==4){
            $("#number_init_btn").show();
            $(".correct_msg").show();
        }
    });
    $("#number_init_btn").click(function(){
        $("#correct_num").val(getRandomNumber());
        $("#number_init_btn").hide();
        $(".correct_msg").hide();
        $("#base_check_num").val("");
        $(".base_s").text("0");
    });
});
function getRandomNumber(){
    var radomNumber = "";
    var arr = [];
    for(var i=0;i<4;i++){
        var ranNum = Math.round((Math.random()*1000)%9);
        for(var j=0;j<i;j++){
            if(arr[j]==ranNum){
                while(arr[j]==ranNum){
                    ranNum =  Math.round((Math.random()*1000)%9);
                }
            }
        }
        arr[i] = ranNum;
    }
    for(var i=0;i<4;i++){
        radomNumber += arr[i];
    }
    return radomNumber;
}