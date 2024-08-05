/*
1- make the board
2- make the player
3- make the loop in the draw function
4- use the text function
5- we will fill the whole canavs for that we use the width and the height
6- I will use the textSize to make it bigger. 
Note: you will not se the board at alle if you 
do  not chnage the i to j
     let x=w*i;
     let y=h*i; 
7- we should draw it a circel, for that reason we will use the ellipse. we use the if and the else if statment for that, we use also the noFill()   
8- we need to offset all of those spot.
let x=w*i;
let y=h*j; 
have to be like that
let x=w*i+w/2;
let y=h*j+h/2; 
- we draw the diagram: note it have to be like that x+h and y+h. 
- this part of the code was wrong it have to be 
like that:  
 line(x,y,x+w,x+h);
 line(x+w,y,x,y+h); 
 in the first line, it have to be y insted of x+h
- I can see the O 
- now we should add the ellipseMode. 

- We make an variable that called xr. 
- That variabel will x`s radisus, 
- and we put that here in this code. 
   line(x-xr,y-xr,x+xr,y+xr);
      line(x+xr,y-xr,x-xr,y+xr);  
 
 we delete the ellipseMode
 and we add that ellipse(x,y,w/2);
 
 - we change the i loop to j loop 
   and the j loop to i loop 
   
   
   ------------------------------------
Now the second part will focus on playing the game. so we will now make the variable for the game. 

1- The first we have to do is make the variabel that will make for playing the game
2- The second we will use the random to pick random player every time we play the game
3- The third thing we will do is change the variabel to array, so we make the refecating 
4- and when we change it to the array it become better. and remmber to chnage it in every place the 0 is the x and the 1 is the O
5 - remmeber to change this variable in all the places otherwise it will make some mistake. 
6- refect som code insted of having code that is not working. 
 /*It was like before we eneter the second part of the coding 
  if(random(1)<0.5){
  currentPlayer=players[0];
  }else{
  currentPlayer=players[1];
  }
7- Now we will draw the lines to this board.

IMPORTNAT: all the code that we wrote it was just to make the board and makeing the player ready now we have to enter the third part whic is making the game interactive.The code here is just play between the AI and AI. 


Third part: 
1- We will make the nested loop.
2- We will make the avilable array for each avilabe spot.
3- right now evey pair of the index values of that grids is available. 
4- Now lets make the function which we called nextTurn
5- make an variable that called index, that we will remove later. index is random nummber between the 0 and the length of how many things are avilable.
6- And the spot is going to take that array availablea and remove that index value.The splice function will remove it and put it in the spot. 
spot is an array with two value 0 and 1.
in the board[i][j] we will make the currentPlayer
and the current player should take the random player.

*/

let board=[
    ['','',''],
    ['','',''],
    ['','','']
  ];
  
  let w; //= width; /3;
  let h; //= height /3
  
  let ai='x';
  let human= 'O';
  let currentPlayer=human;
  
  
  function setup() {
    createCanvas(400, 400);
    w=width/3;
    h=height/3;
    // here have to be function that called bestMove();
    bestMove();
  }
  
  function equals3(a,b,c){
    return a==b && b==c && a !='';
  }
  // Make the function that called checkWinner.
   function checkWinner(){
     let winner=null;
     // horizontal 
     for(let i=0;i<3;i++){
      if(equals3(board[i][0],board[i][1],board[i][2])){
        winner=board[i][0];
      } 
     }
     
     // now we make the Vertical 
     for(let i=0;i<3;i++){
      if(equals3(board[0][i],board[1][i],
      board[2][i])){
        winner=board[0][i];
        
      } 
     }
     
     // Diagnoal 
     if(equals3(board[0][0],board[1][1],
       board[2][2])){
       winner=board[0][0];
     }
     if(equals3(board[2][0],board[1][1],board[0][2])){
       winner=board[2][0];
     }
     let openSpots=0;
     for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
       if(board[i][j]==''){
        openSpots++;
       }  
      }  
     }
     // her it return null or tie or winner. 
     if(winner==null && openSpots==0){
      return 'tie';
     }else{
       return winner;
     }
   }
  
  function mousePressed(){
   if(currentPlayer==human){
     // Human make turn
     let i=floor(mouseX/w);
     let j=floor(mouseY/h);
     // if valid turn
     if (board[i][j] == '') {
      board[i][j]=human;
       currentPlayer=ai;
       bestMove();
     }
   } 
  }
  
  function draw() {
    background(220);
    strokeWeight(4);
    line(w,0,w,height);
    line(w*2,0,w*2,height);
    line(0,h,width,h);
    line(0,h*2,width,h*2);
    for(let j=0;j<3;j++){
    for(let i=0;i<3;i++){
    let x=w*i+w/2;
    let y=h*j+h/2;
    let spot = board[i][j];
      textSize(32);
      let r=w/4;
    if(spot==human){
      noFill();
      ellipse(x,y,r*2);
    }else if(spot==ai){
     line(x-r,y-r,x+r,y+r);
     line(x+2,y-r,x-r,y+r); 
    }  
    }  
    }
    
    let result=checkWinner();
    if(result !=null){
      noLoop();
      let resultP=createP('');
      resultP.style('font-size','32pt');
      if(result=='tie'){
        resultP.html('Tie');
      }else{
        resultP.html(`${result}wins`)
      }
    }
  }