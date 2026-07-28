const products=[
{id:1,name:'MacBook Pro M3 Max',brand:'Apple',price:249900,oldPrice:279900,img:'assets/images/macbook-pro.jpg',cat:'laptops',rating:4.9,reviews:2341,tag:'hot'},
{id:2,name:'iPhone 15 Pro Max',brand:'Apple',price:159900,oldPrice:179900,img:'assets/images/iphone-15-pro.jpg',cat:'phones',rating:4.8,reviews:5621,tag:'sale'},
{id:3,name:'Galaxy S24 Ultra',brand:'Samsung',price:139900,img:'assets/images/samsung-galaxy.jpg',cat:'phones',rating:4.7,reviews:3245,tag:'new'},
{id:4,name:'WH-1000XM5',brand:'Sony',price:39900,oldPrice:44900,img:'assets/images/headphones.jpg',cat:'audio',rating:4.8,reviews:8912,tag:'hot'},
{id:5,name:'iPad Pro M4',brand:'Apple',price:119900,img:'assets/images/ipad-pro.jpg',cat:'tablets',rating:4.9,reviews:1876,tag:'new'},
{id:6,name:'Dell XPS 15',brand:'Dell',price:189900,oldPrice:209900,img:'assets/images/macbook-pro.jpg',cat:'laptops',rating:4.6,reviews:1234,tag:'sale'},
{id:7,name:'AirPods Pro 2',brand:'Apple',price:27900,img:'assets/images/headphones.jpg',cat:'audio',rating:4.8,reviews:12345,tag:'hot'},
{id:8,name:'PlayStation 5 Slim',brand:'Sony',price:54900,img:'assets/images/playstation.jpg',cat:'gaming',rating:4.9,reviews:6789,tag:'hot'},
{id:9,name:'LG OLED C4 65"',brand:'LG',price:299900,oldPrice:349900,img:'assets/images/tv.jpg',cat:'tv',rating:4.8,reviews:987,tag:'sale'},
{id:10,name:'DJI Mini 4 Pro',brand:'DJI',price:89900,img:'assets/images/drone.jpg',cat:'drones',rating:4.7,reviews:2345,tag:'new'},
{id:11,name:'Galaxy Watch 6',brand:'Samsung',price:39900,img:'assets/images/smart-watch.jpg',cat:'wearables',rating:4.5,reviews:3210},
{id:12,name:'Canon EOS R5',brand:'Canon',price:389900,img:'assets/images/camera.jpg',cat:'cameras',rating:4.9,reviews:876,tag:'hot'},
{id:13,name:'MX Master 3S',brand:'Logitech',price:10900,img:'assets/images/mouse.jpg',cat:'accessories',rating:4.7,reviews:7654},
{id:14,name:'RTX 4090',brand:'NVIDIA',price:259900,img:'assets/images/gpu.jpg',cat:'accessories',rating:4.9,reviews:1200,tag:'hot'},
{id:15,name:'Galaxy Tab S9',brand:'Samsung',price:79900,img:'assets/images/ipad-pro.jpg',cat:'tablets',rating:4.6,reviews:2100,tag:'new'},
{id:16,name:'Bose QC Ultra',brand:'Bose',price:34900,oldPrice:39900,img:'assets/images/headphones.jpg',cat:'audio',rating:4.6,reviews:4567,tag:'sale'},
];
const cats=[
{name:'Phones',cat:'phones',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'},
{name:'Laptops',cat:'laptops',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>'},
{name:'Audio',cat:'audio',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>'},
{name:'Gaming',cat:'gaming',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>'},
{name:'TVs',cat:'tv',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>'},
{name:'Tablets',cat:'tablets',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'},
{name:'Wearables',cat:'wearables',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>'},
{name:'Cameras',cat:'cameras',svg:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'},
];
const allCats=['all','phones','laptops','audio','gaming','tablets','tv','wearables','cameras','accessories'];
let cart=[],wishlist=[],filter='all';
function fmt(p){return '\u09F3'+p.toLocaleString('en-IN')}
function starStr(r){return '\u2605'.repeat(Math.floor(r))+'\u2606'.repeat(5-Math.floor(r))}

function renderCats(){document.getElementById('catGrid').innerHTML=cats.map(c=>'<div class="cat-card glass" onclick="setFilter(\''+c.cat+'\')">'+c.svg+'<h4>'+c.name+'</h4><span>'+products.filter(p=>p.cat===c.cat).length+' products</span></div>').join('')}
function renderFilters(){document.getElementById('filterBar').innerHTML=allCats.map(f=>'<button class="filter-btn '+(filter===f?'active':'')+'" onclick="setFilter(\''+f+'\')">'+(f==='all'?'All':f.charAt(0).toUpperCase()+f.slice(1))+'</button>').join('')}
function renderProducts(){
  var list=filter==='all'?products:products.filter(function(p){return p.cat===filter});
  document.getElementById('productGrid').innerHTML=list.map(function(p){
    var tagHtml=p.tag?'<span class="product-tag tag-'+p.tag+'">'+(p.tag==='sale'?'Sale':p.tag==='new'?'New':'Hot')+'</span>':'';
    var wishSvg=wishlist.includes(p.id)?'<svg width="16" height="16" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>':'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    var oldPriceHtml=p.oldPrice?'<span class="product-old">'+fmt(p.oldPrice)+'</span>':'';
    return '<div class="product-card glass"><div class="product-img"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy">'+tagHtml+'<button class="product-wish" onclick="event.stopPropagation();toggleWish('+p.id+')">'+wishSvg+'</button></div><div class="product-body"><div class="product-brand">'+p.brand+'</div><div class="product-name">'+p.name+'</div><div class="product-rating"><span class="stars">'+starStr(p.rating)+'</span><span class="rating-count">('+p.reviews.toLocaleString()+')</span></div><div class="product-bottom"><div><span class="product-price">'+fmt(p.price)+'</span>'+oldPriceHtml+'</div><button class="add-btn" onclick="event.stopPropagation();addToCart('+p.id+')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button></div></div></div>';
  }).join('');
}
function setFilter(f){filter=f;renderFilters();renderProducts();document.getElementById('products').scrollIntoView({behavior:'smooth'})}
function addToCart(id){var p=products.find(function(x){return x.id===id});var ex=cart.find(function(x){return x.id===id});if(ex){ex.qty++}else{cart.push(Object.assign({},p,{qty:1}))}renderCart();showToast(p.name+' added to cart!')}
function removeFromCart(id){cart=cart.filter(function(x){return x.id!==id});renderCart()}
function updateQty(id,d){var it=cart.find(function(x){return x.id===id});if(it){it.qty+=d;if(it.qty<=0)cart=cart.filter(function(x){return x.id!==id})}renderCart()}
function renderCart(){
  var count=cart.reduce(function(s,c){return s+c.qty},0);
  var total=cart.reduce(function(s,c){return s+c.price*c.qty},0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartCountText').textContent=count;
  var body=document.getElementById('cartBody');
  var foot=document.getElementById('cartFoot');
  if(!cart.length){body.innerHTML='<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:.3"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><p>Your cart is empty</p></div>';foot.style.display='none';return}
  foot.style.display='block';
  document.getElementById('cartTotal').textContent=fmt(total);
  body.innerHTML=cart.map(function(c){return '<div class="cart-item"><div class="cart-item-img"><img src="'+c.img+'" alt="'+c.name+'"></div><div class="cart-item-info"><div class="cart-item-name">'+c.name+'</div><div class="cart-item-brand">'+c.brand+'</div><div class="cart-item-price">'+fmt(c.price)+'</div><div class="cart-item-qty"><button class="qty-btn" onclick="updateQty('+c.id+',-1)">\u2212</button><span class="qty-val">'+c.qty+'</span><button class="qty-btn" onclick="updateQty('+c.id+',1)">+</button></div></div><button class="cart-item-rm" onclick="removeFromCart('+c.id+')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div>'}).join('');
}
function openCart(){document.getElementById('cartOverlay').classList.add('open');document.getElementById('cartSidebar').classList.add('open')}
function closeCart(){document.getElementById('cartOverlay').classList.remove('open');document.getElementById('cartSidebar').classList.remove('open')}
function checkout(){showToast('Order placed successfully!');cart=[];renderCart();closeCart()}
function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(function(i){return i!==id}):wishlist.concat([id]);renderProducts()}
function toggleSearch(){document.getElementById('searchBar').classList.toggle('open');if(document.getElementById('searchBar').classList.contains('open'))document.getElementById('searchInput').focus()}
function searchProducts(q){var f=q.toLowerCase();var list=products.filter(function(p){return p.name.toLowerCase().indexOf(f)!==-1||p.brand.toLowerCase().indexOf(f)!==-1});document.getElementById('productGrid').innerHTML=list.map(function(p){return '<div class="product-card glass"><div class="product-img"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"></div><div class="product-body"><div class="product-brand">'+p.brand+'</div><div class="product-name">'+p.name+'</div><div class="product-rating"><span class="stars">'+starStr(p.rating)+'</span><span class="rating-count">('+p.reviews.toLocaleString()+')</span></div><div class="product-bottom"><span class="product-price">'+fmt(p.price)+'</span><button class="add-btn" onclick="addToCart('+p.id+')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button></div></div></div>'}).join('')}
function showToast(m){var t=document.getElementById('toast');t.textContent='\u2713 '+m;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2500)}
function scrollToEl(s){var el=document.querySelector(s);if(el)el.scrollIntoView({behavior:'smooth'})}
var tH=23,tM=45,tS=12;
function tick(){tS--;if(tS<0){tS=59;tM--}if(tM<0){tM=59;tH--}if(tH<0){tH=23;tM=59;tS=59}document.getElementById('tH').textContent=String(tH).padStart(2,'0');document.getElementById('tM').textContent=String(tM).padStart(2,'0');document.getElementById('tS').textContent=String(tS).padStart(2,'0')}
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50);document.getElementById('btt').classList.toggle('show',window.scrollY>500)});
renderCats();renderFilters();renderProducts();renderCart();setInterval(tick,1000);
