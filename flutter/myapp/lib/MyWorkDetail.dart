import 'package:flutter/material.dart';

class MyWorkDetail extends StatelessWidget{
  final TextEditingController _controller = new TextEditingController();
   @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("我发的工作")
        ),
        body:Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),
          child:Column(
              //主轴上设置居中
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                 Row(
                   mainAxisAlignment: MainAxisAlignment.spaceAround,
                   children: <Widget>[
                      Container(
                        width:400,
                        child:TextField(
                          controller: _controller,
                          decoration: new InputDecoration(
                            hintText: '文字描述',
                          ),
                        )
                      )
                   ],
                 ),
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("确认已上门"),
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
