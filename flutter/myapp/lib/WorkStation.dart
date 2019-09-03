import 'package:flutter/material.dart';
import './MyTab.dart';


class WorkStation extends StatelessWidget{
  
   @override
   Widget build(BuildContext context) {
     return Scaffold(
        body: Container(
          child: new MyTab(),
        ),
     );
   }
}
