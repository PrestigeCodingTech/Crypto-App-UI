
(function(){
  const menu = document.querySelector('[data-menu]');
  const sidebar = document.querySelector('.sidebar');
  const close = document.querySelector('[data-side-close]');
  if(menu && sidebar){ menu.addEventListener('click', ()=> sidebar.classList.add('open')); }
  if(close && sidebar){ close.addEventListener('click', ()=> sidebar.classList.remove('open')); }
  document.querySelectorAll('.sideLink').forEach(a=>a.addEventListener('click', ()=> sidebar && sidebar.classList.remove('open')));
})();

(function(){
  const overlay = document.getElementById('coinModal');
  if(!overlay) return;
  const close = overlay.querySelector('[data-close]');
  function openModal(payload){
    overlay.classList.add('open');
    if(payload){
      overlay.querySelector('[data-name]').textContent = payload.name || 'Coin Details';
      overlay.querySelector('[data-price]').textContent = payload.price || '$0.00';
      overlay.querySelector('[data-mc]').textContent = payload.mc || '$0';
      overlay.querySelector('[data-vol]').textContent = payload.vol || '$0';
      overlay.querySelector('[data-liq]').textContent = payload.liq || '—';
    }
    if(window.renderCandleDemo) window.renderCandleDemo('modalChart');
  }
  function closeModal(){ overlay.classList.remove('open'); }
  window.openCoinModal = openModal;
  if(close) close.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeModal(); });
})();
