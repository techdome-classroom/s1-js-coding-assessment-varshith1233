
const getTotalIsles = function (grid) {

    if (!grid || grid.length === 0) return 0;
  
    let islandsCount = 0;
  
    const dfs = (i, j) => {
      // If out of bounds or water, stop the DFS.
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 'W') return;
  
      grid[i][j] = 'W';
  
      
      dfs(i + 1, j); 
      dfs(i - 1, j); 
      dfs(i, j + 1); 
      dfs(i, j - 1); 
    };
  

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 'L') { 
          islandsCount++; 
          dfs(i, j); 
        }
      }
    }
  
    return islandsCount;
  };
  
module.exports = getTotalIsles;