function solve(input) {
    const outputMap = new Map();
    const tempDrinks = {};

    input
        .map(el => el.split(' => '))
        .forEach(el => {
            [flavor, quantity] = el;
            if (!tempDrinks[flavor]) {
                tempDrinks[flavor] = 0;
            }
            if (Number(quantity) >= 1000 && !outputMap.has(flavor)) {
                outputMap.set(flavor, 0);
            }

            tempDrinks[flavor] += Number(quantity)
        });

    outputMap.forEach((finalQa, finalFl) => {
        for (const [fl, qa] of Object.entries(tempDrinks)) {
            if (fl == finalFl) {
                outputMap.set(finalFl, finalQa + qa)
            }
        }
    })

    return [...outputMap].map(el => `${el[0]} => ${Math.floor(el[1] / 1000)}`).join('\n');
}