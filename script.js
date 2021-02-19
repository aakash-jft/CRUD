var del_id_value;
var data=[];
var id_value;
async function fetchData(){
  await fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => json.forEach(element => 
        data.push({
        email: `${element.email}`,
        id: element.id,
        name: `${element.name}`,
        phone: `${element.phone}`,
        username: `${element.username}`,
        website: `${element.website}`} )      
  ));
  show();
}
// console.log(data);

function add(){
        
        var Id;
        (data.length > 0) ? (Id = data[data.length-1].id + 1) : (Id = 1);
        let Name = document.getElementById('name').value;
        let Username = document.getElementById('username').value;
        let Phone = document.getElementById('phone').value;
        let Website = document.getElementById('website').value;
        let Email = document.getElementById('email').value;
        data.push({email:Email, id:Id, name:Name, phone:Phone, username:Username, website:Website});
        var temp="";


        data.forEach(element => {
            temp += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td><button type="button" class="btn btn-danger" onclick="deletefun(${element.id})" data-toggle = "modal" data-target = ".deleteModal">Delete</button></td>
            <td><button type="button" class="btn btn-primary" onclick="editfunction(${element.id})" data-toggle="modal" data-target=".bd-example-modal-lg">Edit</button></td>
            </tr>`
            });
    document.getElementById("tableData").innerHTML = temp;


}


function show(){
    var temp = "";
    

        data.forEach(element => {
            temp += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td><button type = "button" class = "btn btn-danger" onclick="deletefun(${element.id})" data-toggle="modal" data-target=".deleteModal">Delete</button></td>
            <td><button type="button" class="btn btn-primary" onclick="editfun(${element.id})" data-toggle="modal" data-target=".bd-example-modal-lg">Edit</button></td>
            </tr>`
    });
    document.getElementById("tableData").innerHTML = temp;

    }

function deletefunction(){
    let temp = del_id_value;
    data = data.filter(deleteF);
    show(); 
    function deleteF(obj){
        return obj.id != temp;
    }
}

function editfunction(){
    for( let i = 0; i < data.length; i++){
        if(data[i].id === id_value){
            data[i].name = document.getElementById('edit_name').value;
            data[i].username = document.getElementById('edit_username').value;
            data[i].phone = document.getElementById('edit_phone').value;
            data[i].website = document.getElementById('edit_website').value;
            data[i].email = document.getElementById('edit_email').value;
        }
    }
    show();
}

function deletefun(Id){
    del_id_value = Id;
}

function editfun(Id){
    id_value = Id;
    data.forEach( (element) =>{
        if (element.id === Id) {
            document.getElementById('edit_name').value = element.name;
            document.getElementById('edit_username').value = element.username;
            document.getElementById('edit_phone').value = element.phone;
            document.getElementById('edit_website').value = element.website;
            document.getElementById('edit_email').value = element.email;
        }
    } );
}


fetchData();

