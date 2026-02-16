const rows = 40;
const cols = 40;
const size = 15;

for (let i = 0; i < rows * cols; i++) {
  const r = Math.floor(i / cols);
  const c = i % cols;

  const dx = c - cols / 2;
  const dy = r - rows / 2;
  const dist = Math.sqrt(dx*dx + dy*dy);

  const intensity = Math.sin(dist * 0.5);

  ctx.fillStyle = `hsl(${intensity * 120 + 200}, 80%, 50%)`;
  ctx.fillRect(c * size, r * size, size, size);
}
