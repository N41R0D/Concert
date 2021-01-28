<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LieuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=LieuRepository::class)
 */
class Lieu
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $street;

    /**
     * @ORM\Column(type="integer")
     */
    private $zipcode;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberofplaces;

    /**
     * @ORM\OneToMany(targetEntity=Privatisation::class, mappedBy="idLieu")
     */
    private $id_priva;

    public function __construct()
    {
        $this->id_priva = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getZipCode(): ?string
    {
        return $this->zipcode;
    }

    public function setZipCode(string $zip_code): self
    {
        $this->zipcode = $zip_code;

        return $this;
    }

    public function getNumberofplaces(): ?int
    {
        return $this->numberofplaces;
    }

    public function setNumberofplaces(int $numberofplaces): self
    {
        $this->numberofplaces = $numberofplaces;

        return $this;
    }

    /**
     * @return Collection|Privatisation[]
     */
    public function getIdPriva(): Collection
    {
        return $this->id_priva;
    }

    public function addIdPriva(Privatisation $idPriva): self
    {
        if (!$this->id_priva->contains($idPriva)) {
            $this->id_priva[] = $idPriva;
            $idPriva->setIdLieu($this);
        }

        return $this;
    }

    public function removeIdPriva(Privatisation $idPriva): self
    {
        if ($this->id_priva->removeElement($idPriva)) {
            // set the owning side to null (unless already changed)
            if ($idPriva->getIdLieu() === $this) {
                $idPriva->setIdLieu(null);
            }
        }

        return $this;
    }
}
