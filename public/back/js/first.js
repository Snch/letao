$(function () {  
  var page = 1;
  var pageSize = 5;
  render();
  function render() {  
    $.ajax({
      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: page,
        pageSize: pageSize
      },
      dataType: "json",
      success: function (info) {  
        console.log(info);
        // 渲染数据模板
        var htmlStr = template("tmp", info);
        $("tbody").html(htmlStr);
      }
    })
  }
  






});