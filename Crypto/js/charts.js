
function randomCandleSeries(n=60, start=100){
  const data=[];
  let t = Math.floor(Date.now()/1000) - n*24*3600;
  let price = start;
  for(let i=0;i<n;i++){
    const open = price;
    const delta = (Math.random()-0.45)*6;
    const close = Math.max(5, open + delta);
    const high = Math.max(open, close) + Math.random()*3;
    const low = Math.min(open, close) - Math.random()*3;
    data.push({ time: t, open:+open.toFixed(2), high:+high.toFixed(2), low:+low.toFixed(2), close:+close.toFixed(2) });
    price = close;
    t += 24*3600;
  }
  return data;
}
function renderCandleDemo(containerId){
  const el = document.getElementById(containerId);
  if(!el || !window.LightweightCharts) return;
  el.innerHTML = '';
  const chart = LightweightCharts.createChart(el, {
    layout: { background: { color: 'transparent' }, textColor: '#9FB0C8' },
    grid: { vertLines: { color: 'rgba(255,255,255,0.04)' }, horzLines: { color: 'rgba(255,255,255,0.04)' } },
    rightPriceScale: { borderColor: 'rgba(255,255,255,0.08)' },
    timeScale: { borderColor: 'rgba(255,255,255,0.08)' },
    height: el.clientHeight || 240,
  });
  const series = chart.addCandlestickSeries({
    upColor: '#41E3A5', downColor: '#EF4444',
    borderUpColor: '#41E3A5', borderDownColor: '#EF4444',
    wickUpColor: '#41E3A5', wickDownColor: '#EF4444',
  });
  series.setData(randomCandleSeries(70, 120));
  chart.timeScale().fitContent();
}
window.renderCandleDemo = renderCandleDemo;
