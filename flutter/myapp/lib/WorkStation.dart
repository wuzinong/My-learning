import 'package:flutter/material.dart';
import './Login.dart';
import './Registration.dart';
import './Payment.dart';
import './WorkDescription.dart';
import './TakeOrder.dart';
import './MyWorkDetail.dart';
import './TaskComplete.dart';
import './Comments.dart';
import './WorkStation.dart';
import './MyDrawer.dart';




class WorkStation extends StatelessWidget{
  
   @override
   Widget build(BuildContext context) {
     return Scaffold(
        appBar:AppBar(
          title:Text("我的工作台")
        ),
        drawer: new Drawer(     //侧边栏按钮Drawer
          child: new MyDrawer(),
        ),
        body: new Center(  //中央内容部分body
          child: new Text('HomePage',style: new TextStyle(fontSize: 35.0),),
        ),
     );
   }
}
