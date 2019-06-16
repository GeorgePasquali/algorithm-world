#Read All files in current dir
```
fs.readdir(testFolder, (err, files) => {
    console.log("Some log:");
    
  files.forEach(file => {
    console.log(file);
  });
});
```