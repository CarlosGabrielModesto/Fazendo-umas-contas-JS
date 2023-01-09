function somar() {
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número:'))
    soma = n1 + n2

    let res = document.querySelector('section#res')
    res.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>`
}