#Read All files in current dirmmm
```
fs.readdir(testFolder, (err, files) => {
    console.log("Some log:");
    
  files.forEach(file => {
    console.log(file);
  });
});
```