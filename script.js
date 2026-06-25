const PASSWORD='bangaram';
function unlock(){
 if(document.getElementById('pw').value!==PASSWORD){document.getElementById('msg').innerText='Wrong password';return;}
 document.getElementById('login').style.display='none';
 document.getElementById('app').style.display='block';
 const start=new Date('2026-02-06T00:00:00');
 const now=new Date();
 const days=Math.floor((now-start)/(1000*60*60*24));
 document.getElementById('days').innerText='Together since 6 Feb 2026 • '+days+' days';
}
