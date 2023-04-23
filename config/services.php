<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'google' => [
        'client_id' => '90912285491-lc9vrs1iip7q79nfredl7ajljdfag7nc.apps.googleusercontent.com',
        'client_secret' => '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',
        'redirect' => 'http://localhost:8000/authorized/google/callback',
    ],

    'facebook' => [
        'client_id' => '189806450529431',
        'client_secret' => '15aec6f2b1a6b74f07c918fd8ab3c892',
        'redirect' => 'http://localhost:8000/authorized/facebook/callback',
    ],

];
