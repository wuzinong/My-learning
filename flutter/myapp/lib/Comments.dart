import 'package:flutter/material.dart';



class Comments extends StatefulWidget {
  Comments({Key key}) : super(key: key);

  @override
  CommentsState createState() => new CommentsState();
}


class CommentsState extends State<Comments>{
  final TextEditingController _controller = new TextEditingController();
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
                        width:150,
                        child:RaisedButton(
                          padding: EdgeInsets.all(15.0),
                          child: Text("上门速度"),
                          color: Theme
                              .of(context)
                              .primaryColor,
                          textColor: Colors.white,
                          onPressed: () {
                          },
                        )
                      ),
                      Container(
                        child:Row(
                        children:<Widget>[
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            )
                        ]
                      )
                      )
                   ],
                 ),
                 Row(
                   mainAxisAlignment: MainAxisAlignment.spaceAround,
                   children: <Widget>[
                      Container(
                        width:150,
                        child:RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("服务态度"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      )
                      ),
                      Row(
                        children:<Widget>[
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            )
                        ]
                      )
                   ],
                 ),
                 Row(
                   mainAxisAlignment: MainAxisAlignment.spaceAround,
                   children: <Widget>[
                      Container(
                        width:150,
                        child:RaisedButton(
                        padding: EdgeInsets.all(15.0),
                        child: Text("工作质量，可在保质期后评"),
                        color: Theme
                            .of(context)
                            .primaryColor,
                        textColor: Colors.white,
                        onPressed: () {
                        },
                      )
                      ),
                      Row(
                        children:<Widget>[
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            ),
                            IconButton(
                                  icon: Icon(Icons.star_border),
                                  onPressed: () {
                                  },
                            )
                        ]
                      )
                   ],
                 )
              ],
           )
        )
     );
  }
}