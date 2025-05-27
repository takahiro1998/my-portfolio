window.addEventListener('scroll',function() {
  const height = window.innerHeight;
  const scroll = this.pageYOffset;
  const marker = document.querySelectorAll('.marker');
  const value = scroll - height + 300

  marker.forEach(function(element){
      if (scroll > element.getBoundingClientRect().top + value) {
          element.classList.add('on')
      }
  });
})
