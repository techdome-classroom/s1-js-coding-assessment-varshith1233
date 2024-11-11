const initializeDPTable = (messageLength, pattern) => {
  const patternLength = pattern.length;
  const dp = Array.from({ length: messageLength + 1 }, () => Array(patternLength + 1).fill(false));

  // Base case: empty pattern matches empty message
  dp[0][0] = true;

  // Initialize dp for patterns that start with '*'
  for (let j = 1; j <= patternLength; j++) {
    if (pattern[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  return dp;
};

const decodeTheRing = (message, pattern) => {
  const messageLength = message.length;
  const patternLength = pattern.length;

  const dp = initializeDPTable(messageLength, pattern);

  
  for (let i = 1; i <= messageLength; i++) {
    for (let j = 1; j <= patternLength; j++) {
      if (pattern[j - 1] === message[i - 1] || pattern[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pattern[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[messageLength][patternLength];
};

module.exports = decodeTheRing;
