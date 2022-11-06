function changeCase(identifier, targetCase) {
  const caseArr = ['snake', 'camel', 'kebab'];
  const upperCase = [...identifier].filter((x) => /[A-Z]/.test(x)).length;
  const dash = identifier.includes('-');
  const underline = identifier.includes('_');

  if (!caseArr.includes(targetCase)) return undefined;
  if ((dash && underline) || (upperCase && underline) || (upperCase && dash))
    return undefined;
  if (!identifier) return '';

  if (targetCase === caseArr[0])
    return dash
      ? identifier.split('-').join('_')
      : [...identifier]
          .map((x) => (/[A-Z]/.test(x) ? `_${x.toLowerCase()}` : x))
          .join('');

  if (targetCase === caseArr[1]) {
    const char = dash ? '-' : '_';
    return [...identifier]
      .map((x, y, z) => (z[y - 1] === char ? x.toUpperCase() : x))
      .join('')
      .split(char)
      .join('');
  }

  return underline
    ? identifier.replace(/_/g, '-')
    : [...identifier]
        .map((x) => (/[A-Z]/.test(x) ? `-${x.toLowerCase()}` : x))
        .join('');
}
