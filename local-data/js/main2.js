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

        //키(key) 만 출력하기
        console.log(localStorage.key(0));

        console.log(localStorage.length);
   

        let ar = new Array();
        let result = "";

        ar.push({name:'홍길동',email:'1@hong.com',age:'22',pastime:'hi'});
        ar.push({name:'홍길',email:'2@hong.com',age:'22',pastime:'hi'});
        ar.push({name:'홍',email:'3@hong.com',age:'22',pastime:'hi'});
        ar.push({name:'동',email:'4@hong.com',age:'22',pastime:'hi'});
        ar.push({name:'길동',email:'5@hong.com',age:'22',pastime:'hi'});

        console.log(ar[0].name);
        console.log(ar[0].email);
        console.log(ar[0].age);
        console.log(ar[0].pastime);

        for(const i in ar){
            // console.log(i);
            result+='<tr>';
            result+='<td>'+ar[i].name+'</td>';
            result+='<td>'+ar[i].email+'</td>';
            result+='<td>'+ar[i].age+'</td>';
            result+='<td>'+ar[i].pastime+'</td>';
            result+='</tr>';
        }
        console.log(result);

        let hTody = document.getElementById('htmlTbody');
        console.log(hTody);

        //Append
        $('#htmlTbody').append('result');
    });
}