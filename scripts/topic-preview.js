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
    showConfirmButton: false,
    confirmButtonText: 'Copy',
    cancelButtonText: 'Download PNG',
    didOpen: () => {
      const box = document.getElementById('previewBox');

      if (el.tagName === 'IMG') {
        const img = el.cloneNode(true);
        img.style.width = '100%';
        box.appendChild(img);
        downloadFn = () => downloadImage('images/twitter_bird.png', 'twitter_bird.png');
      }

      if (el.tagName === 'SVG') {
        copyText = el.outerHTML;
        const img = new Image();
        img.src = 'images/twitter_bird.png';
        img.style.width = '100%';
        box.appendChild(img);
        downloadFn = () => downloadImage('images/twitter_bird.png', 'twitter_bird.png');
      }

      if (el.tagName === 'CANVAS') {
        const img = new Image();
        img.src = el.toDataURL();
        img.style.width = '100%';
        box.appendChild(img);
        copyText = canvasPathCode();
      }
    }
  }).then(r => {
    if (r.isConfirmed && copyText) navigator.clipboard.writeText(copyText);
    if (r.dismiss === Swal.DismissReason.cancel && downloadFn) downloadFn();
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
      a.click();
      URL.revokeObjectURL(a.href);
    });
}

function canvasPathCode() {
  return `ctx.beginPath();
ctx.moveTo(417,95);
ctx.bezierCurveTo(393,67,334,48,289,84);
ctx.bezierCurveTo(246,115,247,166,254,183);
ctx.bezierCurveTo(170,180,101,141,53,82);
ctx.bezierCurveTo(25,130,44,185,83,211);
ctx.bezierCurveTo(67,211,49,206,39,199);
ctx.bezierCurveTo(40,248,72,286,116,295);
ctx.bezierCurveTo(111,299,86,301,73,297);
ctx.bezierCurveTo(87,342,129,364,163,364);
ctx.bezierCurveTo(124,397,69,411,21,404);
ctx.bezierCurveTo(205,522,448,396,444,159);
ctx.closePath();`;
}

// ---------- grid clicks ----------
document.querySelector('.topics-grid').addEventListener('click', e => {
  const article = e.target.closest('.topic-card');
  if (!article) return;

  const title = article.querySelector('h3').innerText;

  if (title === 'Twitter PNG') {
    Swal.fire({
      title: 'Twitter PNG',
      html: `
        <img src="images/twitter_bird.png" style="max-width:100%">
        <button id="download-png" class="tw-btn">Download</button>
      `,
      showConfirmButton: false,
      didRender: () => {
        document.getElementById('download-png').onclick =
          () => downloadImage('images/twitter_bird.png', 'twitter_bird.png');
      }
    });
  }

  if (title === 'Twitter SVG') {
    const svgPath = `<svg>...</svg>`;
    Swal.fire({
      title: 'Twitter SVG',
      html: `
        ${svgPath}
        <button id="copy-svg" class="tw-btn">Copy SVG</button>
      `,
      didRender: () => {
        document.getElementById('copy-svg').onclick = () => {
          navigator.clipboard.writeText(svgPath);
          Swal.fire({
            icon: 'success',
            title: 'Copied!',
          });
        };
      }
    });
  }

  if (title === 'Twitter Canvas') {
    const code = canvasPathCode();
    Swal.fire({
      title: 'Twitter Canvas',
      html: `
        <canvas id="c" width="512" height="512"></canvas>
        <button id="copy-canvas" class="tw-btn">Copy Path</button>
      `,
      didRender: () => {
        const ctx = document.getElementById('c').getContext('2d');
        eval(code);
        ctx.fillStyle = '#1DA1F2';
        ctx.fill();
        document.getElementById('copy-canvas').onclick = () => {
          navigator.clipboard.writeText(code);
          Swal.fire({
            icon: 'success',
            title: 'Copied!',
          });
        };
      }
    });
  }
});
