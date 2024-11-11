
  const decodeTheRing = function (message, pattern) {
    const m = message.length;
    const n = pattern.length;
  
    // DP table with (m+1) rows and (n+1) columns
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  
    // Empty pattern matches an empty message
    dp[0][0] = true;
  
   
    for (let j = 1; j <= n; j++) {
      if (pattern[j - 1] === '*') {
        dp[0][j] = dp[0][j - 1];
      }
    }
  
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (pattern[j - 1] === message[i - 1] || pattern[j - 1] === '?') {
          // Match a single character or '?'
          dp[i][j] = dp[i - 1][j - 1];
        } else if (pattern[j - 1] === '*') {
          // '*' can match an empty sequence or one or more characters
          dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
        }
      }
    }
  
    // The result is whether the entire pattern matches the entire message
    return dp[m][n];
  };
  
  module.exports = decodeTheRing;
  