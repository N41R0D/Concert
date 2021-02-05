<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Concert::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concert;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false, name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=TicketType::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $tickettype;

    /**
     * @ORM\Column(type="json")
     */
    private $places = [];

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $total;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConcert(): ?concert
    {
        return $this->concert;
    }

    public function setConcert(?concert $concert): self
    {
        $this->concert = $concert;

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getTickettype(): ?tickettype
    {
        return $this->tickettype;
    }

    public function setTickettype(?tickettype $tickettype): self
    {
        $this->tickettype = $tickettype;

        return $this;
    }

    public function getPlaces(): ?array
    {
        return $this->places;
    }

    public function setPlaces(array $places): self
    {
        $this->places = $places;

        return $this;
    }

    public function getTotal(): ?string
    {
        return $this->total;
    }

    public function setTotal(string $total): self
    {
        $this->total = $total;

        return $this;
    }
}
