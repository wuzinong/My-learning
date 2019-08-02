import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:flutter/services.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
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
              child: Text("Login page"),
              textColor: Colors.blue,
              onPressed: () {
                //导航到新路由   
                Navigator.push( context,
                new MaterialPageRoute(builder: (context) {
                        return new LoginRoute();
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


//Login page
class LoginRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("用户登录"),
      ),
      body: Center(
        child: Column(
            children: <Widget>[
                    FocusTestRoute()
                  ],
        )
      ),
    );
  }
}



class FocusTestRoute extends StatefulWidget {
  @override
  _FocusTestRouteState createState() => new _FocusTestRouteState();
}

class _FocusTestRouteState extends State<FocusTestRoute> {
  FocusNode focusNode1 = new FocusNode();
  FocusNode focusNode2 = new FocusNode();
  FocusScopeNode focusScopeNode;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: <Widget>[
          TextField(
            autofocus: true, 
            focusNode: focusNode1,//关联focusNode1
            decoration: InputDecoration(
                labelText: "用户名",
                hintText: "用户名或邮箱",
                prefixIcon: Icon(Icons.person)
            ),
          ),
          TextField(
            focusNode: focusNode2,//关联focusNode2
            decoration: InputDecoration(
                labelText: "密码",
                hintText: "您的登录密码",
                prefixIcon: Icon(Icons.lock)
            ),
          ),
         TextField(
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
                labelText: "Email",
                hintText: "电子邮件地址",
                prefixIcon: Icon(Icons.email),
                // border: InputBorder.none //隐藏下划线
            )
          ),
          Builder(builder: (ctx) {
            return Column(
              children: <Widget>[
                RaisedButton(
                  child: Text("移动焦点"),
                  onPressed: () {
                    //将焦点从第一个TextField移到第二个TextField
                    // 这是一种写法 FocusScope.of(context).requestFocus(focusNode2);
                    // 这是第二种写法
                    if(null == focusScopeNode){
                      focusScopeNode = FocusScope.of(context);
                    }
                    focusScopeNode.requestFocus(focusNode2);
                  },
                ),
                RaisedButton(
                  child: Text("隐藏键盘"),
                  onPressed: () {
                    // 当所有编辑框都失去焦点时键盘就会收起  
                    focusNode1.unfocus();
                    focusNode2.unfocus();
                  },
                ),
              ],
            );
          },
          ),
        ],
      ),
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