const checkbox = document.getElementById('checkbox');
const body = document.getElementsByTagName('body')[0];

checkbox.addEventListener('change', () => {
    body.classList.toggle('dark'); 
})
