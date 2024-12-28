// var grate_people=['albert','hello']

// let  list1=document.getElementById("list")
// grate_people.forEach(artist=>{
//     let listItem=document.createElement('li')

//     listItem.textContent=artist
//     list1.appendChild(listItem)
// })

var quote=["images/download (1).jpeg","images/download (2).jpeg","images/download (3).jpeg","images/download (4).jpeg","images/download (5).jpeg","images/download (6).jpeg","images/download (7).jpeg",
    "images/download (8).jpeg","images/download (9).jpeg","images/download (10).jpeg","images/download (11).jpeg","images/download (12).jpeg","images/download (13).jpeg","images/download (14).jpeg",
    "images/download (15).jpeg","images/download (16).jpeg","images/download (17).jpeg","images/download (18).jpeg","images/download (19).jpeg",
    "images/images (1).jpeg","images/images (2).jpeg","images/images (3).jpeg","images/images (4).jpeg","images/images (5).jpeg","images/images (6).jpeg","images/images (7).jpeg",
    "images/images (8).jpeg","images/images (9).jpeg","images/images (10).jpeg","images/images (11).jpeg","images/images (12).jpeg","images/images (13).jpeg",
]
let index=0

function chengeQuotes(){
    let list=document.getElementById("cal")
    
    list.src=quote[index]

    index=(index+1)%(quote.length)

}