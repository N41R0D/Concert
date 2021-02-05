<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210204152751 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, content LONGTEXT NOT NULL, image VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE concert (id INT AUTO_INCREMENT NOT NULL, id_lieu_id INT NOT NULL, artist_name VARCHAR(255) NOT NULL, concert_name VARCHAR(255) NOT NULL, date DATE NOT NULL, schedule TIME NOT NULL, opening_time TIME DEFAULT NULL, tarif_categ INT NOT NULL, tarif_max NUMERIC(7, 2) NOT NULL, pourcent_tarif INT NOT NULL, parking TINYINT(1) NOT NULL, restaurant TINYINT(1) NOT NULL, artist_presentation LONGTEXT DEFAULT NULL, affiche VARCHAR(255) DEFAULT NULL, categories JSON DEFAULT NULL, is_multimedia TINYINT(1) NOT NULL, INDEX IDX_D57C02D2B42FBABC (id_lieu_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lieu (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, zipcode INT NOT NULL, numberofplaces INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE privatisation (id INT AUTO_INCREMENT NOT NULL, id_lieu_id INT DEFAULT NULL, lastname VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, entreprise VARCHAR(255) DEFAULT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(16) NOT NULL, date DATE NOT NULL, schedule TIME NOT NULL, total_persons INT NOT NULL, budget INT NOT NULL, description LONGTEXT NOT NULL, INDEX IDX_12C3A675B42FBABC (id_lieu_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, concert_id INT NOT NULL, user_id INT NOT NULL, tickettype_id INT NOT NULL, places JSON NOT NULL, total NUMERIC(6, 2) NOT NULL, INDEX IDX_42C8495583C97B2E (concert_id), INDEX IDX_42C84955A76ED395 (user_id), INDEX IDX_42C84955463D01DB (tickettype_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ticket_type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, extra_cost NUMERIC(7, 2) NOT NULL, description LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, civility VARCHAR(10) NOT NULL, bd_date DATE DEFAULT NULL, street VARCHAR(255) DEFAULT NULL, street2 VARCHAR(255) DEFAULT NULL, street3 VARCHAR(255) DEFAULT NULL, zipcode INT DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, country VARCHAR(255) DEFAULT NULL, phone VARCHAR(50) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE concert ADD CONSTRAINT FK_D57C02D2B42FBABC FOREIGN KEY (id_lieu_id) REFERENCES lieu (id)');
        $this->addSql('ALTER TABLE privatisation ADD CONSTRAINT FK_12C3A675B42FBABC FOREIGN KEY (id_lieu_id) REFERENCES lieu (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C8495583C97B2E FOREIGN KEY (concert_id) REFERENCES concert (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955463D01DB FOREIGN KEY (tickettype_id) REFERENCES ticket_type (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C8495583C97B2E');
        $this->addSql('ALTER TABLE concert DROP FOREIGN KEY FK_D57C02D2B42FBABC');
        $this->addSql('ALTER TABLE privatisation DROP FOREIGN KEY FK_12C3A675B42FBABC');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955463D01DB');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955A76ED395');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE concert');
        $this->addSql('DROP TABLE lieu');
        $this->addSql('DROP TABLE privatisation');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE ticket_type');
        $this->addSql('DROP TABLE user');
    }
}
