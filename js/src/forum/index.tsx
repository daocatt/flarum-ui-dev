import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import isObject from 'flarum/utils/isObject';
import type * as Mithril from 'mithril';

// import Tag from 'flarum/tags/common/models/Tag';
import IndexPage from 'flarum/forum/components/IndexPage';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import DiscussionList from 'flarum/forum/components/DiscussionList';

// import DiscussionPage from 'flarum/forum/components/DiscussionPage';

app.initializers.add('gtdxyz-ui-dev', (app) => {
    
    override(IndexPage.prototype, 'view', function (this: IndexPage, originalFunc: () => Mithril.Children): Mithril.Children {
        // this.hero = function(){
        //     return '';
        // }
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

    // let insideHero = function(){
    //     return <WelcomeHero />;
    // };
    
});

