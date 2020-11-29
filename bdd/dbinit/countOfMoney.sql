CREATE TABLE `User` (
  `id` int PRIMARY KEY,
  `username` varchar(50),
  `password` varchar(100),
  `cryptoList` varchar(1000),
  `role` int,
  `preferedCurrency` varchar(50),
  `token` varchar(255)
)ENGINE = InnoDB;

CREATE TABLE `Role` (
  `id` int PRIMARY KEY,
  `role` varchar(50)
)ENGINE = InnoDB;

CREATE TABLE `Article` (
  `id` int PRIMARY KEY,
  `title` varchar(50),
  `date` DATE,
  `source` varchar(100),
  `article_url` varchar(200),
  `img_url` varchar(200),
  `crypto` int,
  `view` int,
  `keywords` varchar(1000)
)ENGINE = InnoDB;

CREATE TABLE `Keyword` (
  `id` int PRIMARY KEY,
  `keywordName` varchar(50)
)ENGINE = InnoDB;

CREATE TABLE `Crypto` (
  `id` int PRIMARY KEY,
  `cryptoName` varchar(50),
  `currentPrice` int(20),
  `openingPrice` int(20),
  `lowPrice` int(20),
  `highPrice` int(20),
  `cryptoUrl` varchar(200),
  `isDisplayed` boolean
)ENGINE = InnoDB;

CREATE TABLE `Preference` (
  `userId` int,
  `cryptoId` int
)ENGINE = InnoDB;

CREATE TABLE `Setting` (
  `id` int PRIMARY KEY,
  `cryptoPopularity` varchar(1000),
  `latestArticles` int,
  `sourceList` varchar(1000)
)ENGINE = InnoDB;

CREATE TABLE `Articles_Keyword` (
  `keywordId` int,
  `articleId` int
)ENGINE = InnoDB;

ALTER TABLE `Articles_Keyword` ADD FOREIGN KEY (`keywordId`) REFERENCES `Keyword` (`id`);

ALTER TABLE `Articles_Keyword` ADD FOREIGN KEY (`articleId`) REFERENCES `Article` (`id`);

ALTER TABLE `Article` ADD FOREIGN KEY (`id`) REFERENCES `Setting` (`latestArticles`);

ALTER TABLE `Preference` ADD FOREIGN KEY (`cryptoId`) REFERENCES `Crypto` (`id`);

ALTER TABLE `Preference` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`id`);

ALTER TABLE `Role` ADD FOREIGN KEY (`id`) REFERENCES `User` (`role`);

ALTER TABLE `Crypto` ADD FOREIGN KEY (`id`) REFERENCES `Article` (`crypto`);

INSERT INTO Role Values (1,'admin');
INSERT INTO Role Values (2,'user');
