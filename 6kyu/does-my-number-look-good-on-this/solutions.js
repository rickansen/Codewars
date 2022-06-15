const narcissistic = value => String(value).split('').map(x => x ** String(value).split('').length).reduce((a,b) => a+b) === value
