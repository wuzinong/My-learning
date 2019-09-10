import 'dart:io';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:fluttertoast/fluttertoast.dart';

class UpImg extends StatefulWidget{

  var callBack;
  UpImg({Key key,this.callBack}):super(key:key);
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
       onPressed: (){
         getImage();
        //  var img = getImage();
        //  widget.callBack(img);
       },
     ),
   );
 }

   void getImage() async {
    File image = await ImagePicker.pickImage(source: ImageSource.gallery);
    // _upLoadImage(image);
    // return image;
    widget.callBack(image);
  }

  _upLoadImage(File image) async {
    
  }

}