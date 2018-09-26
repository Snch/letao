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
          }
        }
      }
    }

  });




});