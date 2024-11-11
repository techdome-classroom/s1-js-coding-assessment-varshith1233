const countIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;

  const exploreIsland = (x, y) => {
    // Base case for recursion: if out of bounds or it's water, stop.
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 'W') return;

    // Mark the cell as visited by changing it to 'W'.
    grid[x][y] = 'W';

   
    exploreIsland(x + 1, y); 
    exploreIsland(x - 1, y); 
    exploreIsland(x, y + 1); 
    exploreIsland(x, y - 1); 
  };

  // Loop through each cell in the grid grid.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'L') { // Unvisited land cell found
        islandCount++; // Increment island count for each new island
        exploreIsland(i, j); // Explore the entire island
      }
    }
  }

  return islandCount;
};

module.exports = countIslands;
