import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class UpImg extends StatefulWidget{
  @override
  _UpImgState createState() {
    return _UpImgState();
  }
}

class _UpImgState extends State<UpImg>{
 @override
 Widget build(BuildContext context) {
   return Container(
     child: RaisedButton(
       child: Icon(Icons.add_a_photo),
     ),
   );
 }
}