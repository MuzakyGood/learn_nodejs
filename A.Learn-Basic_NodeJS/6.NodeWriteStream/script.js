const fs = require('fs');

const writefile = fs.createWriteStream('diary.txt');

writefile.write("Lorem ipsum dolor sit amet,");
writefile.write("consectetur adipisicing elit.\n");
writefile.write("Perferendis iure,");
writefile.write("aliquid necessitatibus ipsam nesciunt accusamus ex eum in,");
writefile.write("quos repudiandae aut culpa qui dolor.\n");
writefile.write("Illum, omnis.\n");
writefile.write("Ratione delectus tenetur minus!\n");

writefile.end();