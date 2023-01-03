


var res_url="https://restcountries.com/v2/all";
async function call(){
    var fetch_url= await fetch(res_url);
    var res_data = await fetch_url.json();
    console.log(res_data);
    // // var nameres=data.map((e)=>e.name);



   
  const cardsContainer = document.getElementById('cards-container');

    for (let i of res_data) {
        
        // console.log(i.latlng[0])
        // console.log(res_data.indexOf(i))
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<div class="header"> <h5 class="card-title">${i.name}</h5></div>
          <div class="card-body">
           <p class="card-cap">Capital = ${i.capital}</p>
            <p class="card-text">Country Code = ${i.alpha3Code}</p>
            <p class="card-region">Region = ${i.region}</p>
            <img src=${i.flag} id="image"><br>
            <button type="button" class="btn btn-primary  " id="${res_data.indexOf(i)}">check for weather</button>
          </div>
          <div class="card-footer">
          <p id="weath"></p>
          <p id="claimate"></p>
        `;
        cardsContainer.appendChild(cardElement);
       
      }

     
      var btn_check = document.getElementsByClassName('btn btn-primary')
      console.log(btn_check)
      
      btn_check.addEventListener('click',()=>
    {  
    // 
            var w = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${i.latlng[0]}&lon=${i.latlng[1]}&exclude={part}&appid=efcc0a4757ff10e8b97377bb729fd660`)
            .then((e)=>{
            return w.json()})
            .then((ele)=>{
                console.log(ele)
            })
            console.log("clicked")
        // }
       
    })
      
    }
call()



  
  