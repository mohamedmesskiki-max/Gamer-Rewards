function openModal(game, emoji) {
    document.getElementById('gameName').innerText = game;
    document.getElementById('gameEmoji').innerText = emoji;
    document.getElementById('cpaModal').style.display = 'block';
    document.getElementById('loading-area').style.display = 'none';
    document.querySelector('.btn-verify').style.display = 'block';
}

function startVerification() {
    const btn = document.querySelector('.btn-verify');
    const loadingArea = document.getElementById('loading-area');
    const fill = document.querySelector('.progress-fill');
    
    btn.style.display = 'none';
    loadingArea.style.display = 'block';
    
    setTimeout(() => { fill.style.width = '100%'; }, 100);

    setTimeout(() => {
        // REPLACE THE LINK BELOW WITH YOUR CPA OFFER LINK
        window.location.href = "https://playfrost.online/cl/i/1xx3lx";
    }, 2800);
}

window.onclick = function(event) {
    if (event.target == document.getElementById('cpaModal')) {
        document.getElementById('cpaModal').style.display = "none";
    }
}

// Random user counter for social proof
setInterval(() => {
    let count = Math.floor(Math.random() * (180 - 120) + 120);
    document.getElementById('online-count').innerText = count;
}, 4000);


