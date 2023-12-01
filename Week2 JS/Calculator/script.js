let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let variables = {
    A: 0,
    B: 0,
    C: 0
};

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value += buttonText;
        } else if (buttonText == 'AC') {
            screenValue = '';
            screen.value = screenValue;
        } else if (buttonText == 'DEL') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        } else if (buttonText == 'sqrt') {
            screenValue = screen.value + `${buttonText}(`;
            screen.value = screenValue;
        } else if (buttonText == 'sin' || buttonText == 'cos' || buttonText == 'tan') {
            screenValue = screen.value + `${buttonText}(`;
            screen.value = screenValue;
        } else if (buttonText == '=') {
            try {
                screenValue = screenValue.replace(/pi/g, Math.PI.toString());
                screenValue = screenValue.replace(/e/g, Math.E.toString());

                for (const variable in variables) {
                    screenValue = screenValue.replace(new RegExp(variable, 'g'), variables[variable]);
                }

                let result = calculateExpression(screenValue);
                screen.value = result.toFixed(4);
            } catch (error) {
                screen.value = error.message;
            }
        } else if (Object.keys(variables).includes(buttonText)) {
            // Replace variable with its value
            screenValue += variables[buttonText];
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

function calculateExpression(expression) {
    let regEx = /([-+]?[0-9]*\.?[0-9]+|[a-zA-Z]+[0-9]*|[\/\+\-\*^()])+([-+]?[0-9]*\.?[0-9]+)/g;

    if (regEx.test(expression)) {
        // Replace trigonometric functions with Math functions in degrees
        expression = expression.replace(/sin\(/g, 'Math.sin(Math.PI / 180 * ');
        expression = expression.replace(/cos\(/g, 'Math.cos(Math.PI / 180 * ');
        expression = expression.replace(/tan\(/g, 'Math.tan(Math.PI / 180 * ');

        // Replace Sqrt and ^ with Math functions in js
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/\^/g, '**');

        try {
            // Use Function constructor to avoid using eval
            let result = new Function('return ' + expression)();
            if (isNaN(result) || !isFinite(result)) {
                throw new Error("Invalid expression");
            }
            return result;
        } catch (error) {
            throw new Error("Invalid expression");
        }
    } else {
        throw new Error("Invalid expression");
    }
}