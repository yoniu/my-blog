const colorThief = new ColorThief(),
      img = document.querySelector('#background img');
let defColor = [255,255,255];
if (img.complete) {
  defColor = colorThief.getPalette(img);
} else {
  img.addEventListener('load', function() {
    defColor = colorThief.getColor(img);
  });
}
document.body.style = `
  --defColor0: rgb(${defColor[4]});
  --defColor1: rgb(${defColor[2]});
`;
const aTags = document.querySelectorAll('#icon-box a');
for (let aTag of aTags) {
  aTag.style = `--height: ${aTag.offsetWidth}px;`;
  aTag.setAttribute('onmouseover', 'setHeight(this)');
}

function setHeight (element) {
  document.querySelector('a.current').classList.remove('current');
  element.classList.add('current');
}