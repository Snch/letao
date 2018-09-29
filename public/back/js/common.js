// 进度条功能
//  需求: 发送第一个ajax时开启进度条 返回全部时结束
$(document).ajaxStart(function () {  
  NProgress.start();
})
$(document).ajaxStop(function () {  
  NProgress.done();
})