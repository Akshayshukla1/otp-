const a=document.querySelector('.a')
const b=document.querySelector('.b')
const c=document.querySelector('.c')
const d=document.querySelector('.d')
const form=document.querySelector('form')
const div=document.querySelector('div')
// Function to limit the input length
window.document.body.addEventListener('keypress',()=>{
    a.focus()
})
function limitInputLength(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
  



a.addEventListener('input',(e)=>{
    

    b.focus()
})
b.addEventListener('input',()=>{
    c.focus()
})

c.addEventListener('input',()=>{
    d.focus()
})
d.addEventListener('input',()=>{
    // form.submit()
  setTimeout(()=>{
    alert("form submitted")
  },.9000)
})

