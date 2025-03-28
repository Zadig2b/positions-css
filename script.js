function changePosition(id, newPosition) {
    const element = document.getElementById(id);
    const positions = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
  
    // Retire toutes les classes de position
    positions.forEach(pos => element.classList.remove(pos));
  
    // Applique la nouvelle classe
    if (positions.includes(newPosition)) {
      element.classList.add(newPosition);
    }
  }
  
  function resetPositions() {
    const positions = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
    const shapes = document.querySelectorAll('.shape');
  
    shapes.forEach(shape => {
      // Reset la classe
      positions.forEach(pos => shape.classList.remove(pos));
      shape.classList.add('static');
  
      // Reset le select
      const select = shape.querySelector('select');
      if (select) {
        select.value = 'static';
      }
    });
  }
  