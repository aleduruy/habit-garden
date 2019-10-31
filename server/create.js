var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('/Users/alessandra/Documents/Front/habit-garden/db/database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  
  db.serialize(function() {
    db.run("CREATE TABLE `Habit` (`id` INTEGER NOT NULL AUTO_INCREMENT,`name` VARCHAR NOT NULL,`start` DATE,`final` DATE,`duration` INTEGER DEFAULT '1',`icon` INTEGER,`user` INTEGER NOT NULL);");
    //db.run("CREATE TABLE `User` (`id` INTEGER NOT NULL AUTO_INCREMENT,`name` VARCHAR NOT NULL,`username` VARCHAR NOT NULL,`password` VARCHAR NOT NULL,PRIMARY KEY (`id`));");

    //var stmt1 = db.prepare("INSERT INTEGER `User` (name,username,password) VALUES ('Name1','user1','password123'), ('Name2','user2','password123'), ('Name3','user3','password123')");
    //var stmt2 = db.prepare("INSERT INTEGER `Habit` (name,start,end,duration,icon,user) VALUES ('Habit1','01/01/2019','12/12/2019','12','1','1'), ('Habit2','01/01/2019','12/12/2019','12','2','2'), ('Habit3','01/01/2019','12/12/2019','12','3','3')");

    //stmt1.finalize();
    //stmt2.finalize();

    // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //     console.log(row.id + ": " + row.info);
    // });
  });