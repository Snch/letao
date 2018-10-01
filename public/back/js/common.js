// 进度条功能
//  需求: 发送第一个ajax时开启进度条 返回全部时结束
$(document).ajaxStart(function () {  
  NProgress.start();
});
$(document).ajaxStop(function () {  
  NProgress.done();
});

// 公共效果

$(function () {  

// 1 二级菜单切换效果
  $(".nav .category").on("click",function () {  
    $(".child").stop().slideToggle();
  });

// 2 左侧菜单切换
  $(".lt_main .icon-left").on("click",function () {  
    $(".lt_aside").toggleClass("hidemenu");
    $(".lt_topbar").toggleClass("hidemenu");
    $(".lt_main").toggleClass("hidemenu");
  });


// 3 退出功能
  $(".lt_main .icon-right").on("click",function () {  
    $("#logoutModal").modal("show");
  });

  $(".logoutBtn").click(function () { 
    console.log(1); 
    $.ajax({
      type: 'get',
      url: '/employee/employeeLogout',
      dataType: "json",
      success: function (info) {  
        if(info.success) {
          location.href = "login.html"
        }
      }
    });
  });


});