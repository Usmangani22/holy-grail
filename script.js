function toggleNNav(){
    const outerGrid = document.querySelector('.outer-grid');
    outerGrid.classList.toggle('outer-grid-expanded');
    console.log(outerGrid.classList);

    const nav = document.querySelector('nav');

    nav.classList.toggle('hide-nav');
  
}