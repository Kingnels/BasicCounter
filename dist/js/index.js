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

        if(styles.contains('decrease')){
            value.style.color = "red"
        }
        else if(styles.contains('increase')){
            value.style.color = "green"
        }
        else{
            value.style.color = "black"
        }
    })
})