// Forçar o efeito Hover
const share = document.querySelector('.compartilhar');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);