let newmusic = new Audio("music.mp3");
let yourturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
gameisovernow = false;
newmusic.play();
turn = "O";


let newturn = () => {
  return turn === "X" ? "O" : "X";
};

// GAMELOGIC


const checking = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let playerwin = [
    [0, 1, 2, 0, 6, 0],
    [3, 4, 5, 0, 16, 0],
    [6, 7, 8, 0, 26, 0],
    [0, 3, 6, -10, 16, 90],
    [1, 4, 7, 0, 16, 90],
    [2, 5, 8, 10, 16, 90],
    [0, 4, 8, 0, 16, 45],
    [2, 4, 6, 0, 16, -45],
  ];
  playerwin.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "   is the Winner";
      gameisovernow = true;
      document
        .querySelector(".gif")
        .getElementsByTagName("img")[0].style.width = "200px";
        document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw ) rotate(${e[5]}deg)`
        // document.querySelector(".line").style.width="100%"
        
    // }
        const x = window.matchMedia("(max-width:800px)")
         runit(x);
        x.addEventListener(runit)
        function runit(x){
          gameisovernow = true
          if(x.matches){
            document.querySelector(".line").style.width="70%"
            
          }
          
          else{
            document.querySelector(".line").style.width="100%"
          }
        

          // FOR LINES MATRIX 
        //   const xy = window.matchMedia("(max-width:800px)")
        //  runit(xy);
        // xy.addEventListener(runit)
        // function runit(xy){
        //   gameisovernow = true
        //   if(xy.matches){
        //       [
        //         [0, 1, 2, 16, -9.5, 0],
        //         [3, 4, 5, 17, 17, 0],
        //         [6, 7, 8, 17, 43, 0],
        //         [0, 3, 6, -27, 31, 90],
        //         [1, 4, 7, 0.5, 31, 90],
        //         [2, 5, 8, 27.5, 31, 90],
        //         [0, 4, 8, 0, 31, 45],
        //         [2, 4, 6, 1, 31, -45],
        //       ]
        //       document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw ) rotate(${e[5]}deg)`
             
          
            
        //   }
         
      }
        
    }
  });
};

// TURN
let boxes = document.getElementsByClassName("box ");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = newturn();
      yourturn.play();
      checking();
      // newmusic.play();
      if (!gameisovernow) {
        document.getElementsByClassName("info")[0].innerText =
          "NOW   " + turn + "   TURN";

      }

    }
  });
});

// RESET

reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");

  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
    document.querySelector(".gif").getElementsByTagName("img")[0].style.width =
      "0px";

    gameisovernow = false;
    document.getElementsByClassName("info")[0].innerText =
      "NOW   " + turn + "   TURN";

    turn = "O";
    document.querySelector(".line").style.width=""
    
  });
});
