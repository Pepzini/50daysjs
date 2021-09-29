const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => toggle.addEventListener('change',
(event) => selectBoxes(event.target)));

function selectBoxes(checkedBox) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === checkedBox) {
            fast.checked = false;
        }
        if (fast === checkedBox) {
            cheap.checked = false;
        }
        if (cheap === checkedBox) {
            good.checked = false;
        }
    }
}
