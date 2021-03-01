/*----- constants -----*/
const mark = {
    '0': 'empty',
    '1': 'x',
    '-1': 'o'
}



/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const msg = document.getElementById('msg');
const squares = [...document.querySelectorAll('#board > div')];
const replayBtn = document.querySelector('button');

/*----- event listeners -----*/
document.getElementById("board")
    .addEventListener('click', handleDrop);
 
// replayBtn.addEventListener('click', init);


/*----- functions -----*/
init();

function handleDrop(evt){      
    console.log(evt.target)

}

function init(){
    //initalize all state
    board = [
        [0, 0, 0], //column 0
        [0, 0, 0], //column 1
        [0, 0, 0]  //column 2
    ]
    turn = 1;
    winner = null;


    render();
}
function render(){
    //render the board
    board.forEach(function(colArr, colIdx){
        //iterate over the col array to access square value
        colArr.forEach(function(squareValue, rowIdx){
            const div = document.getElementById(`c${colIdx}r${rowIdx}`)
            document.querySelector('div').innerHTML = mark[squareValue]
        })
        
    });
        

}