/**
 * Created by BanTing on 2017/2/23.
 */
/*-----下载-------*/
var downChart1,downChart2,downChart3,downChart4,downChart5,downChart6,downChart7,downChart8,downChart9,downChart10,downChart11,downChart12;
var downloadArray1 = new Array();var downloadArray2 = new Array();
var downloadArray3 = new Array();var downloadArray4 = new Array();
var downloadArray5 = new Array();var downloadArray6 = new Array();
var downloadArray7 = new Array();var downloadArray8 = new Array();
var downloadArray9 = new Array();var downloadArray10 = new Array();
var downloadArray11 = new Array();var downloadArray12 = new Array();
$(document).ready(function () {
    /*-----import js file-------*/
   usePage();
});
function usePage() {
    //首先获取数据
    $.ajax({
        type: 'post',
        url: "data.json",  //请求用户的后台地址
        dataType: 'json',
        async: false,
        success: function (msg) {
            //获取数据放置在数组,加快存储速度
            //I线
            for(var i=0;;i++){
                if(typeof(msg.lines[0][i+1])=="undefined"){
                    break;
                }
                downloadArray1[i]=msg.lines[0][i];
            }
            //II线
            for(var i=0;;i++){
                if(typeof(msg.lines[1][i+1])=="undefined"){
                    break;
                }
                downloadArray2[i]=msg.lines[1][i];
            }
            //III线
            for(var i=0;;i++){
                if(typeof(downloadArray2[i])=="undefined"||typeof(downloadArray1[i])=="undefined"){
                    break;
                }
                downloadArray3[i]=downloadArray2[i]-downloadArray1[i]+3;
            }
            //aVR
            for(var i=0;;i++){
                if(typeof(downloadArray2[i])=="undefined"||typeof(downloadArray1[i])=="undefined"){
                    break;
                }
                downloadArray4[i]=-(downloadArray2[i]+downloadArray1[i])/2+6;
            }
            //aVL
            for(var i=0;;i++){
                if(typeof(downloadArray1[i])=="undefined"||typeof(downloadArray3[i])=="undefined"){
                    break;
                }
              downloadArray5[i]=(downloadArray1[i]-downloadArray3[i])/2+3;
            }
            //aVF
            for(var i=0;;i++){
                if(typeof(downloadArray2[i])=="undefined"||typeof(downloadArray3[i])=="undefined"){
                    break;
                }
                downloadArray6[i]=(downloadArray2[i]+downloadArray3[i])/2;
            }
            //V1
            for(var i=0;;i++){
                if(typeof(msg.lines[2][i+1])=="undefined"){
                    break;
                }
                downloadArray7[i]=msg.lines[2][i];
            }
            //V2
            for(var i=0;;i++){
                if(typeof(msg.lines[3][i+1])=="undefined"){
                    break;
                }
                downloadArray8[i]=msg.lines[3][i];
            }
            //V3
            for(var i=0;;i++){
                if(typeof(msg.lines[4][i+1])=="undefined"){
                    break;
                }
                downloadArray9[i]=msg.lines[4][i];
            }
            //V4
            for(var i=0;;i++){
                if(typeof(msg.lines[5][i+1])=="undefined"){
                    break;
                }
                downloadArray10[i]=msg.lines[5][i];
            }
            //V5
            for(var i=0;;i++){
                if(typeof(msg.lines[6][i+1])=="undefined"){
                    break;
                }
                downloadArray11[i]=msg.lines[6][i];
            }
            //V6
            for(var i=0;;i++){
                if(typeof(msg.lines[7][i+1])=="undefined"){
                    break;
                }
                downloadArray12[i]=msg.lines[7][i];
            }
            //find index
            var str = msg.decription;
            str.replace("检查结论","<b>检查结论</b>");
            /*---show message by using table--*/
            var strArray = new Array();
            for(var i=0; i<str.length;i++){
                if(str.charAt(i)=="\n"){
                    strArray.push(i);
                }
            }
            var title=str.substring(0,strArray[0]);
            $("#title").append(title);
            $("#inspectMess").append(
                "<tr><td>"+str.substring(strArray[0],strArray[1])+"</td><td>"+str.substring(strArray[1],strArray[2])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[2],strArray[3])+"</td><td>"+str.substring(strArray[3],strArray[4])+"</td></tr>" +
                "<tr><td>"+str.substring(strArray[4],strArray[5])+"</td><td>"+str.substring(strArray[5],strArray[6])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[6],strArray[7])+"</td><td>"+str.substring(strArray[7],strArray[8])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[8],strArray[9])+"</td><td>"+str.substring(strArray[9],strArray[10])+"</td></tr>"+
                "<tr><td>"+str.substring(strArray[10],strArray[11])+"</td><td>"+str.substring(strArray[11],strArray[12])+"</td></tr>"
            );
        }
    })
   uploadDraw();
}
function uploadDraw() {
    /*-------填充数据---------*/
    downChart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container1',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray1
        }]
    });
    downChart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'container2',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray2,
        }]
    });
    downChart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'container3',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray3,
        }]
    });
    downChart4 = new Highcharts.Chart({
        chart: {
            renderTo: 'container4',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray4,
        }]
    });
    downChart5 = new Highcharts.Chart({
        chart: {
            renderTo: 'container5',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray5,
        }]
    });
    downChart6 = new Highcharts.Chart({
        chart: {
            renderTo: 'container6',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray6,
        }]
    });
    downChart7 = new Highcharts.Chart({
        chart: {
            renderTo: 'container7',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray7,
        }]
    });
    downChart8 = new Highcharts.Chart({
        chart: {
            renderTo: 'container8',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray8,
        }]
    });
    downChart9 = new Highcharts.Chart({
        chart: {
            renderTo: 'container9',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray9,
        }]
    });
    downChart10 = new Highcharts.Chart({
        chart: {
            renderTo: 'container10',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray10,
        }]
    });
    downChart11 = new Highcharts.Chart({
        chart: {
            renderTo: 'container11',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray11,
        }]
    });
    downChart12 = new Highcharts.Chart({
        chart: {
            renderTo: 'container12',
            type: 'line',
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(0,0,0,0)'
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
                color:"black",
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
            data:downloadArray12,
        }]
    });
}