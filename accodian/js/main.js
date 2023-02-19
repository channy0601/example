window.onload = () => {

// container
const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
console.log(panelFaqContainer);

// answer
let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');
console.log(panelFaqAnswer);

//btnAllClose
const btnAllClose = document.querySelector('#btn-all-close');

btnAllClose.addEventListener('click', function(){
    console.log('모두닫기버튼클릭')
    //버튼 클릭시 처리할 일
    // let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');
    for(let i = 0; i < panelFaqAnswer.length; i++){
        panelFaqAnswer[i].classList.remove('active');
    }
});

//반복문 순회하면서 해당 제목 클릭시 콜백 처리
for(let i=0; i < panelFaqContainer.length; i++){

    panelFaqContainer[i].addEventListener('click',function(){

        //클릭시 처리할 일
        console.log('나 클릭' + i);
        

        //FAQ 제목 클릭 시 --> 본문이 보이게끔 --> active클래스추가
        panelFaqAnswer[i].classList.add('active');
    });

}

}