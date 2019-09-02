import 'package:flutter/material.dart';

class MyInfo extends StatelessWidget{
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar:AppBar(
          title:Text("我的信息")
        ),
         body:Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),  
          child: Column(
            children: <Widget>[
              Text("姓名:XXX"),
              Text("年龄:XXX"),
              Text("住址:XXX"),
              Text("手机:XXX")
            ],
          ),
         )
      );
  }
}