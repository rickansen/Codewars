function fruit(reels, spins){
    let result = spins.map((x,y) => reels[y][x])
    let items = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
    let diff = result.find(x => result.indexOf(x) === result.lastIndexOf(x))

    return new Set(result).size === 1 ? (10 - items.indexOf(result[0])) * 10 : new Set(result).size === 3 ? 0 : diff === 'Wild' ? (10 - items.indexOf(result.find(x => x !== 'Wild'))) * 2 : 10 - items.indexOf(result.find(x=> x !== result.find(x => result.indexOf(x) === result.lastIndexOf(x)) ) )
}

reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [0,0,0];
console.log(fruit([reel,reel,reel],spin),100, "Should return: '100'");

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
spin1 = [5,4,3];
console.log(fruit([reel1,reel2,reel3],spin1),0, "Should return: '0'");

reel4 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
reel5 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
reel6 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
spin2 = [0,0,1];
console.log(fruit([reel4,reel5,reel6],spin2),3, "Should return: '3'");

reel7 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
reel8 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
reel9 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
spin3 = [0,5,0];
console.log(fruit([reel7,reel8,reel9],spin3),6, "Should return: '6'");

reel10 = ['Shell','Seven','King','Bell','Cherry','Jack','Queen','Wild','Bar','Star'];
reel11 = ['Cherry','Bar','Jack','Bell','Seven','Shell','Queen','Star','Wild','King'];
reel12 = ['Shell','Bell','Cherry','Queen','King','Wild','Star','Seven','Bar','Jack'];
spin4 = [ 7,8,1];
console.log(fruit([reel10,reel11,reel12],spin4),10, "Should return: '10'");

