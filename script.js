function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            return cb(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
  const data = getData("https://jsonplaceholder.typicode.com/users", 
  function(data) {
    data.map((e) => {
      e.address = e.address.city
      e.company = e.company.name
      delete e.phone
      delete e.website
    })
    new gridjs.Grid({
      // columns: ["id","name","user name","email","address","company"],
      data: data,
      style: {
        table: {
          border: '3px solid #ccc',
        },
        header: {
          'text-align': 'center'
        },
        th: {
          'background-color': 'rgba(0, 0, 0, 0.1)',
          color: '#000',
          'border-bottom': '3px solid #ccc',
          'text-align': 'center'
        },
        td: {
          'text-align': 'center'
        }
      }
    }).render(document.getElementById("app"));
  });
  