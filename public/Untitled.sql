CREATE TABLE `checkin` (
  id int PRIMARY KEY AUTO_INCREMENT,
  user user,
  `venue` venue,
  `dateTime` datetime
);

CREATE TABLE `userAccount` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` address,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `accountCreationTime` timestamp DEFAULT (now()),
  `dateOfBirth` datetime,
  `email` varchar(255),
  `mobileNumber` varchar(255),
  `hasCovid` boolean
);

CREATE TABLE `venueAccount` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` address,
  `venueName` varchar(255),
  `contactNo` varchar(255),
  `lat` float,
  `lon` float,
  `caseTotal` int,
  `hotSpotStatus` bool,
  `email` varchar(255)
);

CREATE TABLE `adminAccount` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255)
);

CREATE TABLE `address` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `addressLine1` varchar(255),
  `addressLine2` varchar(255),
  `suburb` varchar(255),
  `postCode` int
);

ALTER TABLE `checkin` ADD FOREIGN KEY (`user`) REFERENCES `userAccount` (`id`);

ALTER TABLE `checkin` ADD FOREIGN KEY (`venue`) REFERENCES `venueAccount` (`id`);

ALTER TABLE `adminAccount` ADD FOREIGN KEY (`id`) REFERENCES `userAccount` (`id`);

ALTER TABLE `adminAccount` ADD FOREIGN KEY (`id`) REFERENCES `venueAccount` (`id`);

ALTER TABLE `userAccount` ADD FOREIGN KEY (`id`) REFERENCES `address` (`id`);

ALTER TABLE `venueAccount` ADD FOREIGN KEY (`id`) REFERENCES `address` (`id`);
