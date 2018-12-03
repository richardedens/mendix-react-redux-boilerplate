/* eslint-disable no-console */

// External libraries.
let path = require('path');
let archiver = require('archiver');
let fs = require('fs-extra');
let chalk = require('chalk');
let chokidar = require('chokidar');
let clear = require('clear');
let figlet = require('figlet');

// Variables.
let widget = 'DeGoudseFirstPageWordEditor';
let pathToRead = path.join(__dirname,'../src/');
let pathToWrite = path.join(__dirname,'../mpk/' + widget + '.mpk');
let pathToMendix = path.join(__dirname, '../../../widgets/' + widget + '.mpk');

let core = {
    processing: false,
    start: function() {
        clear();
        console.log(chalk.green('------------------------------------------------------------------------'));
        console.log(chalk.yellow(figlet.textSync('create mpk', { horizontalLayout: 'full' })));
        console.log(chalk.green('------------------------------------------------------------------------'));
        console.log(chalk.green(''));
        console.log(chalk.green('Author: Gerhard Richard Edens'));
        console.log(chalk.green(''));
    },
    log: function(msg) {
        console.log(msg);
    },
    exec: function() {
        this.processing = true;
        this.zipDirectory(pathToRead,pathToWrite).then(() => {
            console.log('Done with action.');
            if (fs.existsSync(pathToMendix)){
                fs.unlinkSync(pathToMendix);
            }
            fs.copySync(pathToWrite, pathToMendix);
            this.processing = false;
        },(err) => {
            console.error(err);
        });
    },
    zipDirectory: function(source, out) {
        let archive = archiver('zip', { zlib: { level: 9 }});
        let stream = fs.createWriteStream(out);
        let self = this;

        return new Promise((resolve, reject) => {
            archive.directory(source, false).on('error', err => reject(err)).pipe(stream);
            stream.on('close', () => resolve());
            archive.finalize();
        });
    }
};

chokidar.watch(pathToRead, {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    if (core.processing === false) {
        core.start();
        core.log(event + ': ' + path);
        core.exec();
    }
});
