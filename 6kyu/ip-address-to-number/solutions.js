// Solution 1

function ipToNum(ip) {
    return parseInt(ip.split('.').map(x => (+x).toString(2) ).map(x => x.length < 8 ? '0'.repeat(8-x.length) + x : x).join(''), 2)
}

function numToIp(num) {
    let binary = num.toString(2)
    let fourOctet = binary.length < 32 ? '0'.repeat(32 - binary.length) + binary : binary
    return Array(4).fill('').map( (x,y) => parseInt(fourOctet.slice(y * 8, y * 8 + 8), 2) ).join('.')
}

// Test Cases

console.log(
    ipToNum('192.168.1.1'), 3232235777);
console.log(
    ipToNum('10.0.0.0'), 167772160);
console.log(
    ipToNum('176.16.0.1'), 2953838593);

console.log(
    numToIp(3232235777), '192.168.1.1');
console.log(
    numToIp(167772160), '10.0.0.0');
console.log(
    numToIp(2953838593), '176.16.0.1');

console.log(
    numToIp(ipToNum('192.168.1.1')), '192.168.1.1');
console.log(
    numToIp(ipToNum('10.0.0.0')), '10.0.0.0');
console.log(
    numToIp(ipToNum('176.16.0.1')), '176.16.0.1');
console.log(
    ipToNum(numToIp(3232235777)), 3232235777);
console.log(
    ipToNum(numToIp(167772160)), 167772160);
console.log(
    ipToNum(numToIp(2953838593)), 2953838593);