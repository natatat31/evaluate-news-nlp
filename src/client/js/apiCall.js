
//  let form = document.getElementById('form')
//  let data = {
//    name : form.elements.name.value,
//    email : form.elements.email.value,
//    password : form.elements.password.value
//  }
//  form.addEventListener('submit', (e) => {
//    e.preventDefault()
//    fetch('http://localhost:3000/register', {
//      method: 'POST',
//      body: JSON.stringify(data), 
//      headers:{
//        'Content-Type': 'application/json'
//      }
//    }).then(res => {
//      console.log(res) // log response object
//      return res.json() // return json data from the server
//    })
//    .then(response => alert(response.message))
//    .catch(error => console.error('Error:', error))
//  })



// const postData = async (url = '', text = {})=>{

//     const response = await fetch('http://localhost:8080/add', {
//     method: 'POST', 
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(text), // body data type must match "Content-Type" header        
//   });
//   try {
//     const sentiment = await response();
//     return sentiment;
//   }catch(error) {
//   console.log("error", error)
//   }
// }


// document.getElementById('submit').addEventListener('submit', apiCall);

//  function apiCall(event){
//             event.preventDefault();

//             let textInput = document.getElementById('article-input').value;
//             console.log(textInput);
            

//             fetch('/add', {
//                 method: 'POST',
//                 headers : new Headers(),
//                 body:JSON.stringify({
//                     text: textInput
//                 })
//             }).then((res) => res.json())
//             .then((data) =>  console.log(data))
//             .catch((err)=>console.log(err))
//         }





const postData = async ( url = '', data)=>{

    let textInput = document.getElementById('article-input').value;
    console.log(textInput);

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
  try {
    return textInput;
  }catch(error) {
  console.log("error", error)
  }
}


document.getElementById('submit').addEventListener('submit', apiCall);

function apiCall(event) {
    
    const textInput = document.getElementById('article-input').value;
    
        postData('/add', {
        text: textInput
        }
    )
}



export { apiCall }