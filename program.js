var ip;	
document.addEventListener('plusready', function(){
        
    });
var httpRequest = new XMLHttpRequest();
 function setip(){
     ip = document.getElementById('ipaddress').value;
 }
    function getinfo(){
     var infojs = "http://"+ip+"/getinfo.js";
         var script = document.createElement('script');
         script.setAttribute('type','text/javascript');
         script.setAttribute('src',infojs);
         document.getElementsByTagName('head')[0].appendChild(script);
     alert(info);
 }
 function turnlight(){
     httpRequest.open('GET', 'http://'+ip+"/appopen"+lnum, true);
     httpRequest.send();
 }
 function offlight(){
     httpRequest.open('GET', 'http://'+ip+"/appclose"+lnum, true);
     httpRequest.send();
 }
 function bton(){
     httpRequest.open('GET', 'http://'+ip+"/bton", true);
     httpRequest.send();
     mdui.alert('蓝牙启动成功,请蓝牙连接MHM18', '蓝牙模块已启动');
 }
 function btoff(){
     httpRequest.open('GET', 'http://'+ip+"/btoff", true);
     httpRequest.send();
 }