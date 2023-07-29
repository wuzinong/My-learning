const createHTML = (width: number, height: number, bmp: Uint8ClampedArray) => {
  const shadowCSSFragments: string[] = []; //css of shadow
  const shadowCSSHover: string[] = []; // hover effect

  //get information for all the pixels
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      const i = r * width + c;
      const R = bmp[i * 4],
        G = bmp[i * 4 + 1],
        B = bmp[i * 4 + 2],
        A = bmp[i * 4 + 3] / 255;

      shadowCSSFragments.push(`${c + 1}px ${r}px rgba(${R},${G},${B},${A})`);
      shadowCSSHover.push(
        `${c + 1}px ${r}px rgba(${255 - R},${255 - G},${255 - B},${255 - A})`
      );
    }
  }

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        .shadow-img{
            width:${width}px;
            height:${height}px;
        }
        .shadow-img .inner {
            width:1px;
            height:1px;
            box-shadow:${shadowCSSFragments.join(',')};
            transition:1.5s;
        }
        .shadow-img:hover .inner{
            box-shadow:${shadowCSSHover.join(',')};
        }
    </style>
  </head>
  <body><div class="shadow-img"><div class="inner"></div></div>
  </body>
</html>
  `;
};
const loadImage = (fileDom: any): Promise<HTMLImageElement | null> | null => {
  const file = fileDom.files[0];
  if (!file) return null;

  const objUrl = URL.createObjectURL(file);
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (err) => {
      console.error(err);
      resolve(null);
    };
    img.src = objUrl;
  });
};

const download = (html: string) => {
  const blob = new Blob([html], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  a.download = 'demo.html';
  a.click();
};
export const generate = async (fileDom: any) => {
  debugger;
  const img = await loadImage(fileDom);
  if (!img) return;

  //draw to the canvas
  const cvs = document.createElement('canvas') as HTMLCanvasElement;
  cvs.width = img.width;
  cvs.height = img.height;
  const ctx = cvs.getContext('2d');
  ctx?.drawImage(img, 0, 0);

  const bmp = ctx?.getImageData(0, 0, img.width, img.height).data!!;
  const html = createHTML(img.width, img.height, bmp);

  download(html);
};
