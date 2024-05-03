//bookmarklet
links = [];
for(let i=0;i<document.images.length;i++){
  links.push(document.images[i].src);
}
myhtml = "<html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><style>.grid-container{display:grid;row-gap:10px;grid-template-columns:auto auto auto;padding:10px}.grid-item{border:1px solid rgba(0,0,0,.8);padding:20px;font-size:30px;text-align:center}img{max-width:500px}</style><body><div class='grid-container'";
for(let i=0;i<links.length;i++){
  myhtml += `<img src='${links[i]}'>`; 
}
myhtml += "</div></body></html>";
document.write(myhtml);
