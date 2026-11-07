<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class BookController extends AbstractController
{
    #[Route('/api/books', name: 'api_books_list', methods: ['GET'])]
public function index(): JsonResponse
{
    $books = [
        [
            'id' => 1,
            'title' => 'The Hobbit',
            'author' => 'J.R.R. Tolkien'
        ],
        [
            'id' => 2,
            'title' => '1984',
            'author' => 'George Orwell'
        ]
    ];

    return $this->json($books);
}
}
