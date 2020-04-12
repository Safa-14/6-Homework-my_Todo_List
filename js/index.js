window.onload = function () {
    //get html elements
    let todoInput = document.querySelector('#todoInput')
    let todoListe = document.querySelector('#todoList')
    let addBtn = document.querySelector('#todoAddBtn')
 
    let todoArray = []

    addBtn.addEventListener('click', function () {

        let todoValue = todoInput.value
        if (todoValue.trim() != '') {
            //create li dynamically
            let listItem = document.createElement('li')
            listItem.innerText = todoValue

            //create a button dynamically
            let btn = document.createElement('button')
            btn.innerText = ' Done'
            listItem.append(btn)

            //clear the input after adding the list item to the list
            todoListe.append(listItem)


            //add the list to local storage
            todoArray.push(todoValue)
            let todoArrayJson = JSON.stringify(todoArray)
            localStorage.setItem('todoList', todoArrayJson)
            console.log(todoArray)

            

            btn.addEventListener('click',function (e) {
                //Remove the li after a click
                let word =e.target.parentElement.innerText
                console.log(typeof(word));
                let btnId = word.indexOf('D');
                let ourWord = word.slice(0,btnId)
                console.log(ourWord);

                e.target.parentElement.remove()
                let x= todoArray.indexOf(ourWord)
                console.log(x);
                todoArray = todoArray.filter(item => {return item != ourWord})
                localStorage.setItem('todoList', JSON.stringify(todoArray)); //Assign it back to LocalStorage.
                
            })

        } else {
            alert('todo value is empty, please enter a todo value')
        }
        todoInput.value = ''
    })

    //render todo list array from localStorage
    let jsonObj = localStorage.getItem('todoList')
    //check if there is data with the key todoList in the local storage
    if (jsonObj != null) {
        let convertArr = JSON.parse(jsonObj)
        convertArr.forEach(element => {
            todoArray.push(element)
            let listItem = document.createElement('li')
            listItem.innerText = element 
            let btn = document.createElement('button')
            btn.innerText = ' Done'
            listItem.append(btn)
            todoListe.append(listItem)

        btn.addEventListener('click',function (e) {
            let word =e.target.parentElement.innerText
                console.log(typeof(word));
                let btnId = word.indexOf('D');
                let ourWord = word.slice(0,btnId)
                console.log(ourWord);

                e.target.parentElement.remove()
                let x= todoArray.indexOf(ourWord)
                console.log(x);
                todoArray = todoArray.filter(item => {return item != ourWord})
                localStorage.setItem('todoList', JSON.stringify(todoArray)); //Assign it back to LocalStorage.
            
            e.target.parentElement.remove()
            
        })
         });
        
    }

}