
  const decodeTheRing = function (message, pattern) {
    const m = message.length;
    const n = pattern.length;
  
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  
    dp[0][0] = true;
  
   
    for (let j = 1; j <= n; j++) {
      if (pattern[j - 1] === '*') {
        dp[0][j] = dp[0][j - 1];
      }
    }
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (pattern[j - 1] === message[i - 1] || pattern[j - 1] === '?') {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (pattern[j - 1] === '*') {
          dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
        }
      }
    }
  
    return dp[m][n];
  };
  
  module.exports = decodeTheRing;
  