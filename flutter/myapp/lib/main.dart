import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import './Login.dart';
import './Registration.dart';
import './Payment.dart';
import './WorkDescription.dart';
import './TakeOrder.dart';
import './MyWorkDetail.dart';
import './TaskComplete.dart';
import './Comments.dart';
import './WorkStation.dart';


void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false, 
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text(widget.title),
      ),
      body: new Center(
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text(
              'You have pushed the button this many times:',
            ),
            new Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
            FlatButton(
              child: Text("登录"),
              textColor: Colors.blue,
              onPressed: () {
                //导航到新路由   
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new LoginRoute();
                  }));
                },
              ),
            FlatButton(
              child: Text("注册"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new RegistrationRoute();
                  }));
                },
              ),
            FlatButton(
              child: Text("付款"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new Payment();
                  }));
                },
              ),
            FlatButton(
              child: Text("工作描述"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new WorkDescription();
                  }));
                },
              ),
           FlatButton(
              child: Text("接单"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new TakeOrder();
                  }));
                },
              ),
            FlatButton(
              child: Text("我发布的工作详情"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new MyWorkDetail();
                  }));
                },
              ),
            FlatButton(
              child: Text("服务完成确认"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new TaskComplete();
                  }));
                },
              ),
            FlatButton(
              child: Text("评价页面"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new Comments();
                  }));
                },
              ),
            FlatButton(
              child: Text("工作台页面"),
              textColor: Colors.blue,
              onPressed: () {
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new WorkStation();
                  }));
                },
              ),
            RandomWordsWidget(),
            GetImages()
          ],
        ),
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}



//english_words
class RandomWordsWidget extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    //生成随机字符串
    final wordPair = new WordPair.random();
    return Padding(
      padding:const EdgeInsets.all(8.0),
      child:new Text(wordPair.toString())
    );
  }
}

//images
class GetImages extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    //  return new DecoratedBox(
    //     decoration: new BoxDecoration(
    //       image: new DecorationImage(
    //         image: new AssetImage('images/test.jpg')
    //       )
    //     )
    //  );
     return Image.asset('images/text.jpg');
  }
}