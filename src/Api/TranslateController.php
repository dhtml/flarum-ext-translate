<?php
namespace Dhtml\FlarumTranslate\Api;

use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\JsonResponse;
use Flarum\Http\AbstractRouteHandler;
use Google\Cloud\Translate\V2\TranslateClient;

class TranslateController extends AbstractRouteHandler
{
    public function handle(Request $request)
    {
        $body = $request->getParsedBody();
        $text = $body['text'] ?? '';
        $targetLanguage = $body['targetLanguage'] ?? 'en';

        $translate = new TranslateClient([
            'key' => 'YOUR_GOOGLE_API_KEY'
        ]);

        $translation = $translate->translate($text, [
            'target' => $targetLanguage,
        ]);

        return new JsonResponse($translation);
    }
}
