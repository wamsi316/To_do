var data = document.getElementById('info');
var btn = document.getElementById('add');
var board = document.getElementById('to_do');
//var count =0;

btn.addEventListener('click',(event)=>{
    //count+=1;
    var para = document.createElement('p');
    para.classList.add('list-styling');
    var del = document.createElement('button');
    del.innerText='Delete';
    var x = data.value;
    para.innerText=data.value;
    if(x.trim().length>0){
        board.appendChild(para);
        para.appendChild(del);
        del.addEventListener('click',(event)=>{
            del.parentElement.innerHTML="";
            //count-=1;
        });
    }
    else{
        alert("Please Enter Some Text");
    }
});