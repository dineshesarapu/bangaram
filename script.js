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
// ===== Menstrual Cycle Tracker =====

const lastPeriod = new Date("2026-05-31"); // Last period start date
const cycleLength = 28; // Change if her cycle is different

const today = new Date();

let nextPeriod = new Date(lastPeriod);

while (nextPeriod <= today) {
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
}

const diff = Math.ceil((nextPeriod - today) / (1000 * 60 * 60 * 24));

let status = "";

if (diff === 0) {
    status = "🌸 Expected to start today";
}
else if (diff > 0) {
    status = "🌸 Expected in " + diff + " day(s)";
}
else {
    status = "🌸 Period may be ongoing";
}

document.getElementById("cycleInfo").innerHTML =
`
<b>Last Period:</b> 31 May 2026<br><br>

<b>Next Expected:</b> ${nextPeriod.toDateString()}<br><br>

<b>Status:</b> ${status}
`;
