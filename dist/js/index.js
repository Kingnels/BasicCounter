let count = 0
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('.count')

btns.forEach((x)=>{
     x.addEventListener('click', (e) => {
        // console.log(e.currentTarget.classList) => thid is used to access the current target
        const styles = e.currentTarget.classList
        if (styles.contains ('decrease')){
            count--
        }
        else if (styles.contains ('increase')){
            count++
        }
        else{
            count = 0
        }
        value.textContent = count

        if(count>0){
            value.style.color = "green"
        }
        else if(count < 0){
            value.style.color = "red"
        }
        else{
            count == 0
            value.style.color = "black"
        }
    })
})