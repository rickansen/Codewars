const encrypt = (text, rule) =>
  [...text]
    .map((x) => String.fromCharCode((x.charCodeAt() + rule) % 256))
    .join('');
