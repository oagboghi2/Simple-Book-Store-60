function createNode(element, className){
  let node = document.createElement(element); //Create the type of element you pass as a parameter
  node.className = className;
  return node;
}

function append(parent, el){
  return parent.appendChild(el); //Append the second parameter to the first one
}

var hide = function(element){
  element.classList.remove('is-visible');
}

var show = function(element){
  element.classList.add('is-visible');
}

var search = document.getElementsByClassName(".list-group")

hide(search)



document.addEventListener('click', function(event){
if(!event.target.classList.contains('toggle'))
return event.preventDeafult()

})

document.addEventListener('onload', function(event){
  fetch('http://localhost:3000/api/home/search')
    .then(function(title){
      searchTerm(title)
        .then(function(userSearch){
          console.log("test" + userSearch);
          if(userSearch === true){
            res.render('index',{userSearch: userSearch});
          }else{
            res.render('index', {userSearch: ""})
          }
        })
        .catch((error)=>{
          console.log(error);
        });
    })

})


<ol class="search-list">
    <% userSearch.forEach(function(book){ %>
      <li>
        <span>
          <div>
            <p>test</p>
          </div>
        </span>
      </li>
      <% }); %>
</ol>
