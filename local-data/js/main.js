// 주요 메서드 2개
// 값 저장하기 --> localStorage.setItem('key',value);
// 값 가져오기 --> localStorage.getItem('key');
window.onload = () => {
    const btnSLD = document.querySelector('.btnSetLocalData');
    console.log(btnSLD);

    // input 텍스트값
    const input = document.querySelector('input');

    //Set Data 버튼 클릭 시
    btnSLD.addEventListener('click', function(){

        //할 일 처리 --> 입력한 텍스트 값 가져오기
        const inputValue = input.value;
        console.log(inputValue);

        //local에 저장
        localStorage.setItem('userid',inputValue);
        input.value = "";

    });
    //get
    const btnGLD = document.querySelector('.btnGetLocalData');
    console.log(btnGLD);

    btnGLD.addEventListener('click', function(){

        //할 일 처리 --> 해당 키의 로컬데이터가 있으면 가져오기
        const getData = localStorage.getItem('userid');

        if(!getData){
            alert('데이터가 없다');
        }else{
            input.value = getData;
        }
    });

    // Remove 버튼 클릭 시
    const btnRLD = document.querySelector('.btnRemoveLocalData');

    btnRLD.addEventListener('click', function(){

        // 할 일 처리 --> 해당 키의 로컬 데이터 삭제
        localStorage.removeItem('userid');
        // alert('완료')
    });
}