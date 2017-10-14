'use strict';  

document.addEventListener('DOMContentLoaded', function() {
    
   var forDropdown = document.querySelector('.for-dropdown');
    console.log(forDropdown);
    
    var dropdown = document.querySelector('.dropdown');
    
    forDropdown.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
    });
    
    forDropdown.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
        console.log(forDropdown);
    });

    
        
    });