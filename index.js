function dicee(){
    var dice1 = Math.random() * 6;
    var dice2 = Math.random() * 6;
    dice1 = Math.floor(dice1) + 1;
    dice2 = Math.floor(dice2) + 1;
    var dice1ImagePath = "images/" + "dice" + dice1 + ".png";
    var dice2ImagePath = "images/" + "dice" + dice2 + ".png";

    if(dice1 > dice2)
        document.querySelector("h1").outerHTML = "<h1>🚩 Player1 Won!</h1>";
    else if (dice1 < dice2)
        document.querySelector("h1").outerHTML = "<h1>Player2 Won! 🚩</h1>";
    else
        document.querySelector("h1").outerHTML = "<h1>🚩 Draw!  🚩</h1>";

    document.querySelector(".dice .img1").setAttribute("src", dice1ImagePath);
    document.querySelector(".dice .img2").setAttribute("src", dice2ImagePath);
}

dicee();