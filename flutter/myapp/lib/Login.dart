import 'package:flutter/material.dart';
import './WorkStation.dart';

//Login page
class LoginRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("用户登录"),
      ),
      body: Center(
          child: Column(
        children: <Widget>[FocusTestRoute()],
      )),
    );
  }
}

class FocusTestRoute extends StatefulWidget {
  @override
  _FocusTestRouteState createState() => new _FocusTestRouteState();
}

class _FocusTestRouteState extends State<FocusTestRoute> {
  // FocusNode focusNode1 = new FocusNode();
  // FocusNode focusNode2 = new FocusNode();
  TextEditingController _unameController = new TextEditingController();
  TextEditingController _pwdController = new TextEditingController();
  GlobalKey _formKey = new GlobalKey<FormState>();
  bool _checkboxSelected=false;//维护复选框状态

  FocusScopeNode focusScopeNode;
  bool pwdShow = false; //密码是否显示明文

  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Form(
        key: _formKey, //设置globalKey，用于后面获取FormState
        autovalidate: true, //开启自动校验
        child: Column(
          children: <Widget>[
            TextFormField(
                controller: _unameController,
                decoration: InputDecoration(
                    labelText: "用户名",
                    hintText: "手机或邮箱",
                    prefixIcon: Icon(Icons.person),
                    errorStyle: TextStyle()),
                // 校验用户名
                validator: (v) {
                  return v.trim().length > 0 ? null : "用户名不能为空";
                }),
            TextFormField(
                controller: _pwdController, //关联focusNode2
                decoration: InputDecoration(
                  labelText: "密码",
                  hintText: "您的登录密码",
                  prefixIcon: Icon(Icons.lock),
                  suffixIcon: IconButton(
                    icon:
                        Icon(pwdShow ? Icons.visibility_off : Icons.visibility),
                    onPressed: () {
                      setState(() {
                        pwdShow = !pwdShow;
                      });
                    },
                  ),
                ),
                obscureText: !pwdShow,
                //校验密码
                validator: (v) {
                  return v.trim().length > 5 ? null : "密码不能少于6位";
                }),
            //  TextField(
            //     keyboardType: TextInputType.emailAddress,
            //     decoration: InputDecoration(
            //         labelText: "Email",
            //         hintText: "电子邮件地址",
            //         prefixIcon: Icon(Icons.email),
            //         // border: InputBorder.none //隐藏下划线
            //     )
            //   ),
            Row(
              mainAxisAlignment:MainAxisAlignment.end,
              children: <Widget>[
                Checkbox(
                  value:_checkboxSelected,
                  activeColor: Colors.blue,
                  onChanged:(value){
                      setState(() {
                        _checkboxSelected=value;
                      });
                  }
                ),
                Text(
                  "同意条款"
                )
              ],
            ),
            Builder(
              builder: (ctx) {
                return Column(
                  children: <Widget>[
                    Container(
                        width: 300.0,
                        margin: EdgeInsets.only(top: 20.0),
                        child: RaisedButton(
                          color: Colors.blue,
                          highlightColor: Colors.blue[700],
                          colorBrightness: Brightness.dark,
                          splashColor: Colors.grey,
                          child: Text("Submit"),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0)),
                          onPressed: () {
                            if ((_formKey.currentState as FormState).validate() && _checkboxSelected) {
                              Navigator.push(context,
                                  new MaterialPageRoute(builder: (context) {
                                return new WorkStation();
                              }));
                            }
                          },
                        ))
                  ],
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
