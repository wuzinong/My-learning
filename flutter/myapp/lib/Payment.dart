import 'package:flutter/material.dart';

class Payment extends StatelessWidget{
  
   @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("支付")
        ),
        body:Center(
          child:Column(
              //主轴上设置居中
              mainAxisAlignment: MainAxisAlignment.center,
              //交叉轴(水平方向)设置从左开始
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("信用卡"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      ),
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("Pay now"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      )
              ],
           )
        )
     );
   }
}
