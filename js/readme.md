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