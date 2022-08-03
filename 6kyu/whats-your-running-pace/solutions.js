function runningPace(distance, time){
    let min =  +time.split(':')[0]  + (+time.split(':')[1] / 60) / distance
    if (String(min).includes('.')) {
        let length = String(min).split('.')[1].length 
        return min / distance
    } else {
        return 'whole'
    }
}

/*
    distance: km
    time: minutes:seconds
    pace: time to complete one kilometre (minutes/km)
    
    seconds * (1 min/60 seconds)

    60 seconds * (1/60) = 1 minute
    90 seconds * (1/60) = 1.5 minutes
    ...

    First convert mm:ss to minutes
    Divide time in minutes / distance travelled
*/

console.log(
    runningPace(1, "3:15"), "3:15");
console.log(
    runningPace(5, "25:00"), "5:00");
console.log(
    runningPace(15, "75:00"), "5:00");
console.log(
    runningPace(2.51, "10:43"), "4:16");
console.log(
    runningPace(4.99, "22:32"), "4:30");
console.log(
    runningPace(0.2, "0:38"), "3:10");
console.log(
    runningPace(42.195, "122:57"), "2:54");
console.log(
    runningPace(1, "1:30"), "2:54");