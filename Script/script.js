const totalClicks = localStorage.getItem('totalClicks') || 0;
document.getElementById('totalClicks').innerText = totalClicks;

document.getElementById('clickButton').addEventListener('click', function() {
    let currentClicks = localStorage.getItem('totalClicks') || 0;
    currentClicks = parseInt(currentClicks, 10) + 1;

    localStorage.setItem('totalClicks', currentClicks);

    document.getElementById('totalClicks').innerText = currentClicks;

    this.innerText = `클릭 횟수: ${currentClicks}`;
});
