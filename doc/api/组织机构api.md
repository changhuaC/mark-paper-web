# 组织机构

[TOC]

## 用户登录
+ 接口名称: `login`
+ 接口描述: 用户登录
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
## 获取验证码
+ 接口名称: `logout`
+ 接口描述: 获取图形验证码/发送手机短信验证码
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "codeType":"string",
        "userId":"string",
    },
    "pageNum": 0,
    "pageSize": 0,
    "token":"string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 用户登出
+ 接口名称: `logout`
+ 接口描述: 用户登出
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "userId":"string"
    },
    "pageNum": 0,
    "pageSize": 0,
    "token":"string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 获取单个或多个用户信息
+ 接口名称: `getUserInfo`
+ 接口描述: 获取单个或多个用户信息
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "userId": [
            "string"
        ]
    },
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": [{
        "userId": "string",
        "userName": "string",
        "email": "string",
        "mobilePhone": "string",
        "nickName": "string",
        "job":"",
        "orgId": "string",
        "orgName": "string",
        "password": "string",
        "roles": [{
            "roleId":"string",
            "roleName":"string",
        }],
        "rights":[{
            "rightKey":"string"
        }]
    }],
    "errorCode": "string",
    "errorMsg": "string",
    "msg": "string",
    "pageNum": 0,
    "pageSize": 0,
    "result": "string",
    "total": 0
}
```
## 添加用户
+ 接口名称: `addUser`
+ 接口描述: 添加用户
+ 请求类型: 'POST'
+ 请求参数:
``` js

{
    "data": [{
            "userName": "string",
            "email": "string",
            "mobilePhone": "string",
            "nickName": "string",
            "job":"string",
            "orgId": "string",
            "password": "string",
            "subjectId":["string","string"],
            "roles": [{
                "roleId":"string",
                "roleName":"string",
            }]
        }
    ],
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 修改用户
+ 接口名称: `updateUser`
+ 接口描述: 修改用户
+ 请求类型: 'POST'
+ 请求参数:
``` js

{
    "data": [{
            "userId": "string",
            "userName": "string",
            "email": "string",
            "mobilePhone": "string",
            "nickName": "string",
            "job":"string",
            "orgId": "string",
            "password": "string",
            "subjectId":["string","string"],
            "roles": [{
                "roleId":"string",
                "roleName":"string",
            }]
        }
    ],
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 修改密码
+ 接口名称: `updatePassword`
+ 接口描述: 修改密码
+ 请求类型: 'POST'
+ 请求参数:
``` js

{
    "data": {
        "userId": "string",
        "passWord": "string",
        "newPassWord": "string",
        "checkCode":"string"
    },
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 重置密码
+ 接口名称: `resetPassword`
+ 接口描述: 重置密码
+ 请求类型: 'POST'
+ 请求参数:
``` js

{
    "data":  [{
        "userId": "string",
        "newPassWord": "string",
        "checkCode":"string"
    }],
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 获取机构信息
+ 接口名称: `getOrgInfo`
+ 接口描述: 获取机构信息
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "orgId": [
            "string"
        ]
    },
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": [{
                "orgId": "string",
                "orgName": "string",
                "payType": "string",
                "authorityType": "string",
                "parentOrgId": "string",
                "parentOrgName": "string",
                "areaInfo":[{
                "areaKey":"string",
                "areaName":"string"
            }],
            "roles": [{
                "roleId":"string",
                "roleName":"string",
            }
            ],
            "rights":[{
                rightKey":"string"
            }]
        }
    ],
    "errorCode": "string",
    "errorMsg": "string",
    "msg": "string",
    "pageNum": 0,
    "pageSize": 0,
    "result": "string",
    "total": 0
}
```
## 新增机构信息
+ 接口名称: `addOrgInfo`
+ 接口描述: 新增机构信息
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": [{
        "orgName": "string",
        "payType": "string",
        "authorityType": "string",
        "parentOrgId": "string",
        "parentOrgName": "string",
        "areaInfo":[{
            "areaKey":"string",
            "areaName":"string"    
        }]
        "roles": [{
            "roleId":"string",
            "roleName":"string",
        }],
    }],
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": {
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
## 获取机构下属所有组织关系
+ 接口名称: `getOrgRelations`
+ 接口描述: 获取机构下属所有组织关系
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "orgId":"string"
    },
    "pageNum": 0,
    "pageSize": 0,
    "token":"string"
}
```
+ 返回数据
``` js
{
    "data": [{
        "orgId": "string",
        "orgName": "string",
        "parentOrgId":"",
        "parentOrgName":"",
        "child":[{
            "orgId": "string",
            "orgName": "string",
            "parentOrgId":"",
            "parentOrgName":"",
            "child":[{
                "orgId": "string",
                "orgName": "string",
                "parentOrgId":"",
                "parentOrgName":"",
                "child":[]
                }]
            }]
        }
    ],
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
## 获取邀请码
+ 接口名称: `getRegistCode`
+ 接口描述: 新增机构信息
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "codeType":"string",
        "examId":"string",
        "paperId":"string",
        "orgId":"string"
    },
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": {
        "registCode":"string"
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
## getSchoolInfo
+ 接口名称: `getSchoolInfo`
+ 接口描述: 获取机构下属所有学校
+ 请求类型: 'POST'
+ 请求参数:
``` js
{
    "data": {
        "orgId":"string"
    },
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}
```
+ 返回数据
``` js
{
    "data": [{
        "orgId": "string",
        "orgName": "string",
        "payType": "string",
        "authorityType": "string",
        "parentOrgId": "string",
        "parentOrgName": "string",
        "areaInfo":[{
            "areaKey":"string",
            "areaName":"string"    
        }]
        "roles": [{
            "roleId":"string",
            "roleName":"string",
        }],
    ],
    "pageNum": 0,
    "pageSize": 0,
    "token": "string"
}