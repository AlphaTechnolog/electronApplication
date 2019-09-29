const { app, BrowserWindow } = require('electron');

var mainWindow;

console.log("Mesage: Application Launching...");

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'My electron app'
    });

    mainWindow.on('closed', () => {
        app.quit();
        console.log("Mesage: Application Finished");
    });

    console.log("Mesage: Application Started");
});
