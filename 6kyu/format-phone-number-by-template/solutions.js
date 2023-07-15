function formatNumber(number, template) {
  let ind = 0;
  (number = String(number)), (template = [...template]);

  if (number.length < template.filter((x) => x === '#').length)
    return '"Invalid phone number"';
  for (let i = 0; i < template.length; i++) {
    if (template[i] === '#') {
      template[i] = number[ind];
      ind++;
    }
  }

  return template.join('');
}

console.log(formatNumber(79052479075, '+# ### ### ## ##'), '+7 905 247 90 75');
console.log(
  formatNumber(79052479075, '+# (###) ### ##-##'),
  '+7 (905) 247 90-75'
);
console.log(formatNumber(79052479075, '+# ### ### ## ##'), '+7 905 247 90 75');
console.log(
  formatNumber(81237068908090, '+## ### ### ## ##'),
  '+81 237 068 90 80'
);
console.log(
  formatNumber(8123706890, '+## ### ### ##-##'),
  'Invalid phone number'
);
console.log(formatNumber(112, '+ () -'), '+ () -');
