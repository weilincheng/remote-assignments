
CREATE USER 'weilin'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
SELECT user, host FROM mysql.user;

GRANT ALL PRIVILEGES ON * . * TO 'weilin'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'weilin'@'localhost';

# Change password
# ALTER USER 'weilin'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';

CREATE DATABASE assignment;
USE assignment;
CREATE TABLE user(
    id INT AUTO_INCREMENT,
    email VARCHAR(75),
    password VARCHAR(255),
    PRIMARY KEY(id),
    UNIQUE (email)
);

SHOW TABLES;

INSERT INTO user(email, password) VALUES ('w@gmail.com', '123');
INSERT INTO user(email, password) VALUES ('e@gmail.com', '321');
INSERT INTO user(email, password) VALUES ('d@gmail.com', '222');

# DELETE FROM user WHERE email='aaa';
# mysqldump -p --databases assignment >! dump.sql
