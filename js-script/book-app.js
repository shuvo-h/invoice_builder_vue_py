// get the id
const getId = (idName) => {
    const idField = document.getElementById(idName);
    return idField;
}
// get the search value, and load data 
document.getElementById('search-btn').addEventListener('click',() => {
    const searchValue = getId('search-input').value;
    // clear search field, book container and message 
    getId('search-input').value = "";
    getId('books-container').innerHTML = "";
    getId('search-result').innerHTML = "";
    // load data 
    if (searchValue !== "") {
        loadData(searchValue);
        getId('input-error').style.display = "none";
    }else{
        getId('input-error').style.display = "block";
    }
})


// get JSON data based on search result 
const loadData = bookName => {
    const url = `http://openlibrary.org/search.json?q=${bookName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBookList(data.docs))
    .catch(err => displayErrorMsg(err))
}

// Show each book details in card 
const displayBookList = books => {
    const quantity = books.length;
    // show the number of book founds in search 
    displaySearchQuantity(quantity);
    // create card for each book 
    books.forEach(book =>{
        const {cover_i, title, author_name, first_publish_year} = book;
        const div = document.createElement('div');
        div.classList.add("col", );
        div.innerHTML = `
            <div class="card h-100">
                <div class="card-img">
                    <img id="cover-img" src="${getImgUrl(cover_i)}" class="cover-img card-img-top p-3" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="text-center card-title">${title}</h5>
                    <ul class="list-unstyled">
                        <li class="card-text">Author: ${arrayToString(author_name)}</li>
                        <li class="card-text">First Published: ${dataFilter(first_publish_year)}</li>
                    </ul>
                </div>
            </div>
        `;
        // add the book card to the container 
        getId('books-container').appendChild(div);
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

// create dynamic url for cover image 
const getImgUrl = coverId => {
    const coverApiUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
    const coverLocalUrl = "../image/no-cover.jpg";
    const coverUrl = coverId ? ( !isNaN(coverId) ? coverApiUrl :  coverLocalUrl ) : coverLocalUrl;
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

const displayErrorMsg = error =>{
  return  getId('connection-err').style.display = "block";
}