// React.createElement(Element, attribute, Children)

const h1 = React.createElement('h1', {id: 'hero'}, 'Hello from NCR')
const h3 = React.createElement('h3', {class: 'heroine'}, 'This is Heading-3')

const div = React.createElement('div', {id: 'parent'}, [h1, h3])

const root = ReactDom.createRoot(document.getElementById('container'))

root.render(div)