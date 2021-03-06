function handleSubmit(event) {
  event.preventDefault();
  console.log('Submitted Form');
  const form = document.querySelector('form');
  const newPet = {
    petName: form.elements.petName.value,
    petType: form.elements.petType.value,
    color: form.elements.color.value,
    age: form.elements.age.value,
  }

  fetch('https://ls-pet-boutique.web.app/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPet),
  })
    .then(response => response.json())
    .then(json => {
      form.innerHTML = `<h3>${json.message}</h3>`
      getPets()
    })
    .catch(err => {
      form.innerHTML = '<h3>Error sending pets</h3>'
    })
}

function getPets() {
    fetch('https://ls-pet-boutique.web.app/pets')
    .then(response => response.json())
    .then(data => {
      const petsDiv = document.getElementById('pets')
      const petsArray = data.map(pet => {
        return `<article>
          <h3> Pet Name: ${pet.petName}</h3>
          <h4> Type: ${pet.petType}</h4> 
          <p> Color: ${pet.color}</p> <p> Age: ${pet.age}</p> 
        </article>`
      })
      petsDiv.innerHTML = petsArray.join('')
    })
    .catch(err => console.log(err))
    }
    
    getPets()