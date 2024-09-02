<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
    // Global settings
    '*' => [
        // Use email instead of username for logins
        'useEmailAsUsername' => true,
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,
        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,
        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,
        // Control Panel trigger word
        'cpTrigger' => 'admin',
        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),
        // Error templates location
        'errorTemplatePrefix' => "_errors/",
        // default image quality for Craft transforms
        'defaultImageQuality' => 99,
        // Craft transforms should happen before the page is loaded
        'generateTransformsBeforePageLoad' => true,
        // Timezone
        'timezone' => 'Pacific/Auckland',
        // Pagination url e.g. page/2
        'pageTrigger' => 'page/',
        // Invalid Login Window Duration
        'invalidLoginWindowDuration' => 'PT1H',
        // Cooldown Duration for failed logins
        'cooldownDuration' => 'PT5M',
        // Token duration e.g. share links
        'defaultTokenDuration' => 'P14D',
        // Token querystring :/
        'tokenParam' => 'crafttoken',
        // aliases
        'aliases' => [
            '@assetBaseUrl' => '/assets',
            '@assetBasePath' => './assets',
            '@siteUrl' => getenv("DEFAULT_SITE_URL"),
            '@siteName' => getenv("DEFAULT_SITE_NAME"),
        ],
    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode
        'devMode' => true,
        // disable local caching
        'enableTemplateCaching' => false,
        // Allow updates
        'allowUpdates' => true,
    ],

    // Staging environment settings
    'staging' => [
        // Dev Mode
        'devMode' => false,
        // Allow updates
        'allowUpdates' => false,
        // Allow admin changes
        'allowAdminChanges' => false,
    ],

    // Production environment settings
    'production' => [
        // Dev Mode
        'devMode' => false,
        // Allow updates
        'allowUpdates' => false,
        // Allow admin changes
        'allowAdminChanges' => false,
    ],
];
