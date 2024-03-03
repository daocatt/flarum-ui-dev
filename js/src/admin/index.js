import app from 'flarum/admin/app';

app.initializers.add('gtdxyz-ui-dev', () => {

  app.extensionData
    .for('gtdxyz-ui-dev')
    .registerSetting(function(){
      return (
        <div className="Form-group">
        <label>HTML HEAD TAG</label>
        <textarea className="FormControl" bidi={this.setting('gtdxyz-ui-dev.head_tag')} />
        </div>
      );
    });
    
});
