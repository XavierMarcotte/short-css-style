const ul = document.querySelector('ul');
const number = ul.children.length;
 console.log("🚀 ~ file: index.js:10 ~ number:", number)




for (i=1, j=0.2; i<=number; i+=1, j+=0.2) {
    const element = document.createElement('style');
    element.textContent = `ul li:nth-child(${i}) {
        animation-delay: ${j}s;}`
    document.head.appendChild(element);
}

 