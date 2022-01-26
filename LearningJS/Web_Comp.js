const shadowRoot = document.getElementById('example').attachShadow({
  mode: 'open'
});
shadowRoot.innerHTML = `<style>
button {
  color: tomato;
}
</style>
<button id="button">This will use the CSS color tomato <slot></slot></button>`;


const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);
