let circulo = document.querySelector('.circulo')
let imgCopo = document.querySelector('#copoMaior')
let copoVerde = document.querySelector('#copoVerde')
let copoRosaClaro = document.querySelector('#copoRosaClaro')
let copoRosa = document.querySelector('#copoRosa')

copoVerde.addEventListener('click', () => {
    imgCopo.src = 'img/img1.png';
    circulo.style.background = '#017143';
})

copoRosaClaro.addEventListener('click', () => {
    imgCopo.src = 'img/img2.png';
    circulo.style.background = '#eb7495';
})

copoRosa.addEventListener('click', () => {
    imgCopo.src = 'img/img3.png';
    circulo.style.background = '#d752b1';
})