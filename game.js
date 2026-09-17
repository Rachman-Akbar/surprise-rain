// ==========================================
// KATEGORI & KONFIGURASI LEVEL GAME
// ==========================================
const CATEGORIES = {
    "Buah": {
        items: ['🍎', '🍌', '🍊', '🍉', '🍇', '🍓', '🍒', '🍑', '🍍', '🥥', '🥝', '🥭', '🍐', '🍏', '🍈', '🍋', '🫐', '🥑', '🍅', '🫒'],
        basketImage: 'images/buah.png',
        bgImages: [
            'https://img.pikbest.com/ai/illus_our/20230423/90d0c4fab45a67cc49915b522a1652b5.jpg!w700wp',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsne7rGz1IYJmkypkPep7Non7Q-ra-T-VfLktM5zSw6x4AHkVrr2PeXY&s=10',
            'https://www.kroniktoday.com/wp-content/uploads/2021/03/WALLPAPER-BUAH-BUAHAN-SEGAR-HD-KARTUNLUCU.COM_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaF8L-w4XYX2hEIzZsS--caQSM9kWZuwr0bhIsqEYdCQKGmGysCzXQJVk&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfeQPkBDwISuPladxDw4jEPpJqrqClWh0YOP-FLKlPFQFmwXwLTSgo_I&s=10',
        ]
    },
    "Pertukangan": {
        items: ['🔨', '🪛', '🪚', '🔧', '🧰', '🧱', '⚙️', '🗜️', '📐', '📏', '⛏️', '🪓', '🪜', '⛓️', '🧲', '🔌', '🔋', '💡', '🔦', '🛡️'],
        basketImage: 'images/pertukangan.png',
        bgImages: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp1uyI_iCtd6hD0daYUxAp6jAdyBry43piuQ2FIUgmTBNKNQ-JDonSjc&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_s34eck5TNImsSdqjLTKQ-5DocCz8I8DgmHe0YN_hX0UK-DnGfTPx8DQA&s=10',
            'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1600&auto=format&fit=crop&q=80',
            'https://img.pikbest.com/photo/20260128/woodworking-tools-on-a-wooden-workbench-with-carpentry-equipment-and-measuring-tape_15256506.jpg!f305cw',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgw4mCJjmxB7TpWZqoW9orX0263n4dcBpvy8rAXWYCwV3X4jv6ospqRU&s=10',
        ]
    },
    "Hewan": {
        items: ['🐱', '🐰', '🐶', '🐸', '🐼', '🦊', '🐯', '🦁', '🐵', '🐻', '🐨', '🐮', '🐷', '🐔', '🐧', '🦆', '🦉', '🐴', '🦄', '🐝'],
        basketImage: 'images/hewan.png',
        bgImages: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweLH_o1S_j4ZxEdsmGRN-X_s4V7zCIMsTufEsYs4Tu0V_vjH4orED-iQ&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAC3tUbhP69x_-pVEHtjlxbmWQimhiamfEHffDcR1ObA&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfy0PymeISCTDxs3jM3za62tVrqo1e63McUfRF2a2OtsikqOjaTVq6ADFX&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUI8tBNcF8lfsofDMpI-R0EdLHc_xvyWnkAU7GXCBK6q8ISNoIs1BAHfsP&s=10',
            'https://img.okezone.com/content/2024/06/29/549/3027704/harimau_di_kebun_binatang-42JS_large.JPG',
        ]
    },
    "Olahraga": {
        items: ['⚽', '🏀', '🎾', '🥊', '🏈', '⚾', '🥎', '🏐', '🏉', '🥏', '🏓', '🏸', '🏒', '🏑', '🥍', '🏹', '🎣', '🛼', '🛹', '🎳'],
        basketImage: 'images/olahraga.png',
        bgImages: [
            'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&auto=format&fit=crop&q=80',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyQ2jZxyirPWq89YlOiAbK2FL0ai_-CCL1gx5W8uPCp70Zqurjndq2dc&s=10',
            'https://st4.depositphotos.com/1005563/25370/i/450/depositphotos_253701974-stock-photo-sport-equipment-balls-background.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgw8kKdSFNyL4IDd2Z63jFYUdnzNsHW7_ztWidg4RPUtytFYy9uknb8Ac&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sOaaBOEJgd8UB8tdMHYB2RhSk-R8mZyRUmNNgQlx2IEKzoZZ8FH0ukjf&s=10',
        ]
    },
    "Perkantoran": {
        items: ['💻', '✒️', '✂️', '📂', '📑', '📊', '📈', '📌', '📎', '📏', '🖊️', '📝', '📁', '🖨️', '⌨️', '🖱️', '🖥️', '🧮', '🗑️', '🔒'],
        basketImage: 'images/perkantoran.png',
        bgImages: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=80',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6yS6Wvli-0jofe9_15gBJ4dC13d2INhpowbNAQU99XCWSx7Ns8UrAco&s=10',
            'https://img.magnific.com/foto-gratis/dekorasi-rumah-interior-dengan-bingkai-foto_23-2149514015.jpg?semt=ais_hybrid&w=740&q=80',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZS3V0P_CO3vaID7NfYWy507LvpTHiB2OQEtI1Q-1qMetzPPW3IHmOl8&s=10',
        ]
    }
};


// ==========================================
// KONFIGURASI LEVEL GAME
// ==========================================
const LEVEL_CONFIG = {
    1: { variantsCount: 2, speed: 1.5, totalItems: 50, spawnInterval: 1600 },
    2: { variantsCount: 3, speed: 1.5, totalItems: 60, spawnInterval: 1500 },
    3: { variantsCount: 3, speed: 2.5, totalItems: 70, spawnInterval: 1300 },
    4: { variantsCount: 4, speed: 2.5, totalItems: 80, spawnInterval: 1200 },
    5: { variantsCount: 4, speed: 3.5, totalItems: 90, spawnInterval: 1000 },
    6: { variantsCount: 5, speed: 3.5, totalItems: 100, spawnInterval: 950 },
    7: { variantsCount: 5, speed: 3.5, totalItems: 110, spawnInterval: 900 },
    8: { variantsCount: 5, speed: 3.5, totalItems: 120, spawnInterval: 850 }
};

const urlParams = new URLSearchParams(window.location.search);
let currentLevel = parseInt(urlParams.get('level')) || 1;

let containerWidth = window.innerWidth;
let containerHeight = window.innerHeight;

let currentLevelScore = 0;   // Skor yang didapatkan di level berjalan
let previousTotalScore = 0;  // Akumulasi skor dari level-level sebelumnya
let comboCount = 0;
let spawnedItemsCount = 0;
let maxLevelItems = 20;
let isGameRunning = false;
let animationFrameId = null;

let activeCategoryNames = [];
let targetCategoryName = "";
let fallingItems = [];
let lastSpawnTime = 0;
let activeBgLayer = 1;

const playerSpeed = 12;
const playerWidth = 70;  
const playerHeight = 70; 
let playerX = (containerWidth - playerWidth) / 2;
let keys = { left: false, right: false };

// Mengambil total skor akumulasi dari Level 1 sampai sebelum level aktif
function getPreviousTotalScore(lvl) {
    let savedScores = JSON.parse(localStorage.getItem('levelScores')) || {};
    let sum = 0;
    for (let i = 1; i < lvl; i++) {
        sum += (savedScores[i] || 0);
    }
    return sum;
}

// Mengambil akumulasi target poin kelulusan berdasarkan total item dari Level 1 - level aktif
function getCumulativeTargetScore(lvl) {
    let sum = 0;
    for (let i = 1; i <= lvl; i++) {
        const config = LEVEL_CONFIG[i] || LEVEL_CONFIG[8];
        sum += config.totalItems;
    }
    return sum;
}

// ==========================================
// SYSTEM AUDIO SYNTHESIZER
// ==========================================
let audioCtx = null;
let isMuted = false;
let bgmInterval = null;
let bgmStep = 0;

const SVG_VOLUME_ON = `<svg class="hud-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
const SVG_VOLUME_OFF = `<svg class="hud-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;

const BGM_MELODY = [
    261.63, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 392.00,
    293.66, 349.23, 440.00, 587.33, 493.88, 440.00, 349.23, 440.00,
    329.63, 392.00, 493.88, 659.25, 523.25, 493.88, 392.00, 493.88,
    349.23, 440.00, 523.25, 698.46, 659.25, 587.33, 523.25, 392.00
];

function initAudio() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

const unlockAudio = () => {
    initAudio();
    if (audioCtx && audioCtx.state === 'running') {
        if (isGameRunning && !isMuted && !bgmInterval) {
            startBGM();
        }
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
        window.removeEventListener('mousemove', unlockAudio);
    }
};

window.addEventListener('click', unlockAudio);
window.addEventListener('touchstart', unlockAudio);
window.addEventListener('keydown', unlockAudio);
window.addEventListener('mousemove', unlockAudio);

function startBGM() {
    initAudio();
    if (bgmInterval || isMuted) return;
    bgmStep = 0;
    bgmInterval = setInterval(() => {
        if (isMuted || !isGameRunning || !audioCtx || audioCtx.state !== 'running') return;
        
        const now = audioCtx.currentTime;
        const noteFreq = BGM_MELODY[bgmStep % BGM_MELODY.length];
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(noteFreq, now);
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.16);

        bgmStep++;
    }, 180);
}

function stopBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
}

function playSFX(type) {
    if (isMuted) return;
    initAudio();
    if (!audioCtx || audioCtx.state !== 'running') return;

    const now = audioCtx.currentTime;

    if (type === 'catch') {
        const baseFreq = 523.25; 
        const comboPitchMultiplier = 1 + Math.min(comboCount * 0.08, 0.8);
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * comboPitchMultiplier, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5 * comboPitchMultiplier, now + 0.12);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        osc.start(now);
        osc.stop(now + 0.12);
    } 
    else if (type === 'combo') {
        const notes = [587.33, 739.99, 880.00, 1174.66];
        notes.forEach((f, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now + i * 0.06);
            gain.gain.setValueAtTime(0.35, now + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.15);

            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.15);
        });
    }
    else if (type === 'wrong') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(70, now + 0.2);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.start(now);
        osc.stop(now + 0.2);
    } 
    else if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.exponentialRampToValueAtTime(350, now + 0.05);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.start(now);
        osc.stop(now + 0.05);
    }
    else if (type === 'win') {
        const winNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        winNotes.forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.08);
            gain.gain.setValueAtTime(0.4, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);

            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.25);
        });
    }
}

function toggleSound() {
    initAudio();
    isMuted = !isMuted;
    const soundBtn = document.getElementById('btn-sound');

    if (isMuted) {
        stopBGM();
        if (soundBtn) {
            soundBtn.innerHTML = SVG_VOLUME_OFF;
            soundBtn.classList.add('muted');
        }
    } else {
        if (soundBtn) {
            soundBtn.innerHTML = SVG_VOLUME_ON;
            soundBtn.classList.remove('muted');
        }
        playSFX('click');
        if (isGameRunning) {
            startBGM();
        }
    }
}

function showComboText(x, y, text) {
    const comboEl = document.createElement('div');
    comboEl.className = 'combo-popup';
    comboEl.innerText = text;
    comboEl.style.left = `${x}px`;
    comboEl.style.top = `${y}px`;
    gameArea.appendChild(comboEl);

    setTimeout(() => {
        if (comboEl.parentNode) comboEl.parentNode.removeChild(comboEl);
    }, 800);
}

// ==========================================
// ELEMENT DOM & EVENT HANDLERS
// ==========================================
const gameArea = document.getElementById('game-area');
const playerEl = document.getElementById('player');
const playerAvatarEl = document.getElementById('player-avatar');
const playerLabelEl = document.getElementById('player-label');

const levelTxt = document.getElementById('level-txt');
const scoreTxt = document.getElementById('score-txt');
const totalScoreTxt = document.getElementById('total-score-txt');
const levelModal = document.getElementById('level-modal');
const nextLevelBtn = document.getElementById('next-level-btn');
const damageOverlay = document.getElementById('damage-overlay');

window.addEventListener('resize', () => {
    containerWidth = window.innerWidth;
    containerHeight = window.innerHeight;
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
});

gameArea.addEventListener('mousemove', (e) => {
    if (!isGameRunning) return;
    playerX = e.clientX - (playerWidth / 2);
    if (playerX < 0) playerX = 0;
    if (playerX > containerWidth - playerWidth) playerX = containerWidth - playerWidth;
    playerEl.style.left = `${playerX}px`;
});

function startLevel() {
    currentLevelScore = 0;
    previousTotalScore = getPreviousTotalScore(currentLevel);
    comboCount = 0;
    spawnedItemsCount = 0;
    
    const config = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG[8];
    maxLevelItems = config.totalItems;

    clearFallingItems();

    const allCatKeys = Object.keys(CATEGORIES);
    const shuffled = [...allCatKeys].sort(() => 0.5 - Math.random());
    activeCategoryNames = shuffled.slice(0, config.variantsCount);

    changeTargetCategory();

    playerX = (containerWidth - playerWidth) / 2;
    playerEl.style.left = `${playerX}px`;

    isGameRunning = true;
    startBGM();

    lastSpawnTime = performance.now();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameLoop();
}

function changeTargetCategory() {
    targetCategoryName = activeCategoryNames[Math.floor(Math.random() * activeCategoryNames.length)];
    const catData = CATEGORIES[targetCategoryName];
    
    playerAvatarEl.style.backgroundImage = `url('${catData.basketImage}')`;
    playerLabelEl.innerText = targetCategoryName;
    
    const randomBg = catData.bgImages[Math.floor(Math.random() * catData.bgImages.length)];
    
    const bg1 = document.getElementById('game-bg-1');
    const bg2 = document.getElementById('game-bg-2');
    
    if (bg1 && bg2) {
        if (activeBgLayer === 1) {
            bg2.style.backgroundImage = `url('${randomBg}')`;
            bg2.classList.add('active');
            bg1.classList.remove('active');
            activeBgLayer = 2;
        } else {
            bg1.style.backgroundImage = `url('${randomBg}')`;
            bg1.classList.add('active');
            bg2.classList.remove('active');
            activeBgLayer = 1;
        }
    }

    updateHUD();
}

function updateHUD() {
    const totalScoreNow = previousTotalScore + currentLevelScore;

    if (levelTxt) levelTxt.innerText = currentLevel;
    if (scoreTxt) scoreTxt.innerText = currentLevelScore;        // Skor khusus di level berjalan
    if (totalScoreTxt) totalScoreTxt.innerText = totalScoreNow; // Akumulasi total skor user
}

function triggerDamageEffect() {
    damageOverlay.classList.add('active');
    setTimeout(() => {
        damageOverlay.classList.remove('active');
    }, 250);
}

function gameLoop() {
    if (!isGameRunning) return;

    const config = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG[8];

    if (keys.left) playerX = Math.max(0, playerX - playerSpeed);
    if (keys.right) playerX = Math.min(containerWidth - playerWidth, playerX + playerSpeed);
    playerEl.style.left = `${playerX}px`;

    const now = performance.now();
    if (spawnedItemsCount < maxLevelItems && now - lastSpawnTime > config.spawnInterval) {
        spawnItem();
        spawnedItemsCount++;
        lastSpawnTime = now;
    }

    moveAndCheckItems(config.speed);

    if (isGameRunning) {
        animationFrameId = requestAnimationFrame(gameLoop);
    }
}

function spawnItem() {
    const randomCatName = activeCategoryNames[Math.floor(Math.random() * activeCategoryNames.length)];
    const catData = CATEGORIES[randomCatName];
    const randomEmoji = catData.items[Math.floor(Math.random() * catData.items.length)];

    const itemEl = document.createElement('div');
    itemEl.className = 'item';
    itemEl.innerText = randomEmoji;

    const xPos = Math.floor(Math.random() * (containerWidth - 45));
    let yPos = -45;

    itemEl.style.left = `${xPos}px`;
    itemEl.style.top = `${yPos}px`;

    gameArea.appendChild(itemEl);

    fallingItems.push({
        element: itemEl,
        category: randomCatName,
        x: xPos,
        y: yPos,
        width: 45,
        height: 45
    });
}

function moveAndCheckItems(speed) {
    const playerY = containerHeight - playerHeight - 30;

    for (let i = fallingItems.length - 1; i >= 0; i--) {
        let item = fallingItems[i];
        item.y += speed * 2;
        item.element.style.top = `${item.y}px`;

        // Tangkapan Berhasil / Salah
        if (
            item.y + item.height >= playerY &&
            item.y <= playerY + playerHeight &&
            item.x + item.width >= playerX &&
            item.x <= playerX + playerWidth
        ) {
            if (item.category === targetCategoryName) {
                currentLevelScore += 5; // +5 Poin level
                comboCount++;
                
                playSFX('catch');
                showComboText(item.x, item.y, `+5`);

                if (comboCount >= 3) {
                    showComboText(item.x, item.y - 25, `COMBO x${comboCount}!`);
                    if (comboCount % 5 === 0) playSFX('combo');
                }

                changeTargetCategory();
            } else {
                currentLevelScore -= 1; // -1 Poin level (mengurangi skor level & total)
                comboCount = 0;
                playSFX('wrong');
                showComboText(item.x, item.y, `-1`);
                triggerDamageEffect();
            }
            
            removeItem(i);
            updateHUD();
            checkGameStatus();
            continue;
        }

        // Item Melewati Batas Bawah Layar
        if (item.y + item.height >= containerHeight) {
            if (item.category === targetCategoryName) {
                currentLevelScore -= 2; // -2 Poin jika item target terlewat
                comboCount = 0;
                playSFX('wrong');
                showComboText(item.x, containerHeight - 60, `-2`);
                triggerDamageEffect();
            }

            removeItem(i);
            updateHUD();
            checkGameStatus();
        }
    }
}

function removeItem(index) {
    if (fallingItems[index]) {
        gameArea.removeChild(fallingItems[index].element);
        fallingItems.splice(index, 1);
    }
}

function clearFallingItems() {
    fallingItems.forEach(item => {
        if (item.element.parentNode) {
            item.element.parentNode.removeChild(item.element);
        }
    });
    fallingItems = [];
}

function checkGameStatus() {
    const accumulatedTotalScore = previousTotalScore + currentLevelScore;
    const cumTargetScore = getCumulativeTargetScore(currentLevel);

    if (spawnedItemsCount >= maxLevelItems && fallingItems.length === 0) {
        isGameRunning = false;
        stopBGM();

        const levelTitleEl = document.getElementById('level-title');
        const levelDescEl = document.getElementById('level-desc');

        // Menentukan warna poin (Kuning untuk positif/0, Merah untuk negatif)
        const levelScoreColor = currentLevelScore >= 0 ? '#ffcc00' : '#ff4d4d';
        const totalScoreColor = accumulatedTotalScore >= 0 ? '#ffcc00' : '#ff4d4d';

        if (accumulatedTotalScore >= cumTargetScore) {
            playSFX('win');
            
            // Simpan perolehan skor level ini
            let savedScores = JSON.parse(localStorage.getItem('levelScores')) || {};
            savedScores[currentLevel] = currentLevelScore;
            localStorage.setItem('levelScores', JSON.stringify(savedScores));

            let unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;
            if (currentLevel >= unlockedLevel && currentLevel < 8) {
                localStorage.setItem('unlockedLevel', currentLevel + 1);
            }

            if (currentLevel >= 8) {
                levelTitleEl.innerText = "🎉 SELAMAT! GAME TAMAT! 🎉";
                levelDescEl.innerHTML = `
                    <div class="modal-card">
                        <p class="modal-highlight">Kamu telah berhasil melewati <strong>Level ${currentLevel}</strong> dan Meraih <strong style="color: ${levelScoreColor};">${currentLevelScore} Point</strong>!</p>
                        <p class="modal-total">Total Skor Kamu <strong style="color: ${totalScoreColor};">${accumulatedTotalScore} point</strong></p>
                    </div>
                `;
                nextLevelBtn.innerText = "Kembali ke Home";
                nextLevelBtn.onclick = () => { playSFX('click'); window.location.href = 'index.html'; };
            } else {
                levelTitleEl.innerText = `LEVEL ${currentLevel}`;
                levelDescEl.innerHTML = `
                    <div class="modal-card">
                        <p class="modal-highlight">Kamu telah berhasil melewati <strong>Level ${currentLevel}</strong> dan Meraih <strong style="color: ${levelScoreColor};">${currentLevelScore} Point</strong></p>
                        <hr class="modal-divider">
                        <p class="modal-total">Total Skor Kamu <strong style="color: ${totalScoreColor};">${accumulatedTotalScore} point</strong></p>
                    </div>
                `;
                nextLevelBtn.innerText = "Lanjut Level Berikutnya";
                nextLevelBtn.onclick = () => {
                    playSFX('click');
                    levelModal.classList.add('hidden');
                    currentLevel++;
                    startLevel();
                };
            }
        } else {
            playSFX('wrong');
            levelTitleEl.innerText = `LEVEL ${currentLevel}`;
            levelDescEl.innerHTML = `
                <div class="modal-card modal-failed">
                    <p class="modal-highlight">Kamu meraih <strong style="color: ${levelScoreColor};">${currentLevelScore} Point</strong> di level ini.</p>
                    <p class="modal-sub">Total skor kamu saat ini <strong style="color: ${totalScoreColor};">${accumulatedTotalScore} point</strong></p>
                </div>
            `;
            nextLevelBtn.innerText = "Coba Lagi";
            nextLevelBtn.onclick = () => {
                playSFX('click');
                levelModal.classList.add('hidden');
                startLevel();
            };
        }
        levelModal.classList.remove('hidden');
    }
}

// Jalankan level awal
startLevel();