const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `17`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

const dp = [0, 1]

for(let i = 2; i <= input; i++) {
  dp[i] = dp[i-2] + dp[i-1];
}

let result = dp[input];

// 풀이 작성
console.log(result);