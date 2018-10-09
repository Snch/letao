$(function () {  
  var currentPage = 1; //当前页码
  var pageSize = 5;   //每页多少条
  var currentId;
  var isDelete;
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
  
  $("tbody").on("click", ".btn", function () {  
    // console.log(1);
    $("#userModal").modal("show");

    currentId = $(this).parent().data("id");
    // console.log(currentId);
    isDelete = $(this).hasClass("btn-danger") ? 0 : 1 ;
      console.log(isDelete);
  });
  $(".submitBtn").on("click",function () {  

    $.ajax({
      type: "post",
      url: "/user/updateUser",
      data: {
        id: currentId,
        isDelete: isDelete
      },
      dataType: "json",
      success: function (info) {
        if(info.success) {
          render();
          $("#userModal").modal("hide");
        }  
        
      }
    })
  })
  

});
