const directions = [[1,0], [-1, 0], [0, 1], [1, 0]]

const numIslands = (grid) => {
    if(!grid) return []
    let count = 0;

    for(let i=0 ;i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                bfs([i,j], grid)
                count++
            }
        }  
    }
}

let dfs = (start, grid) => {
    let stack = [start];
    let cache = []
    while(!stack.isEmpty()){
        let [r, c] = stack.shift()
        grid[start[0], start[1]] = '0'
        for(const [dx, dy] of directions){
            let uRow = r + dx,
            uCol = c + dy;
            if (nRow < 0 || nCol < 0 
                || uRow >= grid.length || uCol >= grid[0].length
                || grid[nRow][nCol] === '0') {
                continue
            }
            grid[uRow][uCol] = '0';
            cache.push([nRow,nCol]) 
        }
        if (queue.length === 0 && cache.length > 0) {
            queue.push(...cache)
            cache = []
        }
    }
}