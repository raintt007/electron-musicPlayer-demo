const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('message', 'hellow from renderer')
  ipcRenderer.on('reply',(event, arg) => {
    document.querySelector('#message').innerHTML = arg
  })
})