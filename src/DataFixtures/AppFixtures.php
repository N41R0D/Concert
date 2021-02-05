<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class AppFixtures extends Fixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");

        for ($i=0; $i < 50; $i++) { 
            $article = new Article();
            $article
                ->setTitle($faker->sentence(rand(2,4)))
                ->setDescription($faker->text())
                ->setContent($faker->paragraph())
                ->setImage("https://picsum.photos/720/480")
            ;
            $manager->persist($article);
        }
        $manager->flush();
    }

    public function getOrder()
    {
        return 1;
    }
}
