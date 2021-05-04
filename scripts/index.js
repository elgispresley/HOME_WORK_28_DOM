// const bodyElement = document.body;

// const firstChiledNode = bodyElement.firstChild 
// const lastChieldNode = bodyElement.lastChild

// console.log(firstChiledNode)
// console.log(lastChieldNode)

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// // console.log(bodyElement.hasChildNodes());

// const bodyChildren = bodyElement.children;
// console.log(bodyChildren); 

// const elemsOne = document.querySelectorAll('.lesson_list')
// console.log(elemsOne)


// const elemsTwo = document.querySelectorAll('li')
// console.log(elemsTwo)


// const elemsThree = document.querySelectorAll('li.lesson_item-list')
// console.log(elemsThree)


// const elemsFour = document.querySelectorAll('.lesson_list>li')
// console.log(elemsFour)
 
// const elemsFive = document.querySelectorAll('.lesson_list, .lesson_text')
// console.log(elemsFive)

 
// const elemsSix = document.querySelectorAll('.lesson_list .lesson_text')
// console.log(elemsSix)
 
 
// const elemsSeven = document.querySelectorAll('#listItem')
// console.log(elemsSeven)

// const elemsEight = document.querySelectorAll('[data-item]')
// console.log(elemsEight)
 
// const elemsNine = document.querySelectorAll('[data-item="85"]')
// console.log(elemsNine)
 
//  const elems = document.querySelectorAll('li')
//  console.log(elems[2]);

//  for (const item of elems) {
//      console.log(item);
//  }

// const subList = document.querySelectorAll('.lesson_sub-list')
// // const subItems = subList[0].querySelectorAll('li')
// // console.log(subItems);
// const listItems = subList[0].querySelectorAll('.lesson_list .lesson_item-sub-list')
// console.log(listItems);

// const elem = document.getElementById('listItem');
// console.log(elem);
// const elems = document.getElementsByTagName('li')
// console.log(elems)
 
// const elem = document.querySelector('.lesson_item-sub-list')
// const parentList = elem.closest('.lesson_list')
// console.log(parentList)

// const text = document.querySelector('.lesson_text')
// const list = text.nextElementSibling
// console.log(list)


// const textElementContent = textElement.innerHTML;
// console.log(textElementContent)

// textElement.innerHTML = 'Живи, а работай в свободное время!';

// textElement.innerHTML = `
//     <p>${textElementContent}</p> <p>Живи, а работай в
//     <span class="yellow">свободное</span> время!</p>
// `
// console.log(textElement.innerHTML);


// const textElementContent = textElement.outerHTML;
// console.log(textElementContent)

// textElement.outerHTML = `
//     <p>${textElementContent}</p> <p>Живи, а работай в
//     <span class="yellow">свободное</span> время!</p>
// `
// console.log(textElement.outerHTML);

// const textElementContent = textElement.textContent;
// console.log(textElementContent)

// textElement.textContent =`
//    Салам мусарам, я вор в законе ауууф
// `
// console.log(textElement.textContent)


// const getComment = textElement.nextSibling
// console.log(getComment)
// console.log(getComment.data)
// getComment.data = 'hi'
// console.log(getComment);


// const newElement = document.createElement('div')


// newElement.innerHTML =`
//    ээээ, салам алейкум бл
// `
// const newText = document.createTextNode('Привет!')

// textElement.before(newElement)
// textElement.after(newElement)
// textElement.prepend(newElement)
// textElement.append(newElement)


// const cloneTextElement = textElement.cloneNode(true);

// const lessonBlock = document.querySelector('.lesson')

// lessonBlock.append(cloneTextElement)


// const textElement = document.querySelector('.lesson_text')
// textElement.remove();


//Управление классами 
//Свойства className и classList

//  const elementClassNames = element.className
//  console.log(elementClassNames);

//  element.className = 'red'
// const element = document.querySelector('.lesson_item-list-red');

// element.classList.add('active');

// element.classList.remove('active');

// element.classList.toggle('active');

// element.classList.contains('active');


const element = document.querySelector('.lesson_item-list-red')

// element.style.color = 'red'

// element.style.cssText =`
// margin-bottom: 30px;
// color: red;
// `

const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize)




