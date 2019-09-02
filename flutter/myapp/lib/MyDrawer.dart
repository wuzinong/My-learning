import 'package:flutter/material.dart';
import './Login.dart';
import './main.dart';
import './MyInfo.dart';


class MyDrawer extends StatelessWidget{
   @override
  Widget build(BuildContext context) {
      return new ListView(
            children: <Widget>[
               FlatButton(
                child: Text("工作界面"),
                textColor: Colors.blue,
                onPressed: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new MyApp()));
                }
              ),
              FlatButton(
                child: Text("我发的工作"),
                textColor: Colors.blue,
                onPressed: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new LoginRoute()));
                }
              ),
              FlatButton(
                child: Text("我的信息"),
                textColor: Colors.blue,
                onPressed: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new MyInfo()));
                }
              )
          ],
     );
  }
}