const countIslands = function(grid) {
  if (!map || map.length === 0) return 0;

  let islandCount = 0;

  const exploreIsland = (x, y) => {
    // Base case for recursion: if out of bounds or it's water, stop.
    if (x < 0 || y < 0 || x >= map.length || y >= map[0].length || map[x][y] === 'W') return;

    // Mark the cell as visited by changing it to 'W'.
    map[x][y] = 'W';

    // Recursively visit adjacent cells in all four directions.
    exploreIsland(x + 1, y); // down
    exploreIsland(x - 1, y); // up
    exploreIsland(x, y + 1); // right
    exploreIsland(x, y - 1); // left
  };

  // Loop through each cell in the map grid.
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 'L') { // Unvisited land cell found
        islandCount++; // Increment island count for each new island
        exploreIsland(i, j); // Explore the entire island
      }
    }
  }

  return islandCount;
};

module.exports = countIslands;
