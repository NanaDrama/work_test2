function getKyivTime() {
    const options = {
        timeZone: 'Europe/Kyiv',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };
    formatter = new Intl.DateTimeFormat([], options);
    
    return formatter.format(new Date());
}
console.log(getKyivTime())
function getTimeSpan() {
    const [date, time] = getKyivTime().split(",");
    const [hour, minute, seconds] = time.split(":").map(el=>Number(el));
    if(hour===18) {
        if(minute<20) return 1
    }
    if(hour>=18&&hour<=20) return 2
    return 3
}

function reRenderPage() {
    const comments = document.querySelector(".form");
    const video = document.querySelector(".video");
    const banner = document.querySelector(".join");
    const text = document.querySelector(".results");

    const timeSpan = getTimeSpan()
    switch(timeSpan) {
        case 1:
            banner.style.display = "none";
            text.style.display = "none";
            break;
        case 2:
            break;
        case 3:
            video.style.pointerEvents = "none";
            banner.style.display = "none";
            text.style.display = "none";
    }
}

reRenderPage()