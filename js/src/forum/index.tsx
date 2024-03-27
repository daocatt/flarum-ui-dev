import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
// import isObject from 'flarum/utils/isObject';
import type * as Mithril from 'mithril';

// import Tag from 'flarum/tags/common/models/Tag';
import IndexPage from 'flarum/forum/components/IndexPage';
// import WelcomeHero from 'flarum/forum/components/WelcomeHero';

app.initializers.add('gtdxyz-ui-dev', (app) => {

    extend(IndexPage.prototype, 'view', function (this: IndexPage, originalFunc: () => Mithril.Children): Mithril.Children {
      
      if(document.getElementsByClassName('IndexPage').length > 0){
        if($(document.getElementsByClassName('IndexPage')[0].firstElementChild).length > 0)
        {
          // var firstDiv = document.getElementsByClassName('IndexPage')[0].firstElementChild;
          // if($(firstDiv).attr('class')?.indexOf('Hero') !== -1 ){
          //   $(firstDiv).remove();
          // }
          // if( $(firstDiv).children('.Hero').length>0 ){
          //   $(firstDiv).children('.Hero')[0]?.remove();
          // }
          m.mount(document.getElementsByClassName('IndexPage')[0].firstElementChild,{view:()=>{return ''}});
        }
        
      }
      
      if(document.getElementsByClassName('IndexPage-results').length>0){
        if(document.getElementsByClassName('Hero-insert').length < 1)
        {
          m.mount($('<div class="Hero-insert"/>').insertBefore('.IndexPage-toolbar')[0], {
            view: () => (
              this.hero()
            ),
          });
          
        }
        
      }
      
      if(app.current.get('routeName')==='index' || app.current.get('routeName')==='tag'){
        m.redraw();
      }
    });

});

