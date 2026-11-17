(function(){
  var dlg=document.getElementById("lightbox"); if(!dlg) return;
  var img=document.getElementById("lightbox-img"),cap=document.getElementById("lightbox-cap");
  document.querySelectorAll(".evidence button").forEach(function(b){
    b.addEventListener("click",function(){
      var i=b.querySelector("img"); img.src=i.src; img.alt=i.alt;
      cap.textContent=b.parentNode.querySelector("figcaption").textContent;
      if(dlg.showModal) dlg.showModal();
    });
  });
  document.getElementById("lightbox-close").addEventListener("click",function(){dlg.close()});
  dlg.addEventListener("click",function(e){if(e.target===dlg) dlg.close()});
})();
