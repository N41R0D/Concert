<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class UserFixtures extends Fixture implements OrderedFixtureInterface
{
    /** @var UserPasswordEncoderInterface */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");

        $user = new User();
        $user
            ->setFirstname($faker->firstName)
            ->setLastname($faker->lastName)
            ->setRoles(['ROLE_ADMIN'])
            ->setCivility($faker->titleMale)
            ->setBdDate(\DateTime::createFromFormat('Y-m-d', $faker->date($format = 'Y-m-d', $max = '20 years')))
            ->setEmail("admin@concert.com")
            ->setPassword($this->encoder->encodePassword($user, 'test'))
            ->setStreet($faker->streetAddress)
            ->setZipcode(66666)
            ->setCity($faker->city)
            ->setCountry($faker->country)
            ->setPhone($faker->phoneNumber)
            ;
        $manager->persist($user);

        $user = new User();
        $user
            ->setFirstname($faker->firstName)
            ->setLastname($faker->lastName)
            ->setRoles(['ROLE_USER'])
            ->setCivility($faker->titleMale)
            ->setBdDate(\DateTime::createFromFormat('Y-m-d', $faker->date($format = 'Y-m-d', $max = '20 years')))
            ->setEmail("user@concert.com")
            ->setPassword($this->encoder->encodePassword($user, 'test'))
            ->setStreet($faker->streetAddress)
            ->setZipcode(12222)
            ->setCity($faker->city)
            ->setCountry($faker->country)
            ->setPhone($faker->phoneNumber)
        ;
        $manager->persist($user);

        $manager->flush();
        $this->setReference('user', $user);
    }

    public function getOrder()
    {
        return 2; // number in which order to load fixtures
    }
}
