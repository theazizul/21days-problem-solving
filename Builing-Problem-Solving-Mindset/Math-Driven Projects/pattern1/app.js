const rows = 40;
const cols = 40;
const size = 30;

for (let index = 0; index < rows * cols; index++) {
  const row = Math.floor(index / cols);
  const col = index % cols;

  ctx.strokeRect(
    col * size,
    row * size,
    size,
    size
  );
}
