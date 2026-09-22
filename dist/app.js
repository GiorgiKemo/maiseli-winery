const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();

const collections={
 qvevri:{label:'Traditional qvevri',description:'Four indigenous Georgian varieties, shaped by the earth in traditional qvevri.',wines:[
  {name:'Saperavi',type:'Traditional qvevri',image:'saperavi',grape:'Saperavi',method:'Traditional qvevri',description:'An expression of indigenous Georgian Saperavi, made in qvevri buried in the earth. Our family’s traditional method lets the grape’s natural character and its origin lead the way.'},
  {name:'Kisi',type:'Traditional qvevri',image:'kisi',grape:'Kisi',method:'Traditional qvevri',description:'Kisi from our collection of indigenous Georgian varieties, made in traditional earthenware qvevri. A wine connected to the soil, the vine, and the patient work of our family.'},
  {name:'Rkatsiteli',type:'Traditional qvevri',image:'rkatsiteli',grape:'Rkatsiteli',method:'Traditional qvevri',description:'Made using our traditional qvevri method, Rkatsiteli reflects our commitment to preserving the individual character of Georgian grapes and the authenticity of their origin.'},
  {name:'Tsolikouri',type:'Traditional qvevri',image:'tsolikouri',grape:'Tsolikouri',method:'Traditional qvevri',description:'An indigenous Georgian variety, expressed through the ancient practice of winemaking in buried clay vessels. Tsolikouri is one of the four grapes we grow in our family vineyard.'}
 ]},
 heritage:{label:'Our Heritage',description:'Made in Georgian qvevri. Further aged in French oak. Two traditions, one Maiseli signature.',wines:[
  {name:'Saperavi',type:'Qvevri · French oak',image:'saperavi-oak',grape:'Saperavi',method:'Qvevri & French oak',description:'Our Saperavi begins its journey in traditional Georgian qvevri before further ageing in French oak barrels. The qvevri preserves its Georgian character, while the oak adds depth, structure, and complexity.'},
  {name:'Rkatsiteli',type:'Qvevri · French oak',image:'oak-cellar',cellar:true,grape:'Rkatsiteli',method:'Qvevri & French oak',description:'Traditional qvevri winemaking followed by ageing in French oak. Our Heritage Rkatsiteli brings together Georgian identity and the added depth and structure of oak. Pictured: the Maiseli cellar.'}
 ]},
 sweet:{label:'Naturally semi-sweet',description:'Natural sweetness and individual character, in two distinctive Georgian wines.',wines:[
  {name:'Kindzmarauli',type:'Naturally semi-sweet red',image:'kindzmarauli',method:'Naturally semi-sweet',description:'Our naturally semi-sweet red wine brings together natural sweetness, varietal aromas, and a refined balance. Part of Maiseli’s dedication to the diversity of Georgian winemaking.'},
  {name:'Tvishi',type:'Naturally semi-sweet white',image:'tvishi',method:'Naturally semi-sweet',description:'Our naturally semi-sweet white wine expresses the individuality of Tvishi. Natural sweetness and balance come together in a wine rooted in Georgia’s distinctive winemaking culture.'}
 ]}
};
const grid=document.querySelector('#wine-grid');
const tabs=[...document.querySelectorAll('[role="tab"]')];
const panel=document.querySelector('#wine-panel');
let activeCollection='qvevri';
function selectCollection(key){
 activeCollection=key;
 const collection=collections[key];
 tabs.forEach(tab=>{const active=tab.dataset.collection===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
 panel.setAttribute('aria-labelledby',`tab-${key}`);
 document.querySelector('#collection-description').textContent=collection.description;
 grid.innerHTML=collection.wines.map((wine,index)=>`<button class="wine-card" data-wine="${index}" aria-label="Discover ${wine.name}, ${wine.type}" style="animation-delay:${index*35}ms"><div class="wine-image"><span class="wine-number">0${index+1}${wine.cellar?' / THE CELLAR':''}</span><img src="assets/${wine.image}.webp" alt="${wine.cellar?'French oak barrels in Maiseli’s cellar':`Maiseli ${wine.name} ${wine.type} bottle`}" class="${wine.cellar?'wine-image-cellar':''}" width="820" height="1200" loading="lazy"></div><div class="wine-title"><h3>${wine.name}</h3><span aria-hidden="true"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></div><p>${wine.type.toUpperCase()}</p><span class="wine-detail-link">Discover the wine</span></button>`).join('');
}
tabs.forEach((tab,index)=>{
 tab.addEventListener('click',()=>selectCollection(tab.dataset.collection));
 tab.addEventListener('keydown',event=>{
  let next;
  if(event.key==='ArrowRight')next=(index+1)%tabs.length;
  if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
  if(event.key==='Home')next=0;
  if(event.key==='End')next=tabs.length-1;
  if(next!==undefined){event.preventDefault();selectCollection(tabs[next].dataset.collection);tabs[next].focus();}
 });
});
document.querySelectorAll('.collection-link').forEach(link=>link.addEventListener('click',()=>selectCollection(link.dataset.collection)));
selectCollection('qvevri');
const wineDialog=document.querySelector('#wine-dialog');
grid.addEventListener('click',event=>{
 const button=event.target.closest('[data-wine]');if(!button)return;
 const collection=collections[activeCollection],wine=collection.wines[Number(button.dataset.wine)];
 document.querySelector('#wine-dialog-title').textContent=wine.name;
 document.querySelector('#wine-dialog-collection').textContent=`MAISELI · ${collection.label.toUpperCase()}`;
 document.querySelector('#wine-dialog-type').textContent=wine.type;
 document.querySelector('#wine-dialog-description').textContent=wine.description;
 document.querySelector('#wine-dialog-image').innerHTML=`<img src="assets/${wine.image}.webp" alt="${wine.cellar?'French oak barrels in the Maiseli cellar':`Maiseli ${wine.name} bottle`}" class="${wine.cellar?'wine-image-cellar':''}">`;
 document.querySelector('#wine-dialog-facts').innerHTML=`<div><dt>Origin</dt><dd>Georgia</dd></div>${wine.grape?`<div><dt>Grape variety</dt><dd>${wine.grape}</dd></div>`:''}<div><dt>Winemaking</dt><dd>${wine.method}</dd></div>`;
 wineDialog.showModal();
});
const processImages={qvevri:['qvevri','A qvevri opening set into the brick floor of Maiseli’s cellar'],heritage:['barrels','French oak barrels in the Maiseli cellar'],sweet:['vineyard-family','A member of the Maiseli family during the harvest']};
const details=[...document.querySelectorAll('[data-process]')];
details.forEach(detail=>detail.addEventListener('toggle',()=>{
 if(!detail.open)return;
 details.forEach(other=>{if(other!==detail)other.open=false;});
 const [src,alt]=processImages[detail.dataset.process],image=document.querySelector('#process-image');
 image.src=`assets/${src}.webp`;image.alt=alt;
}));
const galleryDialog=document.querySelector('#gallery-dialog');
document.querySelectorAll('.gallery-item').forEach(button=>button.addEventListener('click',()=>{
 const image=document.querySelector('#gallery-image');image.src=`assets/${button.dataset.image}.webp`;image.alt=button.querySelector('img').alt;
 document.querySelector('#gallery-caption').textContent=button.dataset.caption;galleryDialog.showModal();
}));
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
});
