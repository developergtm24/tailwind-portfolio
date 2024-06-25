document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.textContent.toLowerCase();
    
        const portfolioItems = document.querySelectorAll('.portfolio-item');
    
        portfolioItems.forEach(item => {
          const itemCategories = item.querySelector('span').textContent.toLowerCase();
    
          if (filterValue === 'all' || itemCategories.includes(filterValue)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
    
  });