const menu = document.querySelector('.menu');
const nav = document.querySelector('#primary-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav?.classList.contains('open')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus(); }
});
const search = document.querySelector('#resource-search');
if (search) {
  let category = 'All resources';
  const rows = [...document.querySelectorAll('.resource')];
  const filter = () => {
    const query = search.value.trim().toLowerCase(); let count = 0;
    rows.forEach(row => { const show = (category === 'All resources' || row.dataset.category === category) && row.textContent.toLowerCase().includes(query); row.hidden = !show; if(show) count++; });
    document.querySelector('#result-count').textContent = `${count} resource${count === 1 ? '' : 's'} found`;
    document.querySelector('#empty').hidden = count !== 0;
  };
  search.addEventListener('input', filter);
  document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
    category = button.textContent; document.querySelectorAll('.filters button').forEach(b => b.setAttribute('aria-pressed', String(b === button))); filter();
  })); filter();
}
