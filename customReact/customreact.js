//here we have made render() function as per the reactElement so it is custom unlike general react render() func
function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    //a better way to set all the attributes with their corresponding properties
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])      //prop- key and reactElement.props[prop]-value
    }
    container.appendChild(domElement)
}

//our own react element having type(a->anchor), props->properties which is an object and children means text Node
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

//a function which will use reactElement to create new element and append it into DOM (virtual dom) or container
customRender(reactElement,mainContainer)