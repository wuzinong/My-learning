import 'package:flutter/material.dart';


class TakeOrder extends StatelessWidget{
  @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("接单")
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
                        child: Text("安排师傅失败，退款"),
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
                        child: Text("继续安排师傅"),
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