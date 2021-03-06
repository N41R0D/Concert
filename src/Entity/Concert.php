<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ConcertRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ConcertRepository::class)
 */
class Concert
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(name="artist_name", type="string", length=255)
     */
    private $artist_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $concert_name;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="time")
     */
    private $schedule;

    /**
     * @ORM\Column(type="time", nullable=true)
     */
    private $opening_time;

    /**
     * @ORM\Column(type="integer")
     */
    private $tarif_categ;

    /**
     * @ORM\Column(type="decimal", precision=7, scale=2)
     */
    private $tarif_max;

    /**
     * @ORM\Column(type="integer")
     */
    private $pourcent_tarif;

    /**
     * @ORM\Column(type="boolean")
     */
    private $parking;

    /**
     * @ORM\Column(type="boolean")
     */
    private $restaurant;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $artist_presentation;

    /**
     * @ORM\ManyToOne(targetEntity=Lieu::class, inversedBy="concerts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $idLieu;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $affiche;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $categories = [];

    /**
     * @ORM\Column(type="boolean")
     */
    private $isMultimedia;

    /**
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="concert", orphanRemoval=true)
     */
    private $reservations;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArtistName(): ?string
    {
        return $this->artist_name;
    }

    public function setArtistName(string $artist_name): self
    {
        $this->artist_name = $artist_name;

        return $this;
    }

    public function getConcertName(): ?string
    {
        return $this->concert_name;
    }

    public function setConcertName(string $concert_name): self
    {
        $this->concert_name = $concert_name;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getSchedule(): ?\DateTimeInterface
    {
        return $this->schedule;
    }

    public function setSchedule(\DateTimeInterface $schedule): self
    {
        $this->schedule = $schedule;

        return $this;
    }

    public function getOpeningTime(): ?\DateTimeInterface
    {
        return $this->opening_time;
    }

    public function setOpeningTime(?\DateTimeInterface $opening_time): self
    {
        $this->opening_time = $opening_time;

        return $this;
    }

    public function getTarifCateg(): ?int
    {
        return $this->tarif_categ;
    }

    public function setTarifCateg(int $tarif_categ): self
    {
        $this->tarif_categ = $tarif_categ;

        return $this;
    }

    public function getTarifMax(): ?string
    {
        return $this->tarif_max;
    }

    public function setTarifMax(string $tarif_max): self
    {
        $this->tarif_max = $tarif_max;

        return $this;
    }

    public function getPourcentTarif(): ?int
    {
        return $this->pourcent_tarif;
    }

    public function setPourcentTarif(int $pourcent_tarif): self
    {
        $this->pourcent_tarif = $pourcent_tarif;

        return $this;
    }

    public function getParking(): ?bool
    {
        return $this->parking;
    }

    public function setParking(bool $parking): self
    {
        $this->parking = $parking;

        return $this;
    }

    public function getRestaurant(): ?bool
    {
        return $this->restaurant;
    }

    public function setRestaurant(bool $restaurant): self
    {
        $this->restaurant = $restaurant;

        return $this;
    }

    public function getArtistPresentation(): ?string
    {
        return $this->artist_presentation;
    }

    public function setArtistPresentation(?string $artist_presentation): self
    {
        $this->artist_presentation = $artist_presentation;

        return $this;
    }

    public function getIdLieu(): ?Lieu
    {
        return $this->idLieu;
    }

    public function setIdLieu(?Lieu $idLieu): self
    {
        $this->idLieu = $idLieu;

        return $this;
    }

    public function getAffiche(): ?string
    {
        return $this->affiche;
    }

    public function setAffiche(?string $affiche): self
    {
        $this->affiche = $affiche;

        return $this;
    }

    public function getCategories(): ?array
    {
        return $this->categories;
    }

    public function setCategories(?array $categories): self
    {
        $this->categories = $categories;

        return $this;
    }

    public function getIsMultimedia(): ?bool
    {
        return $this->isMultimedia;
    }

    public function setIsMultimedia(bool $isMultimedia): self
    {
        $this->isMultimedia = $isMultimedia;

        return $this;
    }

    /**
     * @return Collection|Reservation[]
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setConcert($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getConcert() === $this) {
                $reservation->setConcert(null);
            }
        }

        return $this;
    }
}
