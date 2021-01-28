<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210128094241 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE concert ADD id_lieu_id INT NOT NULL');
        $this->addSql('ALTER TABLE concert ADD CONSTRAINT FK_D57C02D2B42FBABC FOREIGN KEY (id_lieu_id) REFERENCES lieu (id)');
        $this->addSql('CREATE INDEX IDX_D57C02D2B42FBABC ON concert (id_lieu_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE concert DROP FOREIGN KEY FK_D57C02D2B42FBABC');
        $this->addSql('DROP INDEX IDX_D57C02D2B42FBABC ON concert');
        $this->addSql('ALTER TABLE concert DROP id_lieu_id');
    }
}
