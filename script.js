let nameObj = document.getElementById('name');
let nameTxt = nameObj.innerText;
nameObj.innerText = "";

for (let char of nameTxt) {
    let chrSpan = document.createElement('span');
    chrSpan.className = 'name-chr';
    chrSpan.append(char)
    nameObj.append(chrSpan)


    chrSpan.addEventListener("mouseenter", () => {
        chrSpan.style.color = `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
        chrSpan.style.transition = '0.4s ease-out';
    });

    chrSpan.addEventListener('mouseleave', () => {
        chrSpan.style.color = "";
        
    })

}


