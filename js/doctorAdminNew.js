/**
 * Created by BanTing on 2017/1/6.
 */
var chart1,chart2,chart3,chart4,chart4,chart5,chart6,chart7,chart8,chart9,chart10,chart11,chart12;
var schart1,schart2,schart3,schart4,schart5,schart6,schart7,schart8,schart9,schartX,schart11,schart12;
var count=300;
var k=0;
var dataArray1 = new Array();var dataArray2 = new Array();
var dataArray3 = new Array();var dataArray4 = new Array();
var dataArray5 = new Array();var dataArray6 = new Array();
var dataArray7 = new Array();var dataArray8 = new Array();
var dataArray9 = new Array();var dataArray10 = new Array();
var dataArray11 = new Array();var dataArray12 = new Array();
var sdataArray1 = new Array();var sdataArray2=new Array();
var sdataArray3 = new Array();var sdataArray4 = new Array();
var sdataArray5 = new Array();var sdataArray6 = new Array();
var sdataArray7 = new Array();var sdataArray8 = new Array();
var sdataArray9 = new Array();var sdataArray10 = new Array();
var sdataArray11 = new Array();var sdataArray12 = new Array();
var array1=new Array();var array2=new Array();
var array3=new Array();var array4=new Array();
var array5=new Array();var array6=new Array();
var array7=new Array();var array8=new Array();
var array9=new Array();var array10=new Array();
var array11=new Array();var array12=new Array();
/*function removeAllChild()
{
    var div1 = document.getElementById("time1");
    var div2 = document.getElementById("time2");
    var div3 = document.getElementById("result1");
    //var div4 = document.getElementById("result2");
    var div5 = document.getElementById("messShow1");
    var div6 = document.getElementById("messShow2");
    while(div1.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div1.removeChild(div1.firstChild);
    }
    while(div2.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div2.removeChild(div2.firstChild);
    }
    while(div3.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div3.removeChild(div3.firstChild);
    }
    while(div5.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div5.removeChild(div5.firstChild);
    }
    while(div6.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div6.removeChild(div6.firstChild);
    }
}*/
function  useAll() {
    var pid=$("#nameSelect").find("option:selected").val();
    var time=$("#timeSelect").find("option:selected").val();
    //首先获取数据
    $.ajax({
        type: 'post',
        url: "data.json",  //请求用户的后台地址
        dataType: 'json',
        async: false,
        data:{
            userId:pid,
            time:time//把用户的id和时间id传给后台，后台查询相应的对应的数据
        },//把当前页数传给后台，后台根据页数返回哪些数据
        success: function (msg) {
           /* var str_jsonData=JSON.stringify(msg);
            console.log(typeof (str_jsonData));
            localStorage.setItem('localData',str_jsonData);
            var getLocalData=localStorage.getItem('localData');//read
            var jsonObj=JSON.parse(getLocalData);*/
            // removeAllChild();
            // $("#time1").append(time.substring(0,4)+"年"+time.substring(4,6)+"月"+time.substring(6,8)+"日   "+time.substring(8,10)+":"+time.substring(10,12)+":"+time.substring(12,14));
            // $("#time2").append(time.substring(0,4)+"年"+time.substring(4,6)+"月"+time.substring(6,8)+"日   "+time.substring(8,10)+":"+time.substring(10,12)+":"+time.substring(12,14));
            //获取数据放置在数组,加快存储速度
            //I线
            for(var i=0;;i++){
                if(typeof(msg.lines[0][i+1])=="undefined"){
                    break;
                }
                array1[i]=msg.lines[0][i];
            }
            //II线
            for(var i=0;;i++){
                if(typeof(msg.lines[1][i+1])=="undefined"){
                    break;
                }
                array2[i]=msg.lines[1][i];
            }
            //III线
            for(var i=0;;i++){
                if(typeof(array2[i])=="undefined"||typeof(array1[i])=="undefined"){
                    break;
                }
                array3[i]=array2[i]-array1[i]+3;
            }
            //aVR
            for(var i=0;;i++){
                if(typeof(array2[i])=="undefined"||typeof(array1[i])=="undefined"){
                    break;
                }
                array4[i]=-(array2[i]+array1[i])/2+6;
            }
            //aVL
            for(var i=0;;i++){
                if(typeof(array1[i])=="undefined"||typeof(array3[i])=="undefined"){
                    break;
                }
                array5[i]=(array1[i]-array3[i])/2+3;
            }
            //aVF
            for(var i=0;;i++){
                if(typeof(array2[i])=="undefined"||typeof(array3[i])=="undefined"){
                    break;
                }
                array6[i]=(array2[i]+array3[i])/2;
            }
            //V1
            for(var i=0;;i++){
                if(typeof(msg.lines[2][i+1])=="undefined"){
                    break;
                }
                array7[i]=msg.lines[2][i];
            }
            //V2
            for(var i=0;;i++){
                if(typeof(msg.lines[3][i+1])=="undefined"){
                    break;
                }
                array8[i]=msg.lines[3][i];
            }
            //V3
            for(var i=0;;i++){
                if(typeof(msg.lines[4][i+1])=="undefined"){
                    break;
                }
                array9[i]=msg.lines[4][i];
            }
            //V4
            for(var i=0;;i++){
                if(typeof(msg.lines[5][i+1])=="undefined"){
                    break;
                }
                array10[i]=msg.lines[5][i];
            }
            //V5
            for(var i=0;;i++){
                if(typeof(msg.lines[6][i+1])=="undefined"){
                    break;
                }
                array11[i]=msg.lines[6][i];
            }
            //V6
            for(var i=0;;i++){
                if(typeof(msg.lines[7][i+1])=="undefined"){
                    break;
                }
                array12[i]=msg.lines[7][i];
            }
            //find index
            var str = msg.decription;
            str.replace("检查结论","<b>检查结论</b>");
            /*---以表格的形式展现--*/
            var strArray = new Array();
            for(var i=0; i<str.length;i++){
                if(str.charAt(i)=="\n"){
                    strArray.push(i);
                }
            }
            var text=str.substring(0,strArray[0]);
            $("#messShow1").append("<tr><td>"+text+"</td><td>"+str.substring(strArray[0],strArray[1])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[1],strArray[2])+"</td><td>"+str.substring(strArray[2],strArray[3])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[3],strArray[4])+"</td><td>"+str.substring(strArray[4],strArray[5])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[5],strArray[6])+"</td><td>"+str.substring(strArray[6],strArray[7])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[7],strArray[8])+"</td><td>"+str.substring(strArray[8],strArray[9])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[9],strArray[10])+"</td><td>"+str.substring(strArray[10],strArray[11])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[11],strArray[12])+"</td><td></td></tr>"
            );
            $("#messShow2").append("<tr><td>"+text+"</td><td>"+str.substring(strArray[0],strArray[1])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[1],strArray[2])+"</td><td>"+str.substring(strArray[2],strArray[3])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[3],strArray[4])+"</td><td>"+str.substring(strArray[4],strArray[5])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[5],strArray[6])+"</td><td>"+str.substring(strArray[6],strArray[7])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[7],strArray[8])+"</td><td>"+str.substring(strArray[8],strArray[9])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[9],strArray[10])+"</td><td>"+str.substring(strArray[10],strArray[11])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[11],strArray[12])+"</td><td></td></tr>"
            );
        }
    })
    //显示页面
    $('#dynamic').css("display","");
    $('#static').css("display","");
    pageDate();
    chartDraw(1);
    dynamicDraw();
    setInterval(getData,100);
    }
    function pageDate(){
        //while page is first page
        var pid=$("#firstSelect").find("option:selected").val();
        var time=$("#secondSelect").find("option:selected").val();
        var currentPage=1;
        var options={
            currentPage:currentPage,   //当前页
            totalPages:5,     //总页数
            numberofPages: 5,   //显示的页数
            bootstrapMajorVersion: 3, //兼容Bootstrap3.x版本
            onPageClicked: function (event, originalEvent, type, page) {
                // 当点击分页时,页面重新获取当时的页数的数据
                chartDraw(page);
            },
            itemContainerClass:function (type,page,current) {
                $.ajax({
                    type: 'post',
                    url: "",  //upload interface
                    dataType: 'json',
                    async: false,
                    data:{//transmit page to interface,click page
                       current:current,
                        pid:pid,
                        time:time
                    }
                })
            }
        }
        $('#paginator-static').bootstrapPaginator(options);
        //分页:首先先加载页面，当点击页面时，根据当前页面请求后台，重新加载数据，重绘图像
    }
    /*-----动态画图----*/
    function dynamicDraw(){
        sdataArray1 =array1; sdataArray2 =array2;
        sdataArray3 =array3; sdataArray4 =array4;
        sdataArray5 =array5; sdataArray6 =array6;
        sdataArray7 =array7; sdataArray8 =array8;
        sdataArray9 =array9; sdataArray10 =array10;
        sdataArray11 =array11; sdataArray12 =array12;
        console.log(array1);
        schart1 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer1',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                tickWidth: 0,
                tickPixelInterval: 1,
                // tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data:(function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: sdataArray1[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart2 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer2',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: sdataArray2[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart3 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer3',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: sdataArray3[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart4 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer4',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: sdataArray4[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart5 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer5',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: sdataArray5[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart6 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer6',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: sdataArray6[i+300]
                        });
                    }
                    return data;
                }()),
                zoneAxis: 'x',
                zones: [{
                    value:0,
                    color: 'black'
                },{
                    value:10,
                    color: '#FCEDEE'
                },{
                    value: 250,
                    color: 'black'
                },{
                    value: 260,
                    color: '#FCEDEE'
                }]
            }]
        });
        schart7 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer7',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: array7[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart8 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer8',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: array8[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart9 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer9',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: array9[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schartX = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer10',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: array10[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart11 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer11',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: array11[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
        schart12 = new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'scontainer12',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                plotBackgroundImage: 'images/bg.png'
            },
            credits:{enabled: false},//右下角的文本
            title: {text: ''},
            xAxis: {
                type: 'lines',
                tickPixelInterval: 1,
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an sdataArray
                    var data = [], i;
                    //first time show 300 point
                    for (i = -300; i <= 0; i += 1) {
                        data.push({
                            x: i,
                            y: array1[i+300]
                        });
                    }
                    return data;
                }())
            }]
        });
    }
    /*-------动态添加点--------*/
    function getData() {
        for(var j=0;j<30;j++){
            var x = (k++), //现在time
                y1 =sdataArray1[count],
                y2 =sdataArray2[count],
                y3 =sdataArray3[count],
                y4 =sdataArray4[count],
                y5 =sdataArray5[count],
                y6 =sdataArray6[count],
                y7 =sdataArray7[count],
                y8 =sdataArray8[count],
                y9 =sdataArray9[count],
                yX =sdataArray10[count],
                y11 =sdataArray11[count],
                y12 =sdataArray12[count];
            if(j==29){
                schart1.series[0].addPoint([x,y1], true,true,true);
                schart2.series[0].addPoint([x,y2],true,true,true);
                schart3.series[0].addPoint([x,y3],true,true,true);
                schart4.series[0].addPoint([x,y4],true,true,true);
                schart5.series[0].addPoint([x,y5],true,true,true);
                schart6.series[0].addPoint([x,y6],true,true,true);
                schart7.series[0].addPoint([x,y7],true,true,true);
                schart8.series[0].addPoint([x,y8],true,true,true);
                schart9.series[0].addPoint([x,y9],true,true,true);
                schartX.series[0].addPoint([x,yX],true,true,true);
                schart11.series[0].addPoint([x,y11],true,true,true);
                schart12.series[0].addPoint([x,y12],true,true,true);
            }else{
                schart1.series[0].addPoint([x,y1],false, true,true);
                schart2.series[0].addPoint([x,y2],false,true,true);
                schart3.series[0].addPoint([x,y3],false,true,true);
                schart4.series[0].addPoint([x,y4],false,true,true);
                schart5.series[0].addPoint([x,y5],false,true,true);
                schart6.series[0].addPoint([x,y6],false,true,true);
                schart7.series[0].addPoint([x,y7],false,true,true);
                schart8.series[0].addPoint([x,y8],false,true,true);
                schart9.series[0].addPoint([x,y9],false,true,true);
                schartX.series[0].addPoint([x,yX],false,true,true);
                schart11.series[0].addPoint([x,y11],false,true,true);
                schart12.series[0].addPoint([x,y12],false,true,true);
            }
            count=(count+1)%(array1.length);
        }
        schart1.series[0].redraw();
        schart2.series[0].redraw();
        schart3.series[0].redraw();
        schart4.series[0].redraw();
        schart5.series[0].redraw();
        schart6.series[0].redraw();
        schart7.series[0].redraw();
        schart8.series[0].redraw();
        schart9.series[0].redraw();
        schartX.series[0].redraw();
        schart11.series[0].redraw();
        schart12.series[0].redraw();
    }
    /*-----静态画图----*/
    function chartDraw(page) {
        var start = (page-1)*300;
        var end = page*300;
        dataArray1 = array1.slice(start, end);
        dataArray2 = array2.slice(start, end);
        dataArray3 = array3.slice(start, end);
        dataArray4 = array4.slice(start, end);
        dataArray5 = array5.slice(start, end);
        dataArray6 = array6.slice(start, end);
        dataArray7 = array7.slice(start, end);
        dataArray8 = array8.slice(start, end);
        dataArray9 = array9.slice(start, end);
        dataArray10= array10.slice(start, end);
        dataArray11= array11.slice(start, end);
        dataArray12= array12.slice(start, end);
        /*-------填充数据---------*/
        chart1 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer1',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                tickColor: 'rgb(0,0,0,0)',
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray1
            }]
        });
        chart2 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer2',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray2,
            }]
        });
        chart3 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer3',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray3,
            }]
        });
        chart4 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer4',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray4,
            }]
        });
        chart5 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer5',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray5,
            }]
        });
        chart6 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer6',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray6,
            }]
        });
        chart7 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer7',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray7,
            }]
        });
        chart8 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer8',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray8,
            }]
        });
        chart9 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer9',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray9,
            }]
        });
        chart10 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer10',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray10,
            }]
        });
        chart11 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer11',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray11,
            }]
        });
        chart12 = new Highcharts.Chart({
            chart: {
                renderTo: 'dcontainer12',
                type: 'line',
                marginRight: 0,
                marginBottom: 0,
                plotBackgroundImage: 'images/bg.png',
            },
            credits:{enabled: false,},//右下角的文本
            plotOptions:{
                line: {
                    dataLabels: {
                        enabled: false,
                        rotation:0
                    },
                    enableMouseTracking: false,
                    animation:true,
                    cursor:'pointer',
                    enableMouseTracking:false,
                },
                series: {
                    color:"green",
                    lineWidth:"0.5px",
                    marker:{
                        enabled:false,//是否显示点
                        states:{
                            hover:{enabled:false,},//鼠标放上去点是否放大
                            select:{enabled:false,}//控制鼠标选中点时候的状态
                        }
                    },
                },
            },
            exporting: {enabled:false},
            title: {text: ''},
            subtitle: {text: ''},
            xAxis:{
                tickInterval: 1,  //自定义刻度
                max:300,//横轴的最大值
                min: 0,//横轴的最小值
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false}
            },
            yAxis:{
                tickInterval: 1,  //自定义刻度
                max:6,//纵轴的最大值
                min: 0,//纵轴的最小值
                title: {text: ''/*//纵轴标题  */},
                gridLineColor: '#E2BAC3',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                minTickInterval: 'auto',
                minorTickInterval: 'auto',
                minorGridLineColor: '#ECD7DC',
                labels: {enabled: false},
            },
            tooltip: {//鼠标移到图形上时显示的提示框
                style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
            },
            legend: {//图例
                enabled: false,
            },
            series: [{//以下为纵轴数据
                name: '',
                data:dataArray12,
            }]
        });
    }
