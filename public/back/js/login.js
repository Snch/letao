$(function () {  
  
  //表单校验功能

  $('#form').bootstrapValidator({
    // 校验时图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    // 配置字段
    fields: {
      username: {
        // 配置校验规则
        validators: {
          // 非空
          notEmpty: {
            // 提示
            message: "用户名不能为空"
          },
          // 长度
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名长度在2~6位"
          },
          callback : {
            message: "用户名错误"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度为6~12位"
          },
          callback: {
            message: "密码错误"
          }
        }
      }
    }

  });

  // 
  $("#form").on("success.form.bv",function (e) {  
    // 阻止默认表单提交
    e.preventDefault();
    // ajax 提交
    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      // 表单序列化 快速获取
      data: $("#form").serialize(),
      dataType: "json",
      success: function (info) {  
        // console.log(info);
        if(info.success) {
          location.href = "index.html";
        }
        if(info.error === 1000) {
          // alert("用户名不存在")
          $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback")
        }
        if(info.error === 1001) {
          // alert("密码错误")
          $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback")
        }
      }
    });
  });

  // 表单重置
  $('[type="reset"]').click(function () {  
    $("#form").data("bootstrapValidator").resetForm();
  })

});