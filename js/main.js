/*----- constants -----*/




/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const msg = document.getElementById('msg');
const squares = [...document.querySelectorAll('#board > div')];
const replayBtn = document.querySelector('button');

/*----- event listeners -----*/
// document.querySelectorAll('div')
//   .addEventListener('click', evt);

// replayBtn.addEventListener('click', init);


/*----- functions -----*/
init();

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

}