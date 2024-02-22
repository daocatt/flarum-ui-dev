import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
// import isObject from 'flarum/utils/isObject';
import type * as Mithril from 'mithril';

// import Tag from 'flarum/tags/common/models/Tag';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
// import WelcomeHero from 'flarum/forum/components/WelcomeHero';
// import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import PostStream from 'flarum/forum/components/PostStream';
import PostFirstStream from './components/PostFirstStream';
import PostOnlyStream from './components/PostOnlyStream';


app.initializers.add('gtdxyz-ui-dev', (app) => {

    override(IndexPage.prototype, 'view', function (this: IndexPage, originalFunc: () => Mithril.Children): Mithril.Children {
        this.view = function() {
            return (
                <div className="IndexPage">
                  
                  <div className="container">
                    <div className="sideNavContainer">
                      <nav className="IndexPage-nav sideNav">
                        <ul>{listItems(this.sidebarItems().toArray())}</ul>
                      </nav>
                      <div className="IndexPage-results sideNavOffset">
                        {this.hero()}
                        <div className="IndexPage-content">
                            <div className="IndexPage-toolbar">
                            <ul className="IndexPage-toolbar-view">{listItems(this.viewItems().toArray())}</ul>
                            <ul className="IndexPage-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
                            </div>
                            <DiscussionList state={app.discussions} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
        }
        return originalFunc();
    });

    extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
        items.remove('scrubber');
    });

    override(DiscussionPage.prototype, 'view', function (this: DiscussionPage, originalFunc: () => Mithril.Children): Mithril.Children {

        this.pageContent = function(): ItemList<Mithril.Children> {
            const items = new ItemList<Mithril.Children>();
        
            // items.add('hero', this.hero(), 100);
            items.add('main', <div className="container">{this.mainContent().toArray()}</div>, 10);
        
            return items;
        }

        /**
         * List of items rendered inside the main page content container.
         * <div className="DiscussionPage-thread-body">{m.trust(this.discussion.firstPost().contentHtml())}</div>
         */
        this.mainContent = function(): ItemList<Mithril.Children> {
            const items = new ItemList<Mithril.Children>();
        
            items.add('sidebar', this.sidebar(), 100);
            items.add(
                'poststream',
                <div className="DiscussionPage-stream">
                <div className="DiscussionPage-thread">
                    {this.hero()}
                    {/* <PostFirstStream discussion={this.discussion} stream={this.stream} onPositionChange={this.positionChanged.bind(this)} />     */}
                </div>
                <div className="DiscussionPage-comments">
                    <PostStream discussion={this.discussion} stream={this.stream} onPositionChange={this.positionChanged.bind(this)} />
                </div>
                </div>,
                10
            );
        
            return items;
        }

        return originalFunc();
    });

    
});

