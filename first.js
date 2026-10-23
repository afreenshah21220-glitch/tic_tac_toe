let boxes = document.querySelectorAll(".box"); //dom select html me jitny b .box class wale element hein 
let resetbtn = document.querySelector("#reset-btn"); //unsab ko uthao
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true; // ya game ko bata kis player ki turn h batata h -> true 0 ki turn -> false x ki

const winners = [  //winner array
    [0, 1, 2], //agr 0 1 2 same huwa to winner
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame = () => { //function game ko dubara start krna
    turn0 = true; //dubara 0 ki turn
    enableBoxes(); //sab button dubara enable
    msgcontainer.classList.add("hide");  //winner k msg hide
}

boxes.forEach((box) => { // ya hr box pr chalega ya loop 9 br chalega 
    box.addEventListener("click", () => { //jab sab user click kre to ander wala code chalao
        if(turn0) { //player o //agr 0 ki turn ha
            box.innerText = "o"  //button me 0 likh do         
            turn0 = false;  //next turn x ki 
        } else {   //player x 
            box.innerText = "x" //x likho
            turn0 = true; //ab 0 ki turn
        }                                    //is tara turn change huti rahti hein
        box.disabled = true;  //ik box pr sirf ik br click hu warna  repeat huga
        checkwinner(); //hr click k bd ya check krta hai loi jeeta ya ni
    });
});

const disableboxes = () => { //1 funtion bnya jisk nametha disable jb call huta h to winner mil jata h
    for(let box of boxes) { //boxes k andr jitne b buton hein un sab pr ik ik kr k jao
        box.disabled = true;  //hr button ko disablr krdo resul; dubara click ni huga
    }        
};

const enableBoxes = () => { //sab button pr loop
    for(let box of boxes) {
        box.disabled = false;  //dubara click hu sakta h
        box.innerText = ""; // sab box khali hein
    }
};

const showwinner = (winner) => { //ya funtion jb chlta jb winner mil jai /agr winner x to x ya on 0
    msg.innerText = `congratulation, winner is ${winner}`; //output
    msgcontainer.classList.remove("hide"); //hide class hata do
    disableboxes(); //winner mil gya ab koi click ni kr sakta
};

const checkwinner = () => {
    for (let pattern  of winners) {   //ya winner array ko ht pattern ko uthata h or chick keta h
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" &&  pos2val != "" && pos3val != "") { //phela check kro khali to ni
            if(pos1val === pos2val && pos2val === pos3val) { //agr 000 ya xxx to winner
                showwinner(pos1val); //agr o winner h to cong 
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame); //new game button banao resetgame() call hujai 
resetbtn.addEventListener("click", resetgame);
