<?php

namespace App\Controller;

use App\Entity\Concert;
use App\Repository\ConcertRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ConcertController extends AbstractController
{

    /**
     * @Route("/concerts/checkdispo/{idconcert}", name="api_concert")
     *  en realité, cela retourne les place non disponible et non l'inverse)
     * @return JsonResponse
     */
    public function PlacesDispo(ConcertRepository $concertRepository, int $idconcert): JsonResponse
    {
        return $this->json($concertRepository->checkSiege($idconcert), 200, ['Access-Control-Allow-Origin' => '*']);
    }
}
