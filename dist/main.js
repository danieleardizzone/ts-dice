(function () {
    'use strict';

    const dice = document.getElementById('dice');
    if (dice) {
        const rollBtn = document.getElementById('roll');
        if (rollBtn) {
            let currentDiceFace = "rotate3d(0, 1, 0, 0)";
            rollBtn.addEventListener('click', () => {
                rollBtn.disabled = true;
                const diceResult = getRandomInt(6);
                console.log(diceResult);
                const diceFaceTransformation = showDiceFace(diceResult);
                const randomRotation = Math.random() * 10 + 200;
                let diceSpinning = [
                    { transform: currentDiceFace },
                    { transform: `rotate3d(.3, 1, 0, ${randomRotation}deg)`, offset: 0.5 },
                    { transform: "rotate3d(0, 1, 0, 0)" },
                ];
                if (diceResult !== 1) {
                    diceSpinning.push({ transform: diceFaceTransformation });
                }
                const diceTiming = {
                    duration: 800,
                    iterations: 1,
                    easing: "ease-in",
                    fill: "forwards"
                };
                dice.animate(diceSpinning, diceTiming).onfinish = () => {
                    rollBtn.disabled = false;
                };
                currentDiceFace = diceFaceTransformation;
            });
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    function showDiceFace(random) {
        if (random === 1) {
            return "rotate3d(0, 1, 0, 0) rotate3d(1, -2, 0, 15deg)";
        }
        else if (random === 2) {
            return "rotate3d(1, 0, 0, -90deg) rotate3d(1, -2, 0, 15deg)";
        }
        else if (random === 3) {
            return "rotate3d(0, 1, 0, 90deg) rotate3d(1, -2, 0, 15deg)";
        }
        else if (random === 4) {
            return "rotate3d(0, 1, 0, -90deg) rotate3d(1, -2, 0, 15deg)";
        }
        else if (random === 5) {
            return "rotate3d(1, 0, 0, 90deg) rotate3d(1, -2, 0, 15deg)";
        }
        else if (random === 6) {
            return "rotate3d(0, 1, 0, 180deg) rotate3d(1, -2, 0, 15deg)";
        }
        else {
            throw console.warn("invalid dice face");
        }
    }

})();
//# sourceMappingURL=main.js.map
