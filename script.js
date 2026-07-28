// ===== DATA =====
const products = [
  { id:1, name:'MacBook Pro M3 Max', brand:'Apple', price:249900, oldPrice:279900, emoji:'💻', category:'laptops', rating:4.9, reviews:2341, tag:'hot' },
  { id:2, name:'iPhone 15 Pro Max', brand:'Apple', price:159900, oldPrice:179900, emoji:'📱', category:'phones', rating:4.8, reviews:5621, tag:'sale' },
  { id:3, name:'Samsung Galaxy S24 Ultra', brand:'Samsung', price:139900, emoji:'📱', category:'phones', rating:4.7, reviews:3245, tag:'new' },
  { id:4, name:'Sony WH-1000XM5', brand:'Sony', price:39900, oldPrice:44900, emoji:'🎧', category:'audio', rating:4.8, reviews:8912, tag:'hot' },
  { id:5, name:'iPad Pro M4', brand:'Apple', price:119900, emoji:'📱', category:'tablets', rating:4.9, reviews:1876, tag:'new' },
  { id:6, name:'Dell XPS 15', brand:'Dell', price:189900, oldPrice:209900, emoji:'💻', category:'laptops', rating:4.6, reviews:1234, tag:'sale' },
  { id:7, name:'AirPods Pro 2', brand:'Apple', price:27900, emoji:'🎧', category:'audio', rating:4.8, reviews:12345, tag:'hot' },
  { id:8, name:'PlayStation 5 Slim', brand:'Sony', price:54900, emoji:'🎮', category:'gaming', rating:4.9, reviews:6789, tag:'hot' },
  { id:9, name:'LG OLED C4 65"', brand:'LG', price:299900, oldPrice:349900, emoji:'📺', category:'tv', rating:4.8, reviews:987, tag:'sale' },
  { id:10, name:'DJI Mini 4 Pro', brand:'DJI', price:89900, emoji:'🚁', category:'drones', rating:4.7, reviews:2345, tag:'new' },
  { id:11, name:'Nintendo Switch OLED', brand:'Nintendo', price:37900, emoji:'🎮', category:'gaming', rating:4.7, reviews:8765 },
  { id:12, name:'Bose QuietComfort', brand:'Bose', price:34900, oldPrice:39900, emoji:'🎧', category:'audio', rating:4.6, reviews:4567, tag:'sale' },
  { id:13, name:'Galaxy Watch 6 Classic', brand:'Samsung', price:39900, emoji:'⌚', category:'wearables', rating:4.5, reviews:3210 },
  { id:14, name:'Canon EOS R5', brand:'Canon', price:389900, emoji:'📷', category:'cameras', rating:4.9, reviews:876, tag:'hot' },
  { id:15, name:'Samsung 990 Pro 2TB', brand:'Samsung', price:24900, oldPrice:29900, emoji:'💾', category:'accessories', rating:4.8, reviews:5432, tag:'sale' },
  { id:16, name:'Logitech MX Master 3S', brand:'Logitech', price:10900, emoji:'🖱️', category:'accessories', rating:4.7, reviews:7654 },
  { id:17, name:'Samsung Galaxy Tab S9', brand:'Samsung', price:79900, emoji:'📱', category:'tablets', rating:4.6, reviews:2100, tag:'new' },
  { id:18, name:'NVIDIA RTX 4090', brand:'NVIDIA', price:259900, emoji:'🖥️', category:'accessories', rating:4.9, reviews:1200, tag:'hot' },
];

const categories = [
  { name:'Phones', icon:'📱', cat:'phones' },
  { name:'Laptops', icon:'💻', cat:'laptops' },
  { name:'Audio', icon:'🎧', cat:'audio' },
  { name:'Gaming', icon:'🎮', cat:'gaming' },
  { name:'TVs', icon:'📺', cat:'tv' },
  { name:'Tablets', icon:'📱', cat:'tablets' },
  { name:'Wearables', icon:'⌚', cat:'wearables' },
  { name:'Drones', icon:'🚁', cat:'drones' },
];

const filterCategories = ['all','phones','laptops','audio','gaming','tablets','tv','wearables','drones','cameras','accessories'];

// ===== STATE =====
let cart = [];
let wishlist = [];
let currentFilter = 'all';

// ===== HELPERS =====
function formatPrice(p) { return '৳' + p.toLocaleString('en-IN'); }

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

// ===== RENDER =====
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map(c => `
    <div class="category-card glass-card" onclick="setFilter('${c.cat}')">
      <span class="category-icon">${c.icon}</span>
      <div class="category-name">${c.name}</div>
      <div class="category-count">${products.filter(p=>p.category===c.cat).length} পণ্য</div>
    </div>
  `).join('');
}

function renderFilters() {
  const el = document.getElementById('productsFilter');
  el.innerHTML = filterCategories.map(f => `
    <button class="filter-btn ${currentFilter===f?'active':''}" onclick="setFilter('${f}')">
      ${f === 'all' ? 'সব' : f.charAt(0).toUpperCase() + f.slice(1)}
    </button>
  `).join('');
}

function renderProducts() {
  const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = filtered.map(p => `
    <div class="product-card glass-card">
      <div class="product-image">
        ${p.tag ? `<span class="product-tag product-tag-${p.tag}">${p.tag==='sale'?'🔥 সেল':p.tag==='new'?'✨ নতুন':'⚡ হট'}</span>` : ''}
        <button class="product-wishlist" onclick="event.stopPropagation();toggleWishlist(${p.id})">${wishlist.includes(p.id)?'❤️':'🤍'}</button>
        <span style="position:relative;z-index:1">${p.emoji}</span>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="product-stars">${stars(p.rating)}</span>
          <span class="product-rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="product-add-btn" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function setFilter(f) {
  currentFilter = f;
  renderFilters();
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===== CART =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  showToast(`${product.name} কার্টে যোগ হয়েছে!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  }
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s,c) => s + c.qty, 0);
  const total = cart.reduce((s,c) => s + c.price * c.qty, 0);

  document.getElementById('cartBadge').textContent = count;
  document.getElementById('cartCountText').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div class="cart-empty-text">আপনার কার্ট খালি!</div></div>';
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  document.getElementById('cartTotal').textContent = formatPrice(total);

  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-image">${c.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-brand">${c.brand}</div>
        <div class="cart-item-price">${formatPrice(c.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${c.id},-1)">−</button>
          <span class="qty-value">${c.qty}</span>
          <button class="qty-btn" onclick="updateQty(${c.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})">🗑️</button>
    </div>
  `).join('');
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
}

function checkout() {
  showToast('অর্ডার সফল হয়েছে! 🎉');
  cart = [];
  renderCart();
  closeCart();
}

// ===== WISHLIST =====
function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
  } else {
    wishlist.push(id);
  }
  renderProducts();
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = '✓ ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== SCROLL =====
function scrollTo(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

// ===== TIMER =====
let timerH = 23, timerM = 45, timerS = 12;
function updateTimer() {
  timerS--;
  if (timerS < 0) { timerS = 59; timerM--; }
  if (timerM < 0) { timerM = 59; timerH--; }
  if (timerH < 0) { timerH = 23; timerM = 59; timerS = 59; }
  document.getElementById('timerH').textContent = String(timerH).padStart(2, '0');
  document.getElementById('timerM').textContent = String(timerM).padStart(2, '0');
  document.getElementById('timerS').textContent = String(timerS).padStart(2, '0');
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  if (window.scrollY > 500) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

// ===== INIT =====
renderCategories();
renderFilters();
renderProducts();
renderCart();
setInterval(updateTimer, 1000);
