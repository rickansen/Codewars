// Solution 1: IDKKK
const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca'];

function bestPlanet(solarSystem, maxSize) {
  let planets = solarSystem.map((x) => x.slice(0, x.indexOf('_')));

  for (let i = 0; i < planets.length; i++) {
    let curr = [...planets[i]];
    planets[i] = [];

    for (let j = 0; j < curr.length; j++) {
      if (/[^C]/.test(curr[j])) {
        planets[i].push(curr[j]);
      } else {
        if (curr[j] + curr[j + 1] !== 'Ca') {
          planets[i].push('C');
        } else {
          planets[i].push('Ca');
          j++;
        }
      }
    }
  }

  planets = planets
    .map((x, y) => [x, +solarSystem[y].slice(solarSystem[y].indexOf('_') + 1)])
    .filter((x, y) =>
      REQUIRED_ELEMENTS.every((a) => planets[y].includes(a) && +x[1] <= maxSize)
    );

  let final = planets.find(
    (x) => x[1] === Math.max(...planets.map((x) => x[1]))
  );
  return final ? `${final[0].join('')}_${final[1]}` : '';
}

console.log(
  bestPlanet(
    ['OHNCCaP_225', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OUNCCaP_250'],
    250
  ),
  'OHNCCaP_225'
);
console.log(
  bestPlanet(
    ['OHNCCaP_225', 'OHC_200', 'OCa_350', 'OHCCaP_400', 'OHUNCCaP_225'],
    50
  ),
  ''
);
console.log(
  bestPlanet(
    ['OHNCCaP_225', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OUNCCaP_250'],
    50
  ),
  ''
);
console.log(
  bestPlanet(
    [
      'CaNHPOC_94',
      'TaTcHoONEsBiCu_50',
      'OCPCaHN_289',
      'GdHfHeTaBeErEsMoB_273',
      'HONCCaP_149',
      'HNCFrCaOCoPRg_211',
      'OTsCPCaAs_127',
    ],
    284
  ),
  'HNCFrCaOCoPRg_211'
);
