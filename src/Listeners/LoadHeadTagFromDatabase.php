<?php
namespace Gtdxyz\Uidev\Listeners;

use Flarum\Frontend\Document;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class LoadHeadTagFromDatabase
{
    /**
     * @var string
     */
    protected $packagePrefix = 'gtdxyz-ui-dev.';
    /**
     * @var array
     */
    protected $fieldsToGet = [
        'head_tag',
    ];

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * LoadSettingsFromDatabase constructor.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Document $document)
    {
        //For Google Analytics
        foreach ($this->fieldsToGet as $field) {
            $value = $this->settings->get($this->packagePrefix.$field);

            if (isset($value) && !empty($value)) {
                $document->head[] = $this->settings->get($this->packagePrefix.$field);
            }
        }
    }
}
