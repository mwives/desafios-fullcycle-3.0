DROP DATABASE IF EXISTS fullcycle;
-- 
CREATE DATABASE fullcycle;
--
USE fullcycle;
--
CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);