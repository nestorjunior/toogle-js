(function(){
    'use strict';

    var toogleButton = function() {
    const checkbox = document.getElementById('checkbox');
    const body = document.getElementsByTagName('body')[0];

    checkbox.addEventListener('change', () => {
        body.classList.toggle('dark'); 
    });

    };

    toogleButton();
})();