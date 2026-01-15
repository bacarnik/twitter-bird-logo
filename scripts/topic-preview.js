document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => openPreview(card));
  });
});

function openPreview(card) {
  const el = card.querySelector('.topic-image img, .topic-image svg, .topic-image canvas');
  if (!el) return;

  let copyText = null;
  let downloadFn = null;

  Swal.fire({
    title: 'Preview',
    html: `<div id="previewBox" style="text-align:center"></div>`,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Copy SVG',
    cancelButtonText: 'Download PNG',
    didOpen: () => {
      const box = document.getElementById('previewBox');

      // PNG - display and download twitter_bird.png
      if (el.tagName === 'IMG') {
        const img = el.cloneNode(true);
        img.style.width = '100%';
        box.appendChild(img);
        downloadFn = () => downloadImage('images/twitter_bird.png', 'twitter_bird.png');
      }

      // SVG - display PNG preview + copy SVG code
      if (el.tagName === 'SVG') {
        copyText = el.outerHTML; // Capture actual SVG code from element

        // Show PNG preview for any SVG
        const img = new Image();
        img.src = 'images/twitter_bird.png'; // Always show twitter bird PNG
        img.style.width = '100%';
        img.onload = () => {
          box.innerHTML = ''; // Clear any loading
          box.appendChild(img);
        };
        box.appendChild(img);

        downloadFn = () => downloadImage('images/twitter_bird.png', 'twitter_bird.png');
      }

      // Canvas
      if (el.tagName === 'CANVAS') {
        const img = new Image();
        img.src = el.toDataURL();
        img.style.width = '100%';
        box.appendChild(img);
        copyText = canvasPathCode();
      }
    }
  }).then(r => {
    if (r.isConfirmed && copyText) {
      navigator.clipboard.writeText(copyText);
    }
    if (r.dismiss === Swal.DismissReason.cancel && downloadFn) {
      downloadFn();
    }
  });
}

// ---------- helpers ----------
function downloadImage(src, filename) {
  fetch(src)
    .then(r => r.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    })
    .catch(err => console.error('Download failed:', err));
}

function canvasPathCode() {
  return `ctx.beginPath();
ctx.moveTo(417, 95);
ctx.bezierCurveTo(393, 67, 334, 48, 289, 84);
ctx.bezierCurveTo(246, 115, 247, 166, 254, 183);
ctx.bezierCurveTo(170, 180, 101, 141, 53, 82);
ctx.bezierCurveTo(25, 130, 44, 185, 83, 211);
ctx.bezierCurveTo(67, 211, 49, 206, 39, 199);
ctx.bezierCurveTo(40, 248, 72, 286, 116, 295);
ctx.bezierCurveTo(111, 299, 86, 301, 73, 297);
ctx.bezierCurveTo(87, 342, 129, 364, 163, 364);
ctx.bezierCurveTo(124, 397, 69, 411, 21, 404);
ctx.bezierCurveTo(205, 522, 448, 396, 444, 159);
ctx.bezierCurveTo(465, 145, 485, 122, 491, 110);
ctx.bezierCurveTo(465, 121, 443, 125, 437, 124);
ctx.bezierCurveTo(457, 113, 475, 89, 478, 71);
ctx.bezierCurveTo(471, 80, 422, 95, 417, 95);
ctx.closePath();`;
}
