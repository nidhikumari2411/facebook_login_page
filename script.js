const  password = document.querySelector('.passwordInput');
const icon = document.querySelector('.icon');
const inputDate = document.querySelector('.inputDate');
const inputMonth = document.querySelector('.inputMonth');
const inputYear = document.querySelector('.inputYear');
const createBtn = document.querySelector('.createBtn');
const close = document.querySelector('.close');
const outerContainer = document.querySelector('.outerContainer');

const changeInputType = function(val){
    const parent = icon.closest('.passwordContiner');
    const child = parent.children[0]
    child.setAttribute('type', val)
}

let count = 1;
icon.addEventListener('click', function(){
    if(count === 0){
        icon.setAttribute('name', 'eye-off-outline')
        changeInputType('password')
        count++;
    }else{
        icon.setAttribute('name', 'eye-outline')
        changeInputType('text')
        count--;
    }

})
let dateHTML;
for(let i = 1; i <= 31; i++){
    if(i == 1){
        dateHTML = `<option value="${i}">${i}</option>`;
    }else{
        dateHTML += `<option value="${i}">${i}</option>`;
    }
}

let monthHTML;
const month = ['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
for(let i = 0; i < month.length; i++){
    if(i == 0){
        monthHTML =  `<option value="${month[i]}">${month[i]}</option>`
    }else{
        monthHTML +=  `<option value="${month[i]}">${month[i]}</option>`
    }
}

const year = new Date().getFullYear()
let yearHTML;
for(let i = year; i > 1904 ; i--){
    if(i == year){
        yearHTML =  `<option value="${i}">${i}</option>`
    }else{
        yearHTML +=  `<option value="${i}">${i}</option>`
    }
    
}

inputDate.insertAdjacentHTML('beforeend', dateHTML)
inputMonth.insertAdjacentHTML('beforeend', monthHTML)
inputYear.insertAdjacentHTML('beforeend', yearHTML)

createBtn.addEventListener('click', function(){
    outerContainer.style.display= 'flex';
})

close.addEventListener('click', function(){
    outerContainer.style.display = 'none'
})