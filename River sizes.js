function riverSizes(matrix) {
    const sizes = []
    const visited = matrix.map(row => row.map(value => false))
    for (let i=0; i<matrix.length; i++){
      for (let j=0; j<matrix[i].length; j++){
        if(visited[i][j]) continue
        traverseNode(i, j, visited, matrix, sizes)
      }
    }
    return sizes
  }
  
  function traverseNode(i, j, visited, matrix, sizes) {
    let currentRiverSize = 0
    const nodesToExplore = [[i,j]]
    while(nodesToExplore.length){
      const currentNode = nodesToExplore.pop()
      i = currentNode[0]
      j = currentNode[1]
      if(visited[i][j]) continue
      visited[i][j] = true
      if(matrix[i][j] === 0) continue
      currentRiverSize++
      const unvisitedNeighbors = getUnvisitedNeighbors(i,j,visited,matrix)
      for (const neighbor of unvisitedNeighbors){
        nodesToExplore.push(neighbor)
      }
    }
    if(currentRiverSize > 0) sizes.push(currentRiverSize)
  }
  
  function getUnvisitedNeighbors(i,j,visited,matrix) {
    const unvisitedNeighbors = []
    if(i > 0 && !visited[i-1][j]) unvisitedNeighbors.push([i-1, j])
    if(i < matrix.length -1 && !visited[i+1][j]) unvisitedNeighbors.push([i+1, j])
    if(j > 0 && !visited[i][j-1] && !visited[i][j-1]) unvisitedNeighbors.push([i, j-1])
    if(j < matrix[0].length -1 && !visited[i][j+1]) unvisitedNeighbors.push([i, j+1])
    return unvisitedNeighbors
  }