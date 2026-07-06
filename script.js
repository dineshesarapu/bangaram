<script>

const start = new Date("2026-02-06");
const today = new Date();

const days = Math.floor((today-start)/(1000*60*60*24));

document.getElementById("days").innerHTML =
"❤️ Together since 6 February 2026 • <b>"+days+"</b> beautiful days ❤️";


// 🌸 Cycle Tracker
const lastPeriod = new Date("2026-05-31");
const cycleLength = 28; // Change this if her normal cycle is different

let nextPeriod = new Date(lastPeriod);

while (nextPeriod <= today) {
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
}

const daysLeft = Math.ceil((nextPeriod - today) / (1000 * 60 * 60 * 24));

document.getElementById("cycleInfo").innerHTML =
`
<b>🌸 Last Period:</b> 31 May 2026<br><br>
<b>📅 Next Expected:</b> ${nextPeriod.toDateString()}<br><br>
<b>⏳ Days Remaining:</b> ${daysLeft}
`;

</script>
