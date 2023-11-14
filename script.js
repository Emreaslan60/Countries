


 let sortedCountries=countries_data.sort((a,b)=> b.population-a.population)

 const btn=document.getElementById('button')
 const title=document.querySelector('.total-pop')
 const container=document.querySelector('.container')

 function calcWorldPop(){
    let toplam=0
    sortedCountries.forEach(country=>{
        toplam+= country.population
    })
    return toplam
 }

 btn.addEventListener('click',()=>{
    sortedCountries.forEach(country=>{
    const div=document.createElement('div')
    const name=document.createElement('h2')
    const capital=document.createElement('h3')
    const flag=document.createElement('img')
    const population=document.createElement('p')
    const percent_of_pop =document.createElement('p')

        let percent=Number((country.population/calcWorldPop())*100)

        let percent1
        if(percent>=1){
            percent1=percent.toFixed(2)
        }else{
            percent1=percent
        }

    name.innerHTML=country.name
    capital.textContent=country.capital
    flag.setAttribute('src',country.flag)
    population.textContent=country.population
    percent_of_pop.textContent=`Bu ülkenin nüfusunun  dünya nüfusuna oranı: ${percent1}`

        div.style.textAlign='center'
      div.style.border='1px solid black' 
      flag.style.width='50px'

      percent>= 3 ? percent_of_pop.style.color='red': percent_of_pop.style.color='green'

      title.textContent=`Toplamda ${  sortedCountries.length} ülke var. Toplam nüfus: ${calcWorldPop()}`
      div.appendChild(name)
      div.appendChild(capital)
      div.appendChild(flag)
      div.appendChild(population)
      div.appendChild(percent_of_pop)
      container.appendChild(div)

    })
    
 })