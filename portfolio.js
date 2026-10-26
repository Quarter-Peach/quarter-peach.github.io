(()=>{const buttons=document.querySelectorAll('[data-filter]');buttons.forEach(b=>b.addEventListener('click',()=>{const cat=b.dataset.filter;buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let n=0;document.querySelectorAll('.work-card').forEach(c=>{const visible=cat==='all'||c.dataset.category===cat;c.hidden=!visible;if(visible)n++});const status=document.getElementById('filter-status');if(status)status.textContent=`展示 ${n} 个${cat==='all'?'':b.textContent}项目`;}));const dialog=document.getElementById('image-viewer');if(dialog){document.querySelectorAll('.image-button').forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');const full=dialog.querySelector('img');full.src=img.src;full.alt=img.alt;dialog.showModal()}));dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}})}})();
(()=>{
  let hideStatus;
  const status=document.querySelector('.copy-status');
  document.querySelectorAll('[data-copy-email]').forEach(button=>{
    button.addEventListener('click',async()=>{
      const email=button.dataset.copyEmail;
      let copied=false;
      try{await navigator.clipboard.writeText(email);copied=true}catch{
        const field=document.createElement('textarea');
        field.value=email;field.setAttribute('readonly','');
        field.style.cssText='position:fixed;left:-9999px;top:0';
        document.body.appendChild(field);field.select();
        try{copied=document.execCommand('copy')}catch{}
        field.remove();button.focus({preventScroll:true});
      }
      if(status){
        clearTimeout(hideStatus);
        status.textContent=copied?'邮箱已复制':'复制失败，请手动选择邮箱地址';
        status.classList.add('visible');
        hideStatus=setTimeout(()=>status.classList.remove('visible'),3000);
      }
    });
  });
})();
