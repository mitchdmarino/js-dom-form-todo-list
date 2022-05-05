console.log('js is linked')


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', event => {
        //prevent reload
        event.preventDefault()
        console.log('reload prevented')
       //grab input value 
        const newItem = document.querySelector('#new-todo').value
        console.log(newItem)
        //create new list item in current-output, append NewItem 
        const newList = document.createElement('li')
        //create new button 
        const newButton = document.createElement('button')
        newButton.innerText='Finished Todo'
       
        newList.innerText = newItem
        document.querySelector('#current-output').appendChild(newList)
        document.querySelector('#current-output').appendChild(newButton)

        newButton.addEventListener('click', () => {
            finishedList = newList
            finishedList.style.textDecoration = 'line-through'
            console.dir(finishedList)
            document.querySelector('#finished-output').appendChild(finishedList)
            document.querySelector('#current-output').removeChild(newButton)
        })
        document.querySelector('#reset-button').addEventListener('click' ,() => {
            while (document.querySelector('#current-output').firstChild) {
                document.querySelector('#current-output').removeChild(document.querySelector('#current-output').firstChild)
                

            }
            while (document.querySelector('#finished-output').firstChild) {
                document.querySelector('#finished-output').removeChild(document.querySelector('#finished-output').firstChild)
            }
        })
    })
    
})