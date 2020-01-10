
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
    const newData = await response.json();
    console.log(newData);
    document.getElementById('results').innerHTML = "";

        let entry = document.createElement('div');
        entry.setAttribute('class', 'entry');

        entry.innerHTML = newData.polarity;
        document.getElementById('results').append(entry);
    
    return newData;
  }catch(error) {
  console.log("error", error)
  }
}

// const getSentiment = async (url='')=>{
//     const request = await fetch(url);
//     try{
//         const allData = await request.json();
//         console.log(allData);

//         document.getElementById('results').innerHTML = "";

//         for (let i = allData.length - 1; i >= 0; i--) {

//             let entry = document.createElement('div');
//             entry.setAttribute('class', 'entry');

//             entry.innerHTML = allData[i].polarity;
//             document.getElementById('results').append(entry);
//         }
         

//     return allData;
//     }
//     catch(error){
//         console.log("error", error);
//       }
// }




document.getElementById('submit').addEventListener('submit', apiCall);

function apiCall(event) {
    event.preventDefault();
    const textInput = document.getElementById('article-input').value;
    if (textInput ===""){
        //do validation
    }
    
        postData('/add', {
        text: textInput
            }
        )
        // .then(function(data){
        //         getSentiment('/all')
        // })
}



export { apiCall
        //  getSentiment
        }