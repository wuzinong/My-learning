import 'package:flutter/material.dart';
import './Registration.dart';

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
            children: <Widget>[
                    FocusTestRoute()
                  ],
        )
      ),
    );
  }
}

class FocusTestRoute extends StatefulWidget {
  @override
  _FocusTestRouteState createState() => new _FocusTestRouteState();
}

class _FocusTestRouteState extends State<FocusTestRoute> {
  FocusNode focusNode1 = new FocusNode();
  FocusNode focusNode2 = new FocusNode();
  FocusScopeNode focusScopeNode;
  bool pwdShow = false; //密码是否显示明文

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: <Widget>[
          TextField(
            autofocus: true, 
            focusNode: focusNode1,//关联focusNode1
            decoration: InputDecoration(
                labelText: "用户名",
                hintText: "手机或邮箱",
                prefixIcon: Icon(Icons.person)
            ),
          ),
          TextField(
            focusNode: focusNode2,//关联focusNode2
            decoration: InputDecoration(
                labelText: "密码",
                hintText: "您的登录密码",
                prefixIcon: Icon(Icons.lock),
                suffixIcon: IconButton(
                      icon: Icon(
                          pwdShow ? Icons.visibility_off : Icons.visibility),
                      onPressed: () {
                        setState(() {
                          pwdShow = !pwdShow;
                        });
                      },
                ),
            ),
            obscureText: !pwdShow,
          ),
        //  TextField(
        //     keyboardType: TextInputType.emailAddress,
        //     decoration: InputDecoration(
        //         labelText: "Email",
        //         hintText: "电子邮件地址",
        //         prefixIcon: Icon(Icons.email),
        //         // border: InputBorder.none //隐藏下划线
        //     )
        //   ),
          Builder(builder: (ctx) {
            return Column(
              children: <Widget>[
                RaisedButton(
                    color: Colors.blue,
                    highlightColor: Colors.blue[700],
                    colorBrightness: Brightness.dark,
                    splashColor: Colors.grey,
                    child: Text("Submit"),
                    shape:RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
                    onPressed: () {
                          Navigator.push( context,
                          new MaterialPageRoute(builder: (context) {
                                  return new RegistrationRoute();
                          }));
                    },
                ),
                // RaisedButton.icon(
                //   icon: Icon(Icons.send),
                //   label: Text("发送"),
                //   onPressed: (){},
                // ),
                // RaisedButton(
                //   child: Text("移动焦点"),
                //   onPressed: () {
                //     //将焦点从第一个TextField移到第二个TextField
                //     // 这是一种写法 FocusScope.of(context).requestFocus(focusNode2);
                //     // 这是第二种写法
                //     if(null == focusScopeNode){
                //       focusScopeNode = FocusScope.of(context);
                //     }
                //     focusScopeNode.requestFocus(focusNode2);
                //   },
                // ),
                // RaisedButton(
                //   child: Text("隐藏键盘"),
                //   onPressed: () {
                //     // 当所有编辑框都失去焦点时键盘就会收起  
                //     focusNode1.unfocus();
                //     focusNode2.unfocus();
                //   },
                // ),
              ],
            );
          },
          ),
        ],
      ),
    );
  }

}