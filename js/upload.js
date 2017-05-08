/**
 * Created by BanTing on 2017/2/21.
 */
/*read file and upload file*/
var upFiles='';
function selectFiles(file){
    if(!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function(evt){
        upFiles = evt.target.result;//read file and use html5 save files
    }
    reader.readAsDataURL(file.files[0]);
}
function uploadFiles(){
    var verName=$('#ver_name').val();
    var verCode=$('#ver_code').val();
    var file=document.getElementById('up_files');
    /*---新增---*/
    var formData=new FormData();
    formData.append('versionName',verName);
    formData.append('versionCode',verCode);
    formData.append('apk',file.files[0],file.files[0].name);
    if(verName=='' || verCode==''){
        return;
    }else {
        $.ajax({
            type:'POST',
            url: 'ajax/uploadFiles',
            data:formData,
           /* data: {
                verName:verName,
                verCode:verCode,
                upFiles:upFiles
            },*/
            async: false,
            dataType: 'json',
            success: function(data){
                if(data.success){
                    alert('上传成功');
                }else{
                    alert('上传失败');
                }
            }
        })
    }
    document.getElementById("form_id").submit();
}