CREATE TABLE `User` (
  `id` int  NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int NOT NULL,
  `token` varchar(255)
)  ENGINE=InnoDB ;

CREATE TABLE `Role` (
  `id` int NOT NULL PRIMARY KEY,
  `role` varchar(50) NOT NULL
) ENGINE = InnoDB ;

ALTER TABLE `User` ADD FOREIGN KEY (`role`) REFERENCES `Role` (`id`);

INSERT INTO Role Values (1,'admin');
