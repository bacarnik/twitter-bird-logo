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
    confirmButtonColor: '#1DA1F2',
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

// ---------- main functionality ----------
document.querySelector('.topics-grid').addEventListener('click', (event) => {
  const article = event.target.closest('.topic-card');
  if (!article) return;

  const title = article.querySelector('h3').innerText;

  if (title === 'Twitter PNG') {
    // Show PNG in SweetAlert with download option
    const imgSrc = 'images/twitter_bird.png';
    Swal.fire({
      title: 'Twitter PNG',
      html: `<img src="${imgSrc}" alt="Twitter PNG" style="max-width: 100%; display: block; margin: auto;">
             <button id="download-png" style="margin-top: 10px; padding: 10px 20px; background-color: #1DA1F2; color: white; border: none; cursor: pointer;">Download</button>`,
      showConfirmButton: true,
      confirmButtonColor: '#1DA1F2',
      didRender: () => {
        document.getElementById('download-png').addEventListener('click', () => {
          downloadImage(imgSrc, 'twitter_bird.png');
        });
      }
    });
  } else if (title === 'Twitter SVG') {
    // Show SVG in SweetAlert with copy option
    const svgPath = `<svg viewBox="0 0 512 512" style="width: 100%; height: 100%; object-fit: contain;">
      <path fill="#1DA1F2" stroke="#1DA1F2" stroke-width="0"
        d="M 417.01,94.98 C 393.43,66.64 334.12,48.43 288.94,83.97 245.71,114.81 247.11,166.14 253.61,182.89 253.61,182.89 253.57,182.91 253.57,182.91 170.18,180.01 101.34,140.95 53.00,82.00 24.71,129.59 43.99,185.22 83.00,211.00 66.66,211.48 48.78,206.49 39.00,199.00 39.55,247.76 72.39,285.63 116.00,295.00 110.89,298.67 86.05,300.72 73.00,297.00 86.75,341.61 129.48,364.00 163.00,364.00 123.90,396.73 69.16,410.52 21.00,404.00 204.86,521.78 447.99,396.38 444.00,159.00 465.26,144.70 485.35,121.83 490.92,109.93 464.51,121.12 442.88,124.94 437.01,124.01 456.75,113.32 475.32,88.55 478.00,71.00 471.31,79.66 422.29,95.38 417.00,94.97" />
    </svg>`;
    Swal.fire({
      title: 'Twitter SVG',
      html: `<div>${svgPath}</div>
             <button id="copy-svg" style="margin-top: 10px; padding: 10px 20px; background-color: #1DA1F2; color: white; border: none; cursor: pointer;">Copy SVG Code</button>`,
      showConfirmButton: false,
        
      didRender: () => {
        document.getElementById('copy-svg').addEventListener('click', () => {
          navigator.clipboard.writeText(svgPath).then(() => {
            Swal.fire({
              title: 'Copied!',
              text: 'SVG code has been copied to clipboard.',
              icon: 'success',
              confirmButtonColor: '#1DA1F2'
            });
          });
        });
      }
    });
  } else if (title === 'Twitter Canvas') {
    // Show Canvas in SweetAlert with copy option
    const canvasCode = canvasPathCode();
    Swal.fire({
      title: 'Twitter Canvas',
      html: `<canvas id="dynamicCanvas" width="512" height="512" style="display: block; margin: auto; border: 1px solid #000;"></canvas>
             <button id="copy-canvas" style="margin-top: 10px; padding: 10px 20px; background-color: #1DA1F2; color: white; border: none; cursor: pointer;">Copy Canvas Path</button>`,
      showConfirmButton: false,
      confirmButtonColor: '#1DA1F2',
      didRender: () => {
        const canvas = document.getElementById('dynamicCanvas');
        const ctx = canvas.getContext('2d');
        eval(canvasCode); // Render the canvas dynamically
        ctx.fillStyle = '#1DA1F2';
        ctx.fill();
        document.getElementById('copy-canvas').addEventListener('click', () => {
          navigator.clipboard.writeText(canvasCode).then(() => {
            Swal.fire({
              title: 'Copied!',
              text: 'Canvas path code has been copied to clipboard.',
              icon: 'success',
              confirmButtonColor: '#1DA1F2' 
            });
          });
        });
      }
    });
  }
});