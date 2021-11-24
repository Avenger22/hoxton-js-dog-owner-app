console.log(data);

//this creates element form the object
function createElement(dog) {

    const mainEl = document.querySelector('.main')

    //create a section
    const sectionEl = document.createElement('section')
    sectionEl.setAttribute('class', 'main__dog-section')
    
    //create an h2
    const h2El = document.createElement('h2')
    h2El.textContent = dog.name

    //create an img
    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', dog.image)
    imgEl.setAttribute('alt', "")

    //create a div desc
    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'main__dog-section__desc')
    
    //create an h3
    const h3El = document.createElement('h3')
    h3El.textContent = dog.bio

    //create an p1
    const p1El = document.createElement('p')
    p1El.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    minima voluptates libero cumque rerum consequatur optio aliquid sint
    eum maxime illo laborum omnis quo ab rem cupiditate nulla
    perspiciatis ipsum!`
    divEl.append(h3El, p1El)

    //create an em
    const emEl = document.createElement('em')
    emEl.textContent = "Is naughty ? "
    //create an p2
    const p2El = document.createElement('p')
    p2El.append(emEl)
    p2El.textContent += " Yes!"

    //create an button
    const btnEl = document.createElement('button')
    btnEl.textContent = "Good dog!"

    //appending to section then to main
    sectionEl.append(h2El, imgEl, divEl, p2El, btnEl)
    mainEl.append(sectionEl)

}

function deleteElement() {
    const sectionEl = document.createElement('section')
    sectionEl.delete()
}

function creatingForm(dog) {

    //get the section from html
    const sectionEl = document.querySelector('.main__dog-section')

    //create h2
    const h2El = document.createElement('h2')
    h2El.textContent = 'Add a new Dog'

    //create form
    const formEl = document.createElement('form')
    formEl.setAttribute('class', 'form')
    
    //LABEL 1
    const labelEl1 = document.createElement('label')
    labelEl1.setAttribute('for', 'name')
    labelEl1.textContent = "Dog's name"

    const inputEl1 = document.createElement('input')
    inputEl1.setAttribute('type', 'text')
    inputEl1.setAttribute('id', 'name')
    inputEl1.setAttribute('name', 'name')
    
    //LABEL 2
    const labelEl2 = document.createElement('label')
    labelEl2.setAttribute('for', 'image')
    labelEl2.textContent = "Dog's picture"

    const inputEl2 = document.createElement('input')
    inputEl2.setAttribute('type', 'url')
    inputEl2.setAttribute('id', 'image')
    inputEl2.setAttribute('name', 'image')
    
    //LABEL3
    const labelEl3 = document.createElement('label')
    labelEl3.setAttribute('for', 'bio')
    labelEl3.textContent = "Dog's bio"

    const textAreaEl = document.createElement('textarea')
    textAreaEl.setAttribute('rows', '5')
    textAreaEl.setAttribute('id', 'bio')

    //submit input
    const inputEl3 = document.createElement('input')
    inputEl3.setAttribute('type', 'submit')
    inputEl3.setAttribute('id', 'submit')
    inputEl3.setAttribute('name', 'submit')
    inputEl3.setAttribute('value', "Let's add a dog!")
    inputEl3.setAttribute('class', 'form__button')

    //appending
    formEl.append(labelEl1, inputEl1, 
    labelEl2, inputEl2, 
    labelEl3, textAreaEl, inputEl3)

    sectionEl.append(h2El, formEl)

    //events for the form this has a subevent
    formEl.addEventListener('submit', function (event) {
        event.preventDefault()

        const ulEl = document.querySelector('.dogs-list')

        //create a dog list item header menu
        const liEl = document.createElement('li')
        liEl.setAttribute('class', 'dogs-list__button')
        liEl.textContent = formEl.name.value

        //apend the li to ul
        ulEl.append(liEl)

        //event listener for the list el wich interacts with the form
        liEl.addEventListener('click', function (event) {
            event.preventDefault()
            for (const element of data) {
                if (element.name === formEl.name.value) {
                    createElement(element)
                }
            }
            formEl.reset()
            formEl.remove()
            sectionEl.remove()
            // liEl.reset()
        })

    })

}

//this displays the data obect 
function loopingArrayToDisplay() {
    let element
    for (element of data) {
        interactiveHeaderButton(element)
    }

    console.log(`Name of the dog : ${element.name}
    bio is : ${element.bio}
    and the image src is: ${element.image}`)
}

//header menu wich is the list with names of dog
function interactiveHeaderButton(dog) {

    const ulEl = document.querySelector('.dogs-list')

    //create a dog list item header menu
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'dogs-list__button')
    liEl.textContent = dog.name

    //apend the li to ul
    ulEl.append(liEl)

    //adding event listeners
    liEl.addEventListener('click', function (event) {

        for (const element of data) {

            if (element.name === liEl.textContent) {
                createElement(element)
            }

        }

    })

}

loopingArrayToDisplay()

const liEl = document.querySelector('.dogs-list__button--add')
liEl.addEventListener('click', function (event) {
    creatingForm(data)
})

// const liDogEl = document.querySelectorAll('.dogs-list__button')

// const form = document.querySelector('.form')
// const formValue = form.name.value

// liDogEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     for (const element of data) {
//         if (element.name === ) {
//             createElement(element)
//         }
//     }
// })