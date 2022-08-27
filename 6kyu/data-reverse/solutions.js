const dataReverse = data => data.map((x,y,z) => z[ (z.length - ( 8 * ( (~~(y / 8)) + 1) ) + (y % 8) ) ] )
