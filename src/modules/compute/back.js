
// 回溯算法


{

    function ratInAmaze(maze) {
        let mazeLen = maze.length;

        let isSafe = (maze,x,y) => {

            if(x<mazeLen && y<mazeLen && maze[x][y]!==0){
                return true;
            }

            return false;
        };

        let findPath = (maze,x,y,solution) => {

            if(x===mazeLen-1 && y===mazeLen-1){
                solution[x][y] = 1;
                return true;
            }


            if(isSafe(maze,x,y)){
                solution[x][y] = 1;

                if(findPath(maze,x+1,y,solution)){
                    return true;
                }

                if(findPath(maze,x,y+1,solution)){
                    return true;
                }

                solution[x][y] = 0;
                return false;
            }


            return false;
        };



        let solution = [];
        for (let i=0,j=maze.length;i<j;i++) {
            solution[i] = [];

            for (let m=0,n=maze[i].length;m<n;m++) {
                solution[i][m] = 0;
            }

        }

        console.log('solution', solution);

        if(findPath(maze,0,0,solution)){
            return solution;
        }



    }

    //todo test
    let a1 = [
        [1,0,0,0],
        [1,1,1,1],
        [0,0,1,0],
        [0,1,1,1],
    ];
    console.log('ratInAmaze', ratInAmaze(a1));


}