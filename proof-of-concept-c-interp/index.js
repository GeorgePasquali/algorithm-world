const { exec } = require('child_process');
const testFolder = '.';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    console.log("AAAAAAAAAAAAAAAAAAAA");
    
  files.forEach(file => {
    console.log(file);
  });
});

const options = {
    timeout: 100,
    stdio: 'inherit',
    shell: true
}

exec('gcc -o myapp main.c', (error, stdout, stderr) => {

    exec('./myapp', options, (error, stdout, stderr) => {
        console.log(`stdout ${stdout}`);
        console.log(`stdout ${stderr}`);
        
        if (error) {
            console.log(`exec error: ${error}`);
            return;    

        }
    })
});