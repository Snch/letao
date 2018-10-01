$(function () {  
  var currentPage = 1; //当前页码
  var pageSize = 5;   //每页多少条
  // 一进入页面调用
  render();
  function render() {  
    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function (info) {  
        console.log(info);
        // 模板引擎
        var htmlStr = template("tmp", info);
        $("tbody").html( htmlStr);
  
        // 分页初始化 
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: currentPage,
          totalPages: Math.ceil(info.total / info.size),
          onPageClicked: function ( a, b , c, page) {   
            currentPage = page;
            render();
          }
        });
      }
    });
  }
  

});
