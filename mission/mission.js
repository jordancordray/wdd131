document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');

    var logoImage = document.getElementById("logo");

    selectElement.addEventListener('change', function(){
        const selectedValue = this.value;
        if (selectedValue === 'dark') {
            document.body.classList.add('dark');
            logoImage.src="./images/byui-logo_white.png";
        } else {
            document.body.classList.remove('dark');
            logoImage.src="./images/byui-logo_blue.webp";
        }

    });
});