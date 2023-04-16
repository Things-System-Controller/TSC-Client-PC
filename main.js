const { app, BrowserWindow, Menu } = require('electron')
Menu.setApplicationMenu(null);
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title:"TSC物联网-节目主控编排客户端"
  })

  win.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()
})