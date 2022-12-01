const ocena = document.getElementById('wynik')
const nowaOcena = sessionStorage.getItem('cachedValue')

ocena.innerText = nowaOcena
