export function orbitPosition(index: number, count: number, phase: number, compact: boolean) {
  const angle = phase + index * Math.PI * 2 / count - Math.PI / 2;
  return {
    x: 50 + Math.cos(angle) * (compact ? 34 : 39),
    y: 49 + Math.sin(angle) * (compact ? 34 : 31),
    depth: Math.sin(angle) * 90,
    tilt: -Math.cos(angle) * 10,
  };
}
