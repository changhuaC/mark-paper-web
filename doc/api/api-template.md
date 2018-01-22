# 接口文件标题

[TOC]

## 接口标题
+ 接口名称: `login`
+ 接口描述: 描述文字
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "loginName":"string",
        "passWord":"string"
        "verifyCode":"string",
    },
    "pageNum": 0,
    "pageSize": 0
}
```
+ 返回数据
``` js
{
    "data": {
        "checkRestult":"string",
        "showVerifyCode":true
    },
    "errorCode": "string",
    "errorMsg": "string",
    "msg": "string",
    "pageNum": 0,
    "pageSize": 0,
    "result": "string",
    "token": "string",
    "total": 0
}
```
