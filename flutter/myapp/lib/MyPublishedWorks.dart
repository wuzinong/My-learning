import 'package:flutter/material.dart';


class MyPublishedWorks extends StatefulWidget{
  
  MypublishedWorksState createState() => new MypublishedWorksState();
  @override
  // Widget build(BuildContext context) {
  //   return Scaffold(
  //      appBar:AppBar(
  //         title:Text("我发布的工作")
  //       ),
  //      body:Padding(
  //         padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),  
  //         child: ListView(
  //           scrollDirection: Axis.vertical,
  //           children: <Widget>[],
  //         ),
  //       )
  //   );
  // }
}

class MypublishedWorksState extends State<MyPublishedWorks>{

  static const loadingTag = "##loading##"; //表尾标记
  var _words = <String>[loadingTag];

  void initState() {
    super.initState();
    // _retrieveData();
  }

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount:_words.length,
      itemBuilder: (context,index){
        //如果到了表尾
        if(_words[index] == loadingTag){
          //不足100条，继续获取数据
          if(_words.length <= 100){
            //获取数据
            // _retrieveData();
            //加载时显示loading
            return Container(
              padding:const EdgeInsets.all(16.0),
              alignment:Alignment.center,
              child:SizedBox(
                width:24.0,
                height:24.0,
                child:CircularProgressIndicator(strokeWidth: 2.0)
              )
            );
          }else{
            //已经加载了100条数据，不再获取数据。
            return Container(
                alignment: Alignment.center,
                padding: EdgeInsets.all(16.0),
                child: Text("没有更多了", style: TextStyle(color: Colors.grey),)
            );
          }
        }

         //显示单词列表项
        return ListTile(title: Text(_words[index]));
      },
    );
  }
}