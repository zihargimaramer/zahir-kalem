const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        transparent: true,
        frame: false,
        fullscreen: true,
        alwaysOnTop: true,
        skipTaskbar: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
    
    // Pencerenin her zaman en üstte kalmasını screen-saver seviyesinde sabitle
    win.setAlwaysOnTop(true, 'screen-saver');

    ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
        win.setIgnoreMouseEvents(ignore, options);
    });

    ipcMain.on('set-unsaved', (event, unsaved) => {
        // Kaydedilmemiş değişiklik yönetimi
    });
}

app.whenReady().then(createWindow);