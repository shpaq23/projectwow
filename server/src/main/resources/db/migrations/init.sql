CREATE TABLE `user`
(
    ID                    int NOT NULL,
    EMAIL                 varchar(255) DEFAULT NULL,
    USERNAME              varchar(255) DEFAULT NULL,
    LAST_FAILED_LOGIN     datetime(3)  DEFAULT NULL,
    LAST_SUCCESSFUL_LOGIN datetime(3)  DEFAULT NULL,
    PASSWORD              varchar(128) DEFAULT NULL,
    ROLE                  varchar(36)  DEFAULT 'PLAYER',
    CHARACTER_ID          int,

    PRIMARY KEY (ID)
);



CREATE TABLE `character`
(
    ID                int NOT NULL,
    HEALTH            int         DEFAULT 100,
    MANA              int         DEFAULT 100,
    RACE              varchar(36) DEFAULT NULL,
    NICKNAME          varchar(36) DEFAULT NULL,
    SPECIALIZATION    varchar(36) DEFAULT NULL,
    USER_ID           int,
    CHARACTERSTATS_ID int,
    PRIMARY KEY (ID)
);

CREATE TABLE `characterStats`
(
    ID           int NOT NULL,
    AGILITY      int,
    INTELLECT    int,
    STRENGTH     int,
    STAMINA      int,
    SPIRIT       int,
    CHARACTER_ID int,
    PRIMARY KEY (ID)
);

ALTER TABLE `user`
    ADD CONSTRAINT FK_USER_CHARACTER FOREIGN KEY (CHARACTER_ID) REFERENCES `character` (ID) ON DELETE SET NULL;


ALTER TABLE `character`
    ADD CONSTRAINT FK_CHARACTER_CHARACTERSTATS FOREIGN KEY (CHARACTERSTATS_ID) REFERENCES `characterStats` (ID) ON DELETE CASCADE;
ALTER TABLE `character`
    ADD CONSTRAINT FK_CHARACTER_USER FOREIGN KEY (USER_ID) REFERENCES `user` (ID);

ALTER TABLE `characterStats`
    ADD CONSTRAINT FK_CHARACTERSTATS_CHARACTER FOREIGN KEY (CHARACTER_ID) REFERENCES `character` (ID);


-- drop table User,Character,CharacterStats;