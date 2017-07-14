function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
function show5(){
if (!document.layers&&!document.all&&!document.getElementById)return
var Digital=new Date()
var data=new Date()
var datab=data.toDateString()
var dia=data.getDate()
var dia2=data.getDay()
var month=data.getMonth()
var ano=data.getFullYear()
var month2
if (month==0){month2="Janeiro";};if (month==1){month2="Fevereiro";};if (month==2){month2="Março";};if (month==3){month2="Abril";};if (month==4){month2="Maio";};if (month==5){month2="Junho";};if (month==6){month2="Julho";};if (month==7){month2="Agosto";};if (month==8){month2="Setembro";};if (month==9){month2="Outubro";};if (month==10){month2="Novembro";};if (month==11){month2="Dezembro";};
if (dia2==1){dia2="Segunda Feira"};if (dia2==2){dia2="Terca Feira"};if (dia2==3){dia2="Quarta Feira"};if (dia2==4){dia2="Quinta Feira"};if (dia2==5){dia2="Sexta Feira"};if (dia2==6){dia2="Sabado"};if (dia2==0){dia2="Domingo"};
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var seconds=Digital.getSeconds()
var dn="AM"
if (hours>12){dn="PM";hours=hours-12;};if (hours==0)hours=12;if (minutes<=9)minutes="0"+minutes;if (seconds<=9)seconds="0"+seconds;
myclock="<font color=white> "+dia2+" "+dia+" de "+month2+" de "+ano+" e são "+hours+":"+minutes+":"+seconds+"("+dn+")"
if (document.layers){document.layers.liveclock.document.write(myclock);document.layers.liveclock.document.close();}
else if (document.all)
liveclock.innerHTML=myclock
else if (document.getElementById)
document.getElementById("liveclock").innerHTML=myclock
setTimeout("show5()",1000)
 }
 var msg = Math.floor(Math.random() * 3) + 0;;
var msgs = Array("Bem Vindo á Página do Márcio Carvalho sobre o Modulo de Animação 3D", "Projetos disponiveis", "Para entrar em contato comigo é só clicar no menu Contato");
var u = 1500;
var meve = null;
function startmovement() {
  u=1500;
  meve = setInterval(function(){ movement() }, 150);
}
function movement() {
   u-=15;
   var b = document.getElementById("novo");
   var h = msgs.length;
   if(msg==h)msg=0;
   b.innerHTML=msgs[msg];
   if(u<-750){
     u=1500;
     msg=Math.floor(Math.random() * 3) + 0;
   }
   b.style.left=u + "px";
}
var currentimg=1;
var total=6;
function nextimage() {
  clearInterval(puta);
  var x1 = document.getElementById('img1');
  var x2 = document.getElementById('img2');
  var x3 = document.getElementById('img3');
  var x4 = document.getElementById('img4');
  var x5 = document.getElementById('img5');
  var x6 = document.getElementById('img6');
  currentimg--;
  if(currentimg<1){currentimg=total;x1.style.top="0%";x2.style.top="0%";x3.style.top="0%";x4.style.top="0%";x5.style.top="0%";x6.style.top="0%";}
  if(currentimg==1){x1.style.top="0px";x2.style.top="0px";x3.style.top="0px";x4.style.top="0px";x5.style.top="0px";x6.style.top="0px";;projetoinfo(1);}
  if(currentimg==2){x1.style.top="-101.5%";x2.style.top="-101.5%";x3.style.top="-101.5%";x4.style.top="-101.5%";x5.style.top="-101.5%";x6.style.top="-101.5%";projetoinfo(2);}
  if(currentimg==3){x1.style.top="-200%";x2.style.top="-200%";x3.style.top="-202.5%";x4.style.top="-200";x5.style.top="-200%";x6.style.top="-200%";projetoinfo(3);}
  if(currentimg==4){x1.style.top="-303.8%";x2.style.top="-303.8%";x3.style.top="-303.8%";x4.style.top="-303.8%";x5.style.top="-303.8%";x6.style.top="-303.8%";projetoinfo(4);}
  if(currentimg==5){x1.style.top="-405%";x2.style.top="-405%";x3.style.top="-405%";x4.style.top="-405%";x5.style.top="-405%";x6.style.top="-405%";projetoinfo(5);}
  if(currentimg==6){x1.style.top="-506%";x2.style.top="-506%";x3.style.top="-506%";x4.style.top="-506%";x5.style.top="-506.2%";x6.style.top="-506%";projetoinfo(6);}
  puta = setTimeout("autochange()",9000)
  if(currentimg==6){ var xx = document.getElementById('showb3'); xx.style.opacity=1; }
  else { var xx = document.getElementById('showb3'); xx.style.opacity=0; }
}
function innextimage() {
  clearInterval(puta);
  var x1 = document.getElementById('img1');
  var x2 = document.getElementById('img2');
  var x3 = document.getElementById('img3');
  var x4 = document.getElementById('img4');
  var x5 = document.getElementById('img5');
  var x6 = document.getElementById('img6');
  currentimg++;
  if(currentimg>total){currentimg=1;x1.style.top="0%";x2.style.top="0%";x3.style.top="0%";x4.style.top="0%";x5.style.top="0%";x6.style.top="0%"}
  if(currentimg==1){x1.style.top="0px";x2.style.top="0px";x3.style.top="0px";x4.style.top="0px";x5.style.top="0px";x6.style.top="0px";projetoinfo(1);}
  if(currentimg==2){x1.style.top="-101.5%";x2.style.top="-101.5%";x3.style.top="-101.5%";x4.style.top="-101.5%";x5.style.top="-101.5%";x6.style.top="-101.5%";projetoinfo(2);}
  if(currentimg==3){x1.style.top="-200%";x2.style.top="-200%";x3.style.top="-202.5%";x4.style.top="-200";x5.style.top="-200%";x6.style.top="-200%";projetoinfo(3);}
  if(currentimg==4){x1.style.top="-303.8%";x2.style.top="-303.8%";x3.style.top="-303.8%";x4.style.top="-303.8%";x5.style.top="-303.8%";x6.style.top="-303.8%";projetoinfo(4);}
  if(currentimg==5){x1.style.top="-405%";x2.style.top="-405%";x3.style.top="-405%";x4.style.top="-405%";x5.style.top="-405%";x6.style.top="-405%";projetoinfo(5);}
  if(currentimg==6){x1.style.top="-506%";x2.style.top="-506%";x3.style.top="-506%";x4.style.top="-506%";x5.style.top="-506.2%";x6.style.top="-506%";projetoinfo(6);}
  puta = setTimeout("autochange()",9000)
  if(currentimg==6){ var xx = document.getElementById('showb3'); xx.style.opacity=1; }
  else { var xx = document.getElementById('showb3'); xx.style.opacity=0; }
}
var puta
function startchange() {
  puta = setTimeout("autochange()",9000)
}
function autochange() {
  innextimage()
}
function projetoinfo(b){
  if(b==1){document.getElementById('pp').innerHTML="Este foi um dos primeiros exercicios que era de fazer o simbolo dos jogos olimpicos"}
  if(b==2){document.getElementById('pp').innerHTML="Este foi um dos exercicios que era de fazer a palavra Arrabida"}
  if(b==3){document.getElementById('pp').innerHTML="Este exercicio era de criar um Móvel esta imagem mosta em 2D"}
  if(b==4){document.getElementById('pp').innerHTML="Este exercicio era de criar um Móvel esta imagem mosta em 3D"}
  if(b==5){document.getElementById('pp').innerHTML="Esta imagem mosta a minha primeira tentativa de criar a porta e uma das paredes da sala de Aulas 257 do IEFP"}
  if(b==6){document.getElementById('pp').innerHTML="Este Projeto era o de criar a Sala de Aulas 257 do IEFP Setúbal"}
}
function showsala() { window.open("imgpopup.html", "Sala", "width=1000,height=600");}
function isclick() {
  var x = document.getElementById('isclick');
  alert(x);
  x.style.transform=rotate('180');
}
var spp = 0;
function showpp() {
  var i = document.getElementById('picin');
  if(spp==0) { i.style.opacity=1; spp=1; effect(); return}
}
function closepp() {
  var i = document.getElementById('picin');
  i.style.opacity="0";
  i.style.width="50px";
  i.style.height="50px";
  spp=0;
}
function effect() {
  if(spp==1) {
    var i = document.getElementById('picin');
    i.style.width="90%";
    i.style.height="800px";
  }
}
