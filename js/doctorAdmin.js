/**
 * Created by BanTing on 2017/1/5.
 */
var chart1;
$(document).ready(function () {
        $.ajax({
            type:'post',
            url:"data.json",  //请求用户的后台地址
            dataType:'json',
            async:false,
            success:function (data) {
                /*----------------图表一----------------------*/
                var dataArray=new Array();
                var scorllLength=2000; //每次显示2000条数据
                var totolLength=data.lines[0].length; //总共多少条数据
                var avg=Math.ceil(totolLength/scorllLength); //总共显示几次数据(向上取整)
                chart1= new Highcharts.Chart({
                    chart: {
                        type: 'line',
                        renderTo: 'containerI',
                        events: {
                            load:function () {
                                var count=0;
                                var icount= setInterval(function () {
                                    var start = count*scorllLength;
                                    var end = (count+1)*scorllLength;
                                    if(count!=avg){
                                        count=count+1;
                                    }
                                    dataArray = data.lines[0].slice(start, end);
                                },1000);
                                console.log(count);
                            }
                        }
                    },
                    credits: {
                        text: '',
                        href: ''
                    },
                    exporting: {
                        enabled: false
                    },
                    title: {text: ''},
                    subtitle: {
                        text: ''
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        tickInterval: 1,  //自定义刻度
                        max:2000,//横轴的最大值
                        min: 0,//横轴的最小值
                        gridLineColor: '#E2BAC3',
                        gridLineWidth: 0,
                        minorGridLineWidth: 0,
                        minorTickInterval: 'auto',
                        minorGridLineColor: '#ECD7DC',
                        labels: {enabled: false}
                    },
                    yAxis: {
                        tickInterval: 1,  //自定义刻度
                        max:6,//纵轴的最大值
                        min: 0,//纵轴的最小值
                        title: {text: ''},
                        gridLineColor: '#E2BAC3',
                        gridLineWidth: 0,
                        minorGridLineWidth: 0,
                        minTickInterval: 'auto',
                        minorTickInterval: 'auto',
                        minorGridLineColor: '#ECD7DC',
                        labels: {enabled: false}
                    },
                    tooltip: {
                        style:{display:'none'} //通过样式表控制不显示tooltip数据提示框
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: false,//是否在点的旁边显示数据
                                rotation:0
                            },
                            enableMouseTracking: false,
                            animation:true,//是否在显示图表的时候使用动画
                            cursor:'pointer',//鼠标移到图表上时鼠标的样式
                            enableMouseTracking:false,//鼠标移到图表上时是否显示提示框
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
                        }
                    },
                    series: [{
                        name: '',
                        data:dataArray
                    }]
                })
            }
        })
})