CREATE TABLE `medical_facility`
(
    `id`                     VARCHAR(45) NOT NULL,
    `name`                   VARCHAR(45) NOT NULL,
    `type`                   VARCHAR(45) NOT NULL,
    `phone`                  VARCHAR(45) NULL,
    `address`                VARCHAR(45) NULL,
    PRIMARY KEY (`id`)
);


CREATE TABLE `user`
(
    `id`                     VARCHAR(45) NOT NULL,
    `firstname`              VARCHAR(45) NOT NULL,
    `lastname`               VARCHAR(45) NOT NULL,
    `email`                  VARCHAR(45) NOT NULL,
    `profession`             VARCHAR(45) NOT NULL,
    `password`               TEXT        NULL,
    `phone`                  VARCHAR(45) NULL,
    `address`                VARCHAR(45) NULL,
    `last_activity`          TIMESTAMP   NULL,
    `role`                   VARCHAR(45) NULL,
    `picture_url`            VARCHAR(45) NULL,
    `medical_facility_id`    VARCHAR(45) NULL,
    `status`                 VARCHAR(45) NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (medical_facility_id) REFERENCES `medical_facility`(id)
);

CREATE TABLE `message`
(
    `id`             VARCHAR(45) NOT NULL,
    `message`        VARCHAR(4000) NOT NULL,
    `date_sent`      TIMESTAMP   NOT NULL,
    `sender_id`      VARCHAR(45) NOT NULL,
    `receiver_id`    VARCHAR(45) NOT NULL,
    `type`           VARCHAR(45) NOT NULL,
    `encrypted_msg`  VARCHAR(4000) NOT NULL,
    `status`         VARCHAR(45) NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (sender_id) REFERENCES `user`(id),
    FOREIGN KEY (receiver_id) REFERENCES `user`(id)
);