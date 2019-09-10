import 'package:flutter/material.dart';
import 'MyPublishedWorks.dart';
import 'components/ImageUpload.dart';
import 'components/Map.dart';
import 'components/UpImg.dart';

class WorkDescription extends StatefulWidget {
  WorkDescription({Key key}) : super(key: key);

  @override
  WorkDescriptionState createState() => new WorkDescriptionState();
}


class WorkDescriptionState extends State<WorkDescription>{
  final TextEditingController _controller = new TextEditingController();
  List<Widget> picList = new List();
  var _image;

  @override
  void initState() { 
    super.initState();
  }

  void onUpload(val){
      print(val);
      picList.add(new Container(
        child: Image.file(val),
      ));
      setState(() {
         _image = val; 
         picList = picList;
      });
  }

  @override 
  Widget build(BuildContext context){
     return Scaffold(
        appBar:AppBar(
          title:Text("工作描述")
        ),
        body:Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),
          child:Column(
              //主轴上设置居中
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              //交叉轴(水平方向)设置从左开始
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                 Row(
                   mainAxisAlignment: MainAxisAlignment.spaceAround,
                   children: <Widget>[
                      Container(
                        width:200,
                        child:TextField(
                          controller: _controller,
                          decoration: new InputDecoration(
                            hintText: '工作内容描述',
                          ),
                        )
                      ),
                      Container(
                        width:150,
                        child:RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("上传图片5张"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                          Navigator.of(context).pop();
                          Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new ImageUpload()));
                        },
                      )
                      )
                   ],
                 ),
                 Column(
                   children: <Widget>[
                     Column(
                       children: picList,
                     ),
                     Wrap(
                        spacing:0,
                        runSpacing: 5,
                        children: <Widget>[
                            UpImg(callBack:(value)=>onUpload(value)),
                        ],
                      ),
                   ],
                 ),
                 Row(
                   mainAxisAlignment: MainAxisAlignment.spaceAround,
                   children: <Widget>[
                      Container(
                        width:200,
                        child:TextField(
                          controller: _controller,
                          decoration: new InputDecoration(
                            hintText: '地址',
                          ),
                        )
                      ),
                      Container(
                        width:150,
                        child:RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("选择地址"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                          // Navigator.of(context).pop();
                          Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new Map()));
                        },
                      )
                      )
                   ],
                 ),
                 Row(
                   mainAxisAlignment: MainAxisAlignment.spaceAround,
                   children: <Widget>[
                      Container(
                        width:200,
                        child:TextField(
                          controller: _controller,
                          decoration: new InputDecoration(
                            hintText: '详细地址',
                          ),
                        )
                      ),
                      Container(
                        width:150,
                        child:RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("上门时间选择"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      )
                      )
                   ],
                 ),
                 RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("发布工作请求"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                             Navigator.push( context,
                              new MaterialPageRoute(builder: (context) {
                                      return new MyPublishedWorks();
                              }));
                        },
                      )
              ],
           )
        )
     );
  }
}