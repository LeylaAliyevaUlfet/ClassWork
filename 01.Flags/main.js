let row=document.querySelector(".row")
let input=document.querySelector("input")
let form=document.querySelector("form")
let select=document.querySelector("select")

const Api="https://restcountries.com/v2/all"
async function getAllData(){
    let res= await axios(Api)
    let data=await res.data
    drawCountries(data)

}
window.addEventListener('load',function(){
    getAllData()
})
function drawCountries(arr){
row.innerHTML=""
arr.forEach(item=>{
    row.innerHTML+=`
    <div class="col col-3">
                <div class="card" style="height: 25rem;">
                    <img src="${item.flags.svg}" class="card-img-top" alt="..." style="height: 10rem">
                    <div class="card-body">
                    <h4 class="card-title"> ${item.name}</h4>
                        <h5 class="card-title">population: ${item.population}</h5>
                        <h5 class="card-title">region: ${item.region}</h5>
                        <h5 class="card-title">capital: ${item.capital}</h5>
                    </div>
                </div>

            </div>
        </div>
    
    `
})
}

input.addEventListener("input", async function(e){
    
    let res=await axios(Api)
    let data=await res.data
    let aysun= data.filter(el=>{
      return  `${el.name.toLowerCase()}`.includes(`${e.target.value}`)
    })
    drawCountries(aysun)
})

select.addEventListener("change", async function(e){
     let res= await axios(Api)
     let data= await res.data
     let forSelect=data.filter(item=>{
      return `${item.region}`.includes(`${e.target.value}`)
     })
     drawCountries(forSelect)
})
