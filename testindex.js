{/* <script>
  const floatingNavbar = document.getElementById('floatingNavbar');
  const stickyNavbar = document.getElementById('stickyNavbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      floatingNavbar.classList.add('hidden');
      stickyNavbar.classList.remove('hidden');
    } else {
      floatingNavbar.classList.remove('hidden');
      stickyNavbar.classList.add('hidden');
    }
  });
</script> */}


const floatingNavbar = document.getElementById('floatingNavbar');
const stickyNavbar = document.getElementById('stickyNavbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    floatingNavbar.classList.add('hidden');
    stickyNavbar.classList.remove('hidden');
  } else {
    floatingNavbar.classList.remove('hidden');
    stickyNavbar.classList.add('hidden');
  }
});