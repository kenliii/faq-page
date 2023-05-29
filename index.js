const buttonOpen = document.querySelectorAll('#button');
const answer = document.querySelectorAll(".answer");
const imgArrow = document.querySelectorAll('.img');
const boldText = document.querySelectorAll('.boldText');
const buttonArray = new Array(buttonOpen.length);

function openClose (place) {
    if(buttonArray[place]==1){
        answer[place].classList.add('answer');
        imgArrow[place].classList.remove('imgArrow');
        boldText[place].classList.remove('bold');
        buttonArray[place]=0;
    }else{
        answer[place].classList.remove("answer");
        imgArrow[place].classList.add('imgArrow');
        boldText[place].classList.add('bold');
        buttonArray[place]= 1;
    }
}

for (let i =0; i <buttonOpen.length; i++){
    buttonArray[i] = 0;
    buttonOpen[i].addEventListener('click', function (){
        openClose(i);
    })
}