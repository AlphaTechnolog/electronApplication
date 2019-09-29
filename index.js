const { app, Menu, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

var mainWindow;

console.log("Mesage: Application Launching...");

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'My electron app',
        icon: path.join(__dirname, 'public/img/favicon/favicon.ico')
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(applicationMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        app.quit();
        console.log("Mesage: Application Finished");
    });

    mainWindow.maximize();

    console.log("Mesage: Application Started");
});

function appQuit(){
    app.quit();
}

const applicationMenu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Close App',
                accelerator: process.platform == 'darwin' ? 'command+q' : 'ctrl+q',
                click(){
                    appQuit();
                }
            }
        ]
    }
]
