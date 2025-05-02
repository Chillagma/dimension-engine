const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
    }
  });

  win.loadFile('C:\\Users\\avata\\Downloads\\nginx-1.26.3\\nginx-1.26.3\\html\\dimension engine\\index.htm'); // Load your existing HTML
}

app.whenReady().then(createWindow);