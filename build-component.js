const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/upbytes-calendar-guide/runtime.js',
        './dist/upbytes-calendar-guide/polyfills.js',
        './dist/upbytes-calendar-guide/main.js',
        './dist/upbytes-calendar-guide/styles.css'
      ];
    
      await fs.ensureDir('projects/upbytes-angular-calendar/src/assets/widget');
      await concat(files, 'projects/upbytes-angular-calendar/src/assets/widget/upbytes-calendar-guide.js');
}
build();