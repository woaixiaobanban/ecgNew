/**
 * Created by BanTing on 2017/1/4.
 */
$(document).ready(function () {
    /*----------显示pover----------------*/
    $("[data-toggle='popover']").popover();
    /*-------------病人列表分页--------------*/
    $('#paginator-doctor').bootstrapPaginator({
        currentPage:2,   //当前页
        totalPages: 10,     //总页数
        numberofPages: 5,//显示的页数
        bootstrapMajorVersion: 3,               //兼容Bootstrap3.x版本
        tooltipTitles: function (type, page) {
            switch (type) {
                case "first" :
                    return "第一页" ;
                case "prev" :
                    return "上一页" ;
                case "next" :
                    return "下一页" ;
                case "last" :
                    return "最后一页" ;
                case "page" :
                    return page;
            }
            return "" ;
        },
        onPageClicked: function (event, originalEvent, type, page) {
            $.get('/Home/GetPaginationData' ,
                { currentPage: page, pageSize:7});
        }
    });
    /*-------------医生列表分页-----------------*/
    $('#paginator-patient').bootstrapPaginator({
        currentPage: ${currentPage},   //当前页数，这里是用的EL表达式，获取从后台传过来的值
        totalPages: ${totalPages},  //总页数，这里是用的EL表达式，获取从后台传过来的值
        numberofPages: 5,   //每页页数
        bootstrapMajorVersion: 3,               //兼容Bootstrap3.x版本
        tooltipTitles: function (type, page) {
            switch (type) {
                case "first" :
                    return "第一页" ;
                case "prev" :
                    return "上一页" ;
                case "next" :
                    return "下一页" ;
                case "last" :
                    return "最后一页" ;
                case "page" :
                    return page;
            }
            return "" ;
        },
        onPageClicked: function (event, originalEvent, type, page) {
          window.location.href = "/self?event=toUserOperaLog&page=" + page;
        }
    });
    /*------点击确定时传用户绑定信息到后台-------*/
    $("button[name='confirmId']").click(function(){
        var selectDoc =$("select[name='selectID']").val();//选择的医生的id
        var patientID = $(this).attr('id');  //当前患者的ID
        if(confirm("确定该医生？")){
            $.ajax({
                type:'post',
                url:url,  //请求用户的后台地址
                dataType:'json',
                async:false,
                data:{
                    selectDoc:selectDoc,
                    patientID:patientID
                },
                success:function (data) {
                    if(data=="1"){
                        alert("操作成功！");
                        window.location.reload();//重新加载父页面
                        window.close();//close 弹出框
                    }else {
                        alert("失败！");
                    }
                },
                error:function (xhr,status,err) {
                    alert("系统异常，请稍后再试！")
                }
            })
        }
    });
    /*---------------弹出医生信息--------------*/
    function showDMess(id) {
        var lengthArray=new Array();
        $.ajax({
            type:"post",
            url:"doctor.action?id="+id,
            dataType:"json",
            success:function (msg) {
               lengthArray = msg.patient;
                $("#dName").text(msg.dName);
                $("#dSex").text(msg.dSex);
                $("#dAge").text(msg.dAge);
                $("#dDepart").text(msg.dDepart);
                for(var i=0;i<lengthArray.length;i++){
                    $("#bindPatient").append("<tr><td>msg.patient.name</td><td>" +
                        "<button class='btn btn-sm btn-warning' name='removeP' onclick='remove("+msg.patient.id+")' >移除</button></td></tr>")
                }
                $("#LinkDIVDoctor").modal();
            }
        })
    }
    function removeAllChild()
    {
        var div = document.getElementById("bindPatient");
        while(div.hasChildNodes()) //当div下还存在子节点时 循环继续
        {
            div.removeChild(div.firstChild);
        }
    }
    /*-------------点击移除移除病人-------------*/
   function remove(id){
        if(confirm("确定移除？")){
            $.ajax({
                type:'post',
                url:"patient.action?id="+id,    //请求用户的后台地址
                dataType:'json',
                async:false,
                data:{id:id}, //患者id
                success:function (msg) {
                    if(msg=="1"){
                        alert("操作成功！");
                        window.location.reload();//重新加载父页面
                        window.close();//close 弹出框
                    }else {
                        alert("失败！");
                    }
                },
                error:function (xhr,status,err) {
                    alert("系统异常，请稍后再试！")
                }
            })
        }
    }
})

