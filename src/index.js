console.log(data);

// WRITE YOUR CODE BELOW!
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
    emEl.textContent = "Is naughty? "
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

function loopingArrayToDisplay() {
    for (const element of data) {
        createElement(element)
    }

    console.log(`Name of the dog : ${element.name}
    bio is : ${element.bio}
    and the image src is: ${element.image}`)
}

loopingArrayToDisplay()