
document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.nav'), menu=document.querySelector('.menu');
 if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('.faq button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
 document.querySelectorAll('form[data-validate]').forEach(form=>form.addEventListener('submit',e=>{
   let ok=true; form.querySelectorAll('[required]').forEach(x=>{if(!x.value.trim()){x.style.borderColor='#b33';ok=false}});
   if(!ok){e.preventDefault();alert('Please complete all required fields.');}
 }));
});
