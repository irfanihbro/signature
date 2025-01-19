const name = document.querySelector('#First-name')
const sign = document.querySelector('.signature-main')
const signButton = document.querySelector('.sign')
const uppercase = document.querySelectorAll('.letter-bank .up')
const lowercase = document.querySelectorAll('.letter-bank .lo')
const signedBy = document.querySelector('.signed-by')
const modal = document.querySelector('.modal')

name.addEventListener("keydown", (event) => {
  setTimeout(function() {
    if (!name.value) {
      modal.classList.remove('active');
      sign.innerHTML = '';
    } else {
      modal.classList.add('active');
    }
  }, 50);
  
  if (event.key === "Enter") {
    event.preventDefault();
    signButton.click();
  }
})

signButton.addEventListener("click", () => {
  sign.innerHTML = ''
  const value = name.value
  const letters = value.split('')
  letters.forEach((item, i) => {
    draw(item, true)
  })
})

function draw(key, animate) {
  if (key == " ") {
    const space = document.createElement("div");
    space.style.minWidth = '12px'
    sign.appendChild(space)
  } else {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    for (i = 0; i < alphabet.length; i++) {
      var item = alphabet[i]

      if (key.toLowerCase() == item) {
        const letter = document.createElement("div");
        if (key == item.toUpperCase()) {
          letter.innerHTML = uppercase[i].innerHTML
          letter.classList.add('up')
        } else {
          letter.innerHTML = lowercase[i].innerHTML
          letter.classList.add('lo')
        }
        letter.classList.add(item)
        if (animate) {
          setTimeout(function() {
            letter.querySelector('svg path').style.strokeDashoffset = '0'
          }, 50);
        } else {
          letter.querySelector('svg path').style.strokeDashoffset = '0'
        }      
        sign.appendChild(letter)
      }
    }
  }
}
