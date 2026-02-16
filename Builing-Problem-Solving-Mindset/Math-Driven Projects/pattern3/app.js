const cx = 300;
const cy = 300;
const total = 500;

for (let i = 0; i < total; i++) {
  const angle = i * 0.3;
  const radius = i * 0.5;

  const x = cx + Math.cos(angle) * radius;
  const y = cy + Math.sin(angle) * radius;

  ctx.fillStyle = `hsl(${i % 360}, 100%, 50%)`;
  ctx.fillRect(x, y, 4, 4);
}
