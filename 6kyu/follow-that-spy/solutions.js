// Solution 1: it's alrrr
function findRoutes(routes) {
    if (routes.length === 1) return routes[0].join(', ')
    let last = routes.filter(x => routes.findIndex(a => a[0] === x[1] ) === -1)
    let arr = []
    for (let i = 0; i < routes.length; i++) {
        if (i === 0) {
            arr.push(...last)
            continue
        }
       arr.push(routes.find(x => x[1] === arr[i-1][0]))
    }
    return arr.reverse().map( (x,y) => y !== arr.length - 1 ? [x[0]] : x).reduce((a,b) => a.concat(b)).join(', ')
  }

  // Test Cases

  var routes1 = findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]);
  console.log(routes1, "MNL, TAG, CEB, TAC, BOR");

  var routes2 = findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]);
  console.log(routes2, "UK, GER, BEL, CAN");

  var routes3 = findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]);
  console.log(routes3, "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");

  var routes4 = findRoutes([["Agra", "Tokyo"], ["Seoul", "Ljubljana"], ["Ljubljana", "Wroclaw"], ["Wroclaw", "Nashville"], ["Nashville", "Amsterdam"], ["Amsterdam", "Hull"], ["Hull", "Vancouver"], ["Vancouver", "Agra"], ["Tokyo", "Manila"]]);
  console.log(routes4, "Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila");

  var routes5 = findRoutes([["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]]);
  console.log(routes5, "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal");

  var routes6 = findRoutes([["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]]);
  console.log(routes6, "USA, BRA, KSA, UAE, JPN, PHL");

  var routes7 = findRoutes([["HQ", "SH"]]);
  console.log(routes7, "HQ, SH");

  var routes8 = findRoutes([["San Policarpo", "Oras"], ["Balangiga", "Lawaan"], ["Borongan", "Maydolong"], ["Jipapad", "Maslog"], ["Balangkayan", "Llorente"], ["Mercedes", "Guiuan"], ["Taft", "Sulat"], ["Sulat", "San Julian"], ["Arteche", "San Policarpo"], ["Oras", "Dolores"], ["Dolores", "Can-avid"], ["Can-avid", "Taft"], ["San Julian", "Borongan"], ["Maydolong", "Balangkayan"], ["Llorente", "Hernani"], ["Hernani", "General MacArthur"], ["General MacArthur", "Giporlos"], ["Giporlos", "Balangiga"], ["Lawaan", "Salcedo"], ["Salcedo", "Mercedes"], ["Maslog", "Arteche"]]);
  console.log(routes8, "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan");
