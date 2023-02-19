// 데이터 값 출력
window.onload = () => {

    // 버튼 가져오기
    const btnAllView = document.querySelector('.btnAllview');
    console.log(btnAllView);

    // 버튼 클릭 시 할일 처리
    btnAllView.addEventListener('click',() => {

        //할 일 처리 --> 로컬스토리지 데이터 값들을 가져와 출력.
        const getData = localStorage.getItem('background-color');
        console.log(getData);

    });
}