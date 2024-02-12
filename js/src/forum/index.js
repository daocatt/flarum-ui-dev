import { extend, override } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

app.initializers.add('gtdxyz/flarum-ui-dev', (app) => {
    extend(DiscussionPage.prototype, 'view', function (vdom) {
        // console.log('flarum-ext-test');
    })
})