function media() {
    let nom = prompt('Insira o nome do aluno?') 
    let n1 = Number(prompt(`Insira a primeira nota de ${nom}?`))
    let n2 = Number(prompt(`Insira a segunda nota de ${nom}?`))
    med = (n1 + n2) / 2

    let res = document.getElementById('res')
    res.innerHTML = `<p>Média final de <mark>${nom}</mark>:</p>`
    res.innerHTML += `<p>Notas utilizadas para calcular a média: <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final resultante é de: <mark>${med}</mark>!</p>`
}