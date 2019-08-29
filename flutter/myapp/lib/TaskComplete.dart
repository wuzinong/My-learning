import 'package:flutter/material.dart';


class TaskComplete extends StatelessWidget{
  @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("服务完成")
        ),
        body:Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),  
          child:Column(
              //主轴上设置居中
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Container(
                 width:350,
                 margin:EdgeInsets.only(bottom:20),
                 child:RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("确认完成"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      )
                ),
                 Container(
                 width:350,
                 child: RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("确认追加工作"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      )
                 )
              ],
           )
        )
     );
  }
}