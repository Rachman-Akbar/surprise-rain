// 5 Kategori & 3 Gambar Background Fullscreen per Kategori
const CATEGORIES = {
    "Buah": {
        items: ['🍎', '🍌', '🍊', '🍉', '🍇', '🍓', '🍒', '🍑', '🍍', '🥥', '🥝', '🥭', '🍐', '🍏', '🍈', '🍋', '🫐', '🥑', '🍅', '🫒'],
        basketImage: 'images/buah.png',
        bgImages: [
            'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1546548970-71785318a17b?w=1600&auto=format&fit=crop&q=80'
        ]
    },
    "Pertukangan": {
        items: ['🔨', '🪛', '🪚', '🔧', '🧰', '🧱', '⚙️', '🗜️', '📐', '📏', '⛏️', '🪓', '🪜', '⛓️', '🧲', '🔌', '🔋', '💡', '🔦', '🛡️'],
        basketImage: 'images/pertukangan.png',
        bgImages: [
            'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1600&auto=format&fit=crop&q=80'
        ]
    },
    "Hewan": {
        items: ['🐱', '🐰', '🐶', '🐸', '🐼', '🦊', '🐯', '🦁', '🐵', '🐻', '🐨', '🐮', '🐷', '🐔', '🐧', '🦆', '🦉', '🐴', '🦄', '🐝'],
        basketImage: 'images/hewan.png',
        bgImages: [
            'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=1600&auto=format&fit=crop&q=80'
        ]
    },
    "Olahraga": {
        items: ['⚽', '🏀', '🎾', '🥊', '🏈', '⚾', '🥎', '🏐', '🏉', '🥏', '🏓', '🏸', '🏒', '🏑', '🥍', '🏹', '🎣', '🛼', '🛹', '🎳'],
        basketImage: 'images/olahraga.png',
        bgImages: [
            'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&auto=format&fit=crop&q=80'
        ]
    },
    "Perkantoran": {
        items: ['💻', '✒️', '✂️', '📂', '📑', '📊', '📈', '📌', '📎', '📏', '🖊️', '📝', '📁', '🖨️', '⌨️', '🖱️', '🖥️', '🧮', '🗑️', '🔒'],
        basketImage: 'images/perkantoran.png',
        bgImages: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=1600&auto=format&fit=crop&q=80'
        ]
    }
};

// PRELOAD SEMUA GAMBAR UNTUK MENGHILANGKAN STUTTER/LAG
function preloadAllBackgrounds() {
    Object.values(CATEGORIES).forEach(cat => {
        cat.bgImages.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    });
}
preloadAllBackgrounds();

// Konfigurasi Level Sesuai Tabel
const LEVEL_CONFIG = {
    1: { variantsCount: 2, speed: 1.5, targetScore: 15, spawnInterval: 1600 },
    2: { variantsCount: 3, speed: 1.5, targetScore: 20, spawnInterval: 1500 },
    3: { variantsCount: 3, speed: 2.5, targetScore: 25, spawnInterval: 1300 },
    4: { variantsCount: 4, speed: 2.5, targetScore: 30, spawnInterval: 1200 },
    5: { variantsCount: 4, speed: 3.5, targetScore: 40, spawnInterval: 1000 },
    6: { variantsCount: 5, speed: 3.5, targetScore: 50, spawnInterval: 950 },
    7: { variantsCount: 5, speed: 3.5, targetScore: 60, spawnInterval: 900 },
    8: { variantsCount: 5, speed: 3.5, targetScore: 70, spawnInterval: 850 }
};

// Ambil Parameter Level
const urlParams = new URLSearchParams(window.location.search);
let currentLevel = parseInt(urlParams.get('level')) || 1;

let containerWidth = window.innerWidth;
let containerHeight = window.innerHeight;

let score = 0;
let isGameRunning = false;
let animationFrameId = null;

let activeCategoryNames = [];
let targetCategoryName = "";
let fallingItems = [];
let lastSpawnTime = 0;
let activeBgLayer = 1;

// Ukuran Keranjang & Hitbox Presisi Persegi (70x70 px)
const playerSpeed = 12;
const playerWidth = 70;  
const playerHeight = 70; 
let playerX = (containerWidth - playerWidth) / 2;
let keys = { left: false, right: false };

// Element DOM
const gameArea = document.getElementById('game-area');
const playerEl = document.getElementById('player');
const playerAvatarEl = document.getElementById('player-avatar');
const playerLabelEl = document.getElementById('player-label');

const levelTxt = document.getElementById('level-txt');
const scoreTxt = document.getElementById('score-txt');
const targetScoreTxt = document.getElementById('target-score-txt');
const levelModal = document.getElementById('level-modal');
const nextLevelBtn = document.getElementById('next-level-btn');
const damageOverlay = document.getElementById('damage-overlay');

// Event Resize
window.addEventListener('resize', () => {
    containerWidth = window.innerWidth;
    containerHeight = window.innerHeight;
});

// Event Controls Keyboard
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
});

// Event Control Mouse
gameArea.addEventListener('mousemove', (e) => {
    if (!isGameRunning) return;
    playerX = e.clientX - (playerWidth / 2);
    if (playerX < 0) playerX = 0;
    if (playerX > containerWidth - playerWidth) playerX = containerWidth - playerWidth;
    playerEl.style.left = `${playerX}px`;
});

function startLevel() {
    score = 0;
    clearFallingItems();
    
    const config = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG[8];

    const allCatKeys = Object.keys(CATEGORIES);
    const shuffled = [...allCatKeys].sort(() => 0.5 - Math.random());
    activeCategoryNames = shuffled.slice(0, config.variantsCount);

    changeTargetCategory();

    playerX = (containerWidth - playerWidth) / 2;
    playerEl.style.left = `${playerX}px`;

    isGameRunning = true;
    lastSpawnTime = performance.now();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameLoop();
}

function changeTargetCategory() {
    targetCategoryName = activeCategoryNames[Math.floor(Math.random() * activeCategoryNames.length)];
    const catData = CATEGORIES[targetCategoryName];
    
    // Set gambar avatar keranjang
    playerAvatarEl.style.backgroundImage = `url('${catData.basketImage}')`;
    playerLabelEl.innerText = targetCategoryName;
    
    // Pilih 1 dari 3 gambar background acak
    const randomBg = catData.bgImages[Math.floor(Math.random() * catData.bgImages.length)];
    
    // Dual-Layer Cross-Fade Effect
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
    const config = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG[8];
    if (levelTxt) levelTxt.innerText = currentLevel;
    if (scoreTxt) scoreTxt.innerText = score;
    if (targetScoreTxt) targetScoreTxt.innerText = config.targetScore;
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
    if (now - lastSpawnTime > config.spawnInterval) {
        spawnItem();
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
    let yPos = 70;

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
    const config = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG[8];
    const playerY = containerHeight - playerHeight - 30;

    for (let i = fallingItems.length - 1; i >= 0; i--) {
        let item = fallingItems[i];
        item.y += speed * 2;
        item.element.style.top = `${item.y}px`;

        if (
            item.y + item.height >= playerY &&
            item.y <= playerY + playerHeight &&
            item.x + item.width >= playerX &&
            item.x <= playerX + playerWidth
        ) {
            if (item.category === targetCategoryName) {
                score++;
                changeTargetCategory();
            } else {
                score = Math.max(0, score - 1);
                triggerDamageEffect();
            }
            
            removeItem(i);
            updateHUD();
            checkGameStatus(config.targetScore);
            continue;
        }

        if (item.y + item.height >= containerHeight) {
            removeItem(i);
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

function checkGameStatus(targetScore) {
    if (score >= targetScore) {
        isGameRunning = false;
        
        let unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;
        if (currentLevel >= unlockedLevel && currentLevel < 8) {
            localStorage.setItem('unlockedLevel', currentLevel + 1);
        }

        if (currentLevel >= 8) {
            document.getElementById('level-title').innerText = "SELAMAT! TAMAT!";
            document.getElementById('level-desc').innerText = "Kamu telah menyelesaikan seluruh level game!";
            nextLevelBtn.innerText = "Kembali ke Home";
            nextLevelBtn.onclick = () => window.location.href = 'index.html';
        } else {
            document.getElementById('level-title').innerText = `Level ${currentLevel} Selesai!`;
            document.getElementById('level-desc').innerText = `Target ${targetScore} tangkapan berhasil tercapai!`;
            nextLevelBtn.innerText = "Level Berikutnya";
            nextLevelBtn.onclick = () => {
                levelModal.classList.add('hidden');
                currentLevel++;
                startLevel();
            };
        }
        levelModal.classList.remove('hidden');
    }
}

startLevel();