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




class MyDrawer extends StatelessWidget{
   @override
  Widget build(BuildContext context) {
      return new ListView(
            children: <Widget>[
               FlatButton(
                child: Text("登录"),
                textColor: Colors.blue,
                onPressed: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new LoginRoute()));
                }
              )
          ],
     );
  }
}