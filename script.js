const shapes = document.querySelectorAll('.shape');

shapes.forEach(shape => {
  shape.addEventListener('click', () => {
    const position = prompt("Choisis une position CSS: static, relative, absolute, fixed, sticky");

    // Supprime les anciennes classes de position
    shape.classList.remove('static', 'relative', 'absolute', 'fixed', 'sticky');

    // Ajoute la nouvelle
    if (['static', 'relative', 'absolute', 'fixed', 'sticky'].includes(position)) {
      shape.classList.add(position);
    } else {
      alert("Position invalide !");
    }
  });
});
