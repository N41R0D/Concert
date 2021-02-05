<?php

namespace App\DataFixtures;

use App\Entity\Concert;
use App\Entity\Lieu;
use App\Entity\Reservation;
use App\Entity\TicketType;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class LieuFixtures extends Fixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {

        $faker = Factory::create("fr_FR");

        $lieux = [];
        $lieu = new Lieu();
        $lieu
            ->setName('Aix-en-Provence')
            ->setStreet('Rue d\'Aix')
            ->setCity('Aix-en-Provence')
            ->setZipCode(13100)
            ->setNumberofplaces('100')
            ;
        $manager->persist($lieu);
        $lieux[] = $lieu;

        $lieu = new Lieu();
        $lieu
            ->setName('Bourges')
            ->setStreet('Rue de Bourges')
            ->setCity('Bourges')
            ->setZipCode(18000)
            ->setNumberofplaces('120')
        ;
        $manager->persist($lieu);
        $lieux[] = $lieu;

        $lieu = new Lieu();
        $lieu
            ->setName('Cannes')
            ->setStreet('Rue de Cannes')
            ->setCity('Cannes')
            ->setZipCode(06400)
            ->setNumberofplaces('110')
        ;
        $manager->persist($lieu);

        $lieu = new Lieu();
        $lieu
            ->setName('Dunkerque')
            ->setStreet('Rue de Dunkerque')
            ->setCity('Dunkerque')
            ->setZipCode(59080)
            ->setNumberofplaces('90')
        ;
        $manager->persist($lieu);
        $lieux[] = $lieu;

        $lieu = new Lieu();
        $lieu
            ->setName('Echirolles')
            ->setStreet('Rue d\'Echirolles')
            ->setCity('Echirolles')
            ->setZipCode(38130)
            ->setNumberofplaces('115')
        ;
        $manager->persist($lieu);
        $lieux[] = $lieu;
        $manager->flush();

//        $categories = [];
//        $categories("pop", "rap", "electro", "rock", "metal");

        for($i=0; $i < 50; $i++){
            $dt = $faker->dateTimeBetween($startDate = '-1 years', $endDate = '+2 years');
            $date = $dt->format("Y-m-d");
            $schedule = $faker->time($format = 'H:i');

            $concert = new Concert();
            $concert
                ->setArtistName($faker->userName)
                ->setConcertName($faker->sentence($nbWords = 4, $variableNbWords = true))
                ->setDate(\DateTime::createFromFormat('Y-m-d', $date))
                ->setSchedule(\DateTime::createFromFormat('H:i', $schedule))
                ->setOpeningTime(\DateTime::createFromFormat('H:i',$faker->time($format = 'H:i', $max = $schedule)))
                ->setTarifCateg($faker->numberBetween($min = 1, $max = 3))
                ->setTarifMax($faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 1000)) // 48.8932)
                ->setPourcentTarif($faker->numberBetween($min = 0, $max = 5))
                ->setParking($faker->boolean($chanceOfGettingTrue = 25))
                ->setRestaurant($faker->boolean($chanceOfGettingTrue = 25))
                ->setArtistPresentation($faker->text($maxNbChars = 200))
                ->setIdLieu($faker->randomElement($lieux))
                ->setAffiche("https://lh3.googleusercontent.com/proxy/Cs2hHyPO1aQ_ryW3w5DwT9EYTtXU7el71fnzwP4niPDZBwKc0ZZ8yZinCb2dzBapfoXlgxOewMYuOjtWbLpVWkniGKuKgOSA1YpNtZqSEhygAhFEsPvcjk7osxQK0SrahPOF1LqZLFDucfLafgI8Aj5r-Q99OipO3XI7oTjiBJmVhVtRivY")
                ->setCategories([$faker->randomElement($array = array ("pop", "rap", "electro", "rock", "metal"))])
                ->setIsMultimedia($faker->numberBetween($min = 0, $max = 1))
//                ->setIdLieu($lieu)
            ;
            $manager->persist($concert);
        }
        $manager->flush();


        $tickettype = new TicketType();
        $tickettype
            ->setName('E-Ticket')
            ->setExtraCost(0)
            ->setDescription("Imprimez vos billets chez vous dès la fin de votre commande et recevez-les également par e-mail en format pdf.")
        ;
        $manager->persist($tickettype);
        $tickettype = new TicketType();
        $tickettype
            ->setName('Retrait au guichet')
            ->setExtraCost(1.8)
            ->setDescription("Retirez vos billets auprès de nos guichets (comprend des frais de transaction).")
        ;
        $manager->persist($tickettype);
        $tickettype = new TicketType();
        $tickettype
            ->setName('Envoi postal')
            ->setExtraCost(8.0)
            ->setDescription("Retirez vos billets auprès de nos guichets (comprend des frais de transaction).")
        ;
        $manager->persist($tickettype);
        $manager->flush();

        $user = $this->getReference('user');

        $reservation = new Reservation();
        $reservation
            ->setConcert($concert)
            ->setUser($user)
            ->setTickettype($tickettype)
            ->setPlaces(['A1'])
            ->setTotal(66.5)
        ;
        $manager->persist($reservation);
        $manager->flush();

    }

    public function getOrder()
    {
        return 3; // number in which order to load fixtures
    }
}
