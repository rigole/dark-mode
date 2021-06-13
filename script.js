const toggleSwitch = document.querySelector('input[type="checkbox"]');

// switch theme Dynamically
function switchTheme(event){
    console.log(event.target.checked);
}
// Event Listener
toggleSwitch.addEventListener('change',switchTheme);