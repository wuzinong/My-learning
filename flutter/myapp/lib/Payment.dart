import 'package:flutter/material.dart';

class Payment extends StatelessWidget{
  
   @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("支付")
        ),
        body:Center(
          child:Row(
              //主轴上设置居中
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              //交叉轴(水平方向)设置从左开始
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("credit card"),
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
