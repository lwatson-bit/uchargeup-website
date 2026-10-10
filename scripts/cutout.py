#!/usr/bin/env python3
"""Knock the white background out of the kiosk renders.

The supplier's PNGs carry an alpha channel but every pixel is opaque, so the
renders sat in a white box on any tinted surface. This flood-fills from the
image border (near-white only, within a tolerance) and makes that connected
region transparent; white parts of the kiosk itself stay because they are
separated from the background by the render's shaded edges.

    python3 scripts/cutout.py
Writes attached_assets/web/cutout/*.png, which scripts/images.mjs then trims,
resizes and converts to WebP.
"""
from pathlib import Path
from PIL import Image, ImageDraw

SRC = Path("attached_assets")
OUT = SRC / "web" / "cutout"
RENDERS = {
    "24 Unit UCU_1752157185779.png": "kiosk-24.png",
    "8 Unit UCU_1752157185780.png": "kiosk-8.png",
}
SENTINEL = (255, 0, 255, 255)  # magenta never appears in the renders
THRESH = 40  # how far from pure white still counts as background

OUT.mkdir(parents=True, exist_ok=True)
for name, out in RENDERS.items():
    im = Image.open(SRC / name).convert("RGBA")
    w, h = im.size
    # Fill from every border pixel, not just the corners, so no background
    # pocket that only touches an edge is missed.
    for x in range(0, w, 8):
        for y in (0, h - 1):
            if im.getpixel((x, y))[:3] != SENTINEL[:3]:
                ImageDraw.floodfill(im, (x, y), SENTINEL, thresh=THRESH)
    for y in range(0, h, 8):
        for x in (0, w - 1):
            if im.getpixel((x, y))[:3] != SENTINEL[:3]:
                ImageDraw.floodfill(im, (x, y), SENTINEL, thresh=THRESH)
    px = im.load()
    cleared = 0
    for y in range(h):
        for x in range(w):
            if px[x, y][:3] == SENTINEL[:3]:
                px[x, y] = (255, 255, 255, 0)
                cleared += 1
    im.save(OUT / out)
    print(f"{out}: {w}x{h}, {cleared / (w * h):.0%} background cleared")
