
//Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')/*fetch는 해당하는 파일의 경로나 url을 작성하면 간단하게 데이터를 네트워크를 통해 받아올수 있음.데이터를 성공적으로 받아오면 response라는 오브젝트를 전달해줌*/
    .then(response => response.json())
    .then(json => json.items);
}




/*loadItems()로 data.json에 있는 데이터를 읽어와서 아이템을 전달
data.json을 동적으로 읽어와야 해서 시간이 걸리기 때문에
그냥 아이템을 리턴하는게 아니라 프로미스를 리턴하도록 만들것임*/ 

/*.then(items => {});로 프로미스가 성공적으로 되면 아이템을 받아올거고 */

/* .catch();로 성공적으로 되지 않으면 에러메시지를 보여주거나, 
리스트 대신 경고 문구를 사용자에게 보여줄수 있도록 함 */

//Updata the list with the given items
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//Create HTML list item from the given data item
function createHTMLString(item){
    return`
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}
//main
loadItems()
    .then(items => {
        displayItems(items);
        // setEventListeners(items);
    })
    .catch(console.log); 
