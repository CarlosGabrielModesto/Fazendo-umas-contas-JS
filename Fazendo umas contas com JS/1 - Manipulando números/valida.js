alert('Seja bem-vindo(a) ao meu site!')
function calcular() {
    let n1 = Number(prompt('Digite um número de tipo inteito: '))
    let res = document.querySelector('section#res')
    res.innerHTML = `<p>O quadrado de ${n1} é ${n1 * n1} e o dobro é ${n1 * 2}!</p>`
}