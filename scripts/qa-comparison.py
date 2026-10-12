from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

root = Path(__file__).resolve().parents[1]
sources = Path('C:/Users/LIMOM/.codex/generated_images/01a12304-5140-7091-b968-0bada7e4ef7a')
for name, source, actual, width in [
    ('mobile', 'exec-226b5ce6-2dcb-423e-83c4-f00e9d727e61.png', 'mobile-final.jpg', 390),
    ('desktop', 'exec-628e5f03-2435-4a2f-a180-fafa9cf378dc.png', 'desktop-final.jpg', 720),
]:
    a = Image.open(sources / source).convert('RGB')
    b = Image.open(root / 'qa' / actual).convert('RGB')
    print(name, 'source', a.size, 'implementation', b.size)
    a = a.resize((width, round(a.height * width / a.width)))
    b = b.resize((width, round(b.height * width / b.width)))
    canvas = Image.new('RGB', (width * 2 + 24, max(a.height, b.height) + 36), '#e8e8e8')
    canvas.paste(a, (0, 36))
    canvas.paste(b, (width + 24, 36))
    d = ImageDraw.Draw(canvas)
    d.text((12, 10), 'SOURCE (normalized)', fill='black')
    d.text((width + 36, 10), 'IMPLEMENTATION', fill='black')
    canvas.save(root / 'qa' / f'{name}-comparison.jpg', quality=92)
    if name == 'mobile':
        canvas.crop((0, 0, canvas.width, 850)).save(root / 'qa' / 'mobile-focused-comparison.jpg', quality=92)

