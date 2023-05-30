const buttonOpen = document.querySelectorAll('#button');
const answer = document.querySelectorAll('.answer');
const imgarrow = document.querySelectorAll('.img');
const boldText = document.querySelectorAll('.boldText');
const buttonArray = new Array(buttonOpen.length);

function openClose (place) {
    if(buttonArray[place]==1){
        answer[place].classList.add('answer');
        imgarrow[place].classList.remove('imgarrow');
        boldText[place].classList.remove('bold');
        buttonArray[place]=0;
    }else{
        answer[place].classList.remove("answer");
        imgarrow[place].classList.add('imgarrow');
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