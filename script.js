const point = document.querySelector('.rating_points')
const ratings = point.querySelectorAll('button')
const submit = document.getElementById('submit')

for (const rating of ratings) {
  rating.addEventListener('click', function () {
    rating.style.backgroundColor = 'rgb(251, 131, 18)'
    rating.style.color = 'white'
  })

  rating.addEventListener('click', (e) => {
    const nowaOcena = e.target.id
    sessionStorage.setItem('cachedValue', nowaOcena)
  })
}

submit.addEventListener('click', function () {
  submit.style.backgroundColor = 'white'
  submit.style.color = 'rgb(251, 131, 18)'

  window.open('thank_you.html', '_self')
})
