// get the id
const getId = (idName) => {
    const idField = document.getElementById(idName);
    return idField;
}
// get the search value to call API data 
document.getElementById('search-btn').addEventListener('click',() => {
    const searchValue = getId('search-input').value;
    if (searchValue !== "") {
        loadData(searchValue);
        getId('input-error').style.display = "none";
    }else{
        getId('input-error').style.display = "block";
    }
    console.log('click-btn');
})


// get JSON data based on search result 
const loadData = bookName => {
    const url = `http://openlibrary.org/search.json?q=${bookName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBookList(data.docs))
    .catch(err => displayErrorMsg(err))
}

const displayBookList = books => {
    getId('books-container').innerHTML = "";
    getId('search-result').innerHTML = "";
    const quantity = books.length;
    displaySearchQuantity(quantity);
    books.forEach(book =>{
        const {cover_i, title, author_name, first_publish_year} = book;
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
            <div class="card h-100">
                <div class="card-img">
                    <img id="cover-img" src="${getImgUrl(cover_i)}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">Author: ${arrayToString(author_name)}</p>
                    <p class="card-text">First Published: ${dataFilter(first_publish_year)}</p>
                </div>
            </div>
        `;
        getId('books-container').appendChild(div);
              // console.log(author_name, first_publish_year, title);
            //   console.log(author_name.toString().replace(',',', '));
            // console.log(cover_i);
            console.log(book);
    })
}

// Convert array elements to string 
const arrayToString = arrayName => {
    const string = arrayName ? (Array.isArray(arrayName) ? arrayName.toString().replace(',',", ") : arrayName) : "Unknown Author";
    return string;
}

// filter server data for null 
const dataFilter = data => {
    const pureData = data ? data : "Unknown";
    return pureData;
}  

const getImgUrl = coverId => {
    const coverApiUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
    const coverLocalUrl = "../image/no-cover.jpg";
    const coverUrl = coverId ? ( !isNaN(coverId)? coverApiUrl :  coverLocalUrl ) : coverLocalUrl;
    return coverUrl;
}

// display the total search quantity
const displaySearchQuantity = number => {
    if (number > 0) {
        getId('search-result').innerHTML = `
            <p>Total ${number} books has found</p>
        `;
    }else{
        getId('search-result').innerHTML = `
            <p>No result has found.</p>
        `;
    }
}
// search-result

const displayErrorMsg = error =>{
  return  alert("internet or server error")
}