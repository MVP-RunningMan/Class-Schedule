window.onload = function(){
    // 初始化6个课程变量
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");


    //获取当前日期,赋值给h1标签
    //创建时间对象
    var time = new Date();
    //使用switch函数,将getDay()方法获取的数字转变为星期
    var changeWeek = function(week){
        switch(week){
            case 0:
                return "星期天";
            case 1:
                return "星期一";
            case 2:
                return "星期二";
            case 3:
                return "星期三";
            case 4:
                return "星期四";
            case 5:
                return "星期五";
            case 6:
                return "星期六";
        }
    }
    //赋值给week
    var week = changeWeek(time.getDay());
    //赋值回h2
    document.getElementById("week").innerHTML = week;


    //计算周数
    //t1表示起始周
    var t1= "2022/08/29 00:00:00";
    //将t1转化为标准日期对象,方便计算
    var dateBegin = new Date(t1);
    //计算结果为毫秒,转换为周数,小数被舍去,所以需要加1
    //floor进行下取整,只取整数位 ceil上取整,有小数点就进一 可以使用ceil对其优化,省去 +1
    var weekNumber =Math.floor((time - dateBegin)/ (7 * 24 * 60 * 60 * 1000)) + 1;
    //赋值给h2标签
    document.getElementById("weekNumber").innerHTML = "第" + weekNumber + "周" ;


    //创建每天课程对象
    var SundayA = {
        box1Name : "",
        box1Position : "",

        box2Name : "",
        box2Position : "",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var SundayB = {
        box1Name : "",
        box1Position : "",

        box2Name : "",
        box2Position : "",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    var MondayA = {
        box1Name : "市场调查与预测",
        box1Position :"B01315CAI",

        box2Name : "机器学习",
        box2Position : "B02410",

        box3Name : "大数据商业模式",
        box3Position : "B01502CAI",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var MondayB = {
        box1Name : "市场调查与预测",
        box1Position :"B01315CAI",

        box2Name : "机器学习",
        box2Position : "B06204",

        box3Name : "大数据商业模式",
        box3Position : "B01502CAI",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    var TuesdayA = {
        box1Name : "大数据商业模式",
        box1Position : "B01502CAI",

        box2Name : "大数据技术基础",
        box2Position : "N01B303",

        box3Name : "线性模型",
        box3Position : "B01503CAI",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var TuesdayB = {
        box1Name : "",
        box1Position : "",

        box2Name : "大数据技术基础",
        box2Position : "N01B303",

        box3Name : "线性模型",
        box3Position : "B01503CAI",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    var WednesdayA = {
        box1Name : "机器学习",
        box1Position : "B02410",

        box2Name : "财务管理",
        box2Position : "B01314CAI",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var WednesdayB = {
        box1Name : "大学生职业发展教育与指导",
        box1Position : "N01B103",

        box2Name : "财务管理",
        box2Position : "B01314CAI",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var WednesdayC = {
        box1Name : "",
        box1Position : "",

        box2Name : "财务管理",
        box2Position : "B01314CAI",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    var ThursdayA = {
        box1Name : "",
        box1Position : "",

        box2Name : "大数据技术基础",
        box2Position : "N01B303",

        box3Name : "经济法",
        box3Position : "B01425CAI",

        box4Name : "散打",
        box4Position : "风雨操场6",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var ThursdayB = {
        box1Name : "",
        box1Position : "",

        box2Name : "",
        box2Position : "",

        box3Name : "经济法",
        box3Position : "B01425CAI",

        box4Name : "散打",
        box4Position : "风雨操场6",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    var FridayA = {
        box1Name : "大数据安全技术与应用",
        box1Position : "B01307CAI",

        box2Name : "电子商务",
        box2Position : "B01307CAI",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var FridayB = {
        box1Name : "大数据安全技术与应用",
        box1Position : "B06204",

        box2Name : "电子商务",
        box2Position : "B01307CAI",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    var SaturdayA = {
        box1Name : "",
        box1Position : "",

        box2Name : "",
        box2Position : "",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }
    var SaturdayB = {
        box1Name : "",
        box1Position : "",

        box2Name : "",
        box2Position : "",

        box3Name : "",
        box3Position : "",

        box4Name : "",
        box4Position : "",

        box5Name : "",
        box5Position : "",

        box6Name : "",
        box6Position : ""
    }

    //使用switch函数,返回当前日期对象,根据周数返回对应课表
    var returnWeek = function(week){
        switch(week){
            case 0:
                return SundayA;
            case 1:
                switch(weekNumber){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 15:
                    case 16:
                        return MondayA;
                    default:
                        return MondayB;
                }
            case 2:
                switch(weekNumber){
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                    case 10:
                    case 12:
                    case 14:
                    case 16:
                        return TuesdayA;
                    default:
                        return TuesdayB;
                }
            case 3:
                switch(weekNumber){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 15:
                    case 16:
                        return WednesdayA;
                    case 8:
                    case 10:
                        return WednesdayB;
                    default:
                        return WednesdayC;
                }
            case 4:
                switch(weekNumber){
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                    case 10:
                    case 12:
                    case 14:
                    case 16:
                        return ThursdayA;
                    default:
                        return ThursdayB;
                }
            case 5:
                switch(weekNumber){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 16:
                        return FridayA;
                    default:
                        return FridayB;
                }
            case 6:
                return SaturdayA;
        }
    }

    //将课程信息赋值给p标签
    var inputClasses = function(nowday){
        box1.firstElementChild.innerHTML = nowday.box1Name;
        box1.lastElementChild.innerHTML = nowday.box1Position;

        box2.firstElementChild.innerHTML = nowday.box2Name;
        box2.lastElementChild.innerHTML = nowday.box2Position;

        box3.firstElementChild.innerHTML = nowday.box3Name;
        box3.lastElementChild.innerHTML = nowday.box3Position;

        box4.firstElementChild.innerHTML = nowday.box4Name;
        box4.lastElementChild.innerHTML = nowday.box4Position;

        box5.firstElementChild.innerHTML = nowday.box5Name;
        box5.lastElementChild.innerHTML = nowday.box5Position;

        box6.firstElementChild.innerHTML = nowday.box6Name;
        box6.lastElementChild.innerHTML = nowday.box6Position;
    }

    //运行
    inputClasses(returnWeek(time.getDay()));

    //判断div课程子节点p是否有内容,无内容代表无课,将背景变白
    //此处只需要判断第一个子节点就可以实现
    var search = function(room){
        if(room.firstElementChild.innerHTML == ""){
            room.className = "hide"
        }
    }
    search(box1);
    search(box2);
    search(box3);
    search(box4);
    search(box5);
    search(box6);
}