"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Honeycomb portrait — 14 pointy-top hexagon tiles (2-3-4-3-2 flower),
 * matching the hero design. The portrait shows through EVERY tile;
 * outer tiles get a soft navy tint for depth, like the reference.
 * Tiles flip in on load, flip on hover, and a random tile spins periodically.
 */

const HEX_W = 110; // hexagon width
const HEX_H = (HEX_W * 2) / Math.sqrt(3); // ≈ 127
const ROW_STEP = HEX_H * 0.75; // ≈ 95.3
const GAP = 5; // yellow seams between tiles

const CLUSTER_W = HEX_W * 6; // 660
const CLUSTER_H = ROW_STEP * 6 + HEX_H; // ≈ 698
const CX = CLUSTER_W / 2;
const CY = CLUSTER_H / 2;

// Portrait covers the whole cluster
const IMG_SIZE = 750;
const IMG_X = (CLUSTER_W - IMG_SIZE) / 2;
const IMG_Y = (CLUSTER_H - IMG_SIZE) / 2;

type Tile = { x: number; y: number; shade: number };

// rows: 3, 4, 5, 6, 5, 4, 3 (30 tiles)
const LAYOUT: number[][] = [
  [1.5, 2.5, 3.5],
  [1, 2, 3, 4],
  [0.5, 1.5, 2.5, 3.5, 4.5],
  [0, 1, 2, 3, 4, 5],
  [0.5, 1.5, 2.5, 3.5, 4.5],
  [1, 2, 3, 4],
  [1.5, 2.5, 3.5],
];

const TILES: Tile[] = LAYOUT.flatMap((cols, row) =>
  cols.map((col) => {
    const x = col * HEX_W;
    const y = row * ROW_STEP;
    const dist = Math.hypot(x + HEX_W / 2 - CX, y + HEX_H / 2 - CY);
    // Center tiles crystal clear, outer ring softly tinted navy
    const shade = Math.min(0.5, Math.max(0, (dist - 140) / 110) * 0.5);
    return { x, y, shade };
  }),
);

const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const HexPortrait = ({ className = "" }: { className?: string }) => {
  const [spinIndex, setSpinIndex] = useState(-1);
  const [spinCount, setSpinCount] = useState(0);

  // Every few seconds, spin a random tile 360°
  useEffect(() => {
    const id = setInterval(() => {
      setSpinIndex(Math.floor(Math.random() * TILES.length));
      setSpinCount((c) => c + 1);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={className}
      style={{ width: CLUSTER_W, height: CLUSTER_H }}
      aria-label="Portrait of Ebube Ezedimbu"
      role="img"
    >
      <div className="relative" style={{ width: CLUSTER_W, height: CLUSTER_H }}>
        {TILES.map((tile, i) => (
          <HexTile
            key={i}
            tile={tile}
            index={i}
            spinning={spinIndex === i}
            spinCount={spinCount}
          />
        ))}
      </div>
    </div>
  );
};

const HexTile = ({
  tile,
  index,
  spinning,
  spinCount,
}: {
  tile: Tile;
  index: number;
  spinning: boolean;
  spinCount: number;
}) => {
  const [hovered, setHovered] = useState(false);

  const rotateY = hovered ? 180 : 0;

  return (
    <motion.div
      className="absolute"
      style={{
        left: tile.x + GAP / 2,
        top: tile.y + GAP / 2,
        width: HEX_W - GAP,
        height: HEX_H - GAP,
        perspective: 800,
      }}
      initial={false}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ delay: 0.15 + index * 0.06, duration: 0.55, ease: "easeOut" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={spinning ? { rotateY: [rotateY, rotateY + 360] } : { rotateY }}
        key={spinning ? `spin-${spinCount}` : "idle"}
        transition={{ duration: spinning ? 0.9 : 0.5, ease: "easeInOut" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* front — slice of the portrait */}
        <div
          className="absolute inset-0 overflow-hidden bg-[#221e35]"
          style={{ clipPath: HEX_CLIP, backfaceVisibility: "hidden" }}
        >
          <Image
            src="/ebube.jpg"
            alt=""
            width={IMG_SIZE}
            height={IMG_SIZE}
            priority
            className="pointer-events-none absolute max-w-none select-none"
            style={{
              width: IMG_SIZE,
              height: IMG_SIZE,
              left: IMG_X - tile.x,
              top: IMG_Y - tile.y,
            }}
          />
          {tile.shade > 0 && (
            <div
              className="absolute inset-0"
              style={{ background: "#221e35", opacity: tile.shade }}
            />
          )}
        </div>
        {/* back — flips into view on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-accent"
          style={{
            clipPath: HEX_CLIP,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-8 text-accent-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HexPortrait;
