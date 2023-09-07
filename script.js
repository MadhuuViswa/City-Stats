const button = document. querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('Wrapper').appendChild(resultdiv)

button.addEventListener('click', displayStats)

function displayStats(){
  

     const input = document.getElementById("input")
     const city = input.options[input.selectedIndex].value
     let population = 0, literacyRate = 0, language = '', Food =" "
     switch(city){
        case 'Banglore':
            population = 9000045
            literacyRate = 89.57
            language = 'Kannada'
            Food = "Thali"
            break
        case 'Chennai':
            population = 10895711
            literacyRate = 91.50
            language = 'Tamil'
            Food = "Idhly"
            break
        case 'Cochin':
            population = 6578400
            literacyRate = 70.15
            language = 'Malayalam'
            Food = "Puttu"
            break
        case 'Hydrabad':
            population = 9580945
            literacyRate = 88.15
            language = 'Telugu'
            Food = "Briyani"
            break
         
     }

     let text = `<br>The Indian city of ${city} has a population of ${population} <br> and their food is ${Food}.<br> <br> The Language is ${language} and literacy rate is ${literacyRate}%.`


     document.getElementById('result').innerHTML = text


}