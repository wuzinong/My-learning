import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import './MyWorkDetail.dart';


class MyPublishedWorks extends StatefulWidget{
  
  MypublishedWorksState createState() => new MypublishedWorksState();
}

class MypublishedWorksState extends State<MyPublishedWorks>{

  // static const loadingTag = "##loading##"; //表尾标记
  var _words = <String>[""];

  void initState() {
    super.initState();
    _retrieveData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text("我发布的工作")
      ),
      body:ListView.separated(
      itemCount:_words.length,
      itemBuilder: (context,index){
        //如果到了表尾
        if(index >= _words.length-1){
          //不足100条，继续获取数据
          if(_words.length <= 100){
            //获取数据
            _retrieveData();
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
        return ListTile(
          title: Text(_words[index]),
          leading:Icon(Icons.description),
          trailing:Icon(Icons.arrow_right),
          subtitle: Text("This is the sub title for the record"),
          onTap: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) => new MyWorkDetail()));
                }
          );
      },
      separatorBuilder: (context, index) => Divider(height: .0),
    )
    );
  }

   List<String> generateWordPairs(){
       var result = [""];
       for(int i=0;i<20;i++){
         result.add(new WordPair.random().toString());
       }
       result.removeAt(0);
       return result;
   }

   void _retrieveData() {
    var data = generateWordPairs();
    Future.delayed(Duration(seconds: 2)).then((e) {
      _words.insertAll(_words.length - 1,
          //每次生成20个单词
          data
      );
      // if(mounted){
        setState(() {
            _words = _words;
        });
      // }
    });
  }
  
}