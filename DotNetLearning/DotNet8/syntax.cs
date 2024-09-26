
//https://sharplab.io/#v2:CYLg1APgAgTAjAWAFDOVAzAAgE4FMDGA9tsJgAqECWAdgC4wAiAFDbZgB4A0mrmAngEoA3sgC+qJBkyxMAQRFJMS6VigAWTAFkmw5Mv2YAbgENsmAA5U6mALyZquAO7kr9ZnAAMnTwIDcegyUoT0wAW1wAZwjjAHNcWwtXTAjHSlp8AAsFQMCmAD4bT04AfQFMYkwmYs4Cn1s8zAAiAHFCQmBGzgCc5XybAFYSsoqqmoGymwbGgHkAa07unqVi+qbqYlDjABtGxf1Rf0VlcSRRIA

public record Point2D(int x, int y){
}

public class C{
    public void M(){
        var r = new Point2D(10,10);
        var r1 = r with {x=20};
        
        string name = "Tim";
        int number = name switch {
             "Tim" => 1,
            "Bran" => 1,
            "Bran2" => 1,
                "Bran3" => 1,
                "Bran4" => 1,
                "Bran5" => 1,
             _ => 3
        };
    }
}

//生成的代码
        // Point2D point2D = new Point2D(10, 10);
        // Point2D point2D2 = point2D.<Clone>$();
        // point2D2.x = 20;
        // Point2D point2D3 = point2D2;
        // string text = "Tim";
        // int num;

//switch
//除去defualt,如果小于7个，会生成三目表达式
//int num = ((text == "Tim") ? 1 : ((text == "Bran") ? 1 : ((text == "Bran2") ? 1 : ((text == "Bran3") ? 1 : ((text == "Bran4") ? 1 : ((text == "Bran5") ? 1 : 3))))));

//如果大于7个，会生成switch 语句
//  if (text != null)
//         {
//             switch (text.Length)
//             {
//                 case 5:
//                     break;
//                 case 3:
//                     goto IL_0075;
//                 case 4:
//                     goto IL_0084;
//                 default:
//                     goto IL_0101;
//             }
//             switch (text[4])
//             {
//                 case '2':
//                     break;
//                 case '3':
//                     goto IL_00a2;
//                 case '4':
//                     goto IL_00b1;
//                 case '5':
//                     goto IL_00c0;
//                 case '6':
//                     goto IL_00cf;
//                 default:
//                     goto IL_0101;
//             }
//             if (text == "Bran2")
//             {
//                 num = 1;
//                 goto IL_0106;
//             }
//         }


public class A{
    public void M(){
        var point = new Point2D(10,10);
        string message = point switch{
            (>=10,_) or (_,>=10) => "Good",
            (>=5,_) or (_,>=5) => "Ok",
             _ => "normal"
        };
    }
}

//生成的代码
public class A
{
    public void M()
    {
        Point2D point2D = new Point2D(10, 10);
        if ((object)point2D == null)
        {
            goto IL_003f;
        }
        int x;
        int y;
        point2D.Deconstruct(out x, out y);
        string text;
        if (x < 10 && y < 10)
        {
            if (x < 5 && y < 5)
            {
                goto IL_003f;
            }
            text = "Ok";
        }
        else
        {
            text = "Good";
        }
        goto IL_0047;
        IL_0047:
        string text2 = text;
        return;
        IL_003f:
        text = "normal";
        goto IL_0047;
    }
}


//Spread

public class B{
    public void M(){
       int[] arr = [1,2,3,4];
       IEnumerable<int> oddValues = arr.Where(int.IsOddInteger);//1,3
       int[] evenValues = [.. arr.Where(int.IsEvenInteger)];//2,4
       int[] allValue = [.. oddValues, .. evenValues]; // 1,3,2,4
        
        //mix
        int[] arr2 = [1,2,3,4];
        int[] myValues = [0, .. arr2,5,6];//0,1,2,3,4,5,6
        
        //mix2
        int[] primes = [1,2,3,5,7,9,11];
        int[] some = [0,.. primes[1..^1]];//0,2,3,5,7,9 get the 1st to N-1th element
    }
}