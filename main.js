const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yes-btn');
const proposal = document.getElementById('proposal');
const letterPage = document.getElementById('letterPage');
const envelope = document.querySelector('.envelope');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

createHeartEffect();


yesBtn.addEventListener('click', () => {
    window.location.href = 'letter/index.html';
});



function createHeartEffect(duration = 5000, interval = 200) {
    const heartEmojis = ['💖', '💗', '💓', '💞', '💕'];

    const heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';

        document.body.appendChild(heart);


        setTimeout(() => heart.remove(), duration);
    }, interval);

    // Stop creating hearts after 'duration' milliseconds
    setTimeout(() => clearInterval(heartInterval), duration);
}


