const countIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;

  const exploreIsland = (x, y) => {
    
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 'W') return;

  
    grid[x][y] = 'W';

   
    exploreIsland(x + 1, y); 
    exploreIsland(x - 1, y); 
    exploreIsland(x, y + 1); 
    exploreIsland(x, y - 1); 
  };

  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'L') { 
        islandCount++; 
        exploreIsland(i, j);
      }
    }
  }

  return islandCount;
};

module.exports = countIslands;
