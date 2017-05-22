define([
    'coreJS/adapt',
    'coreModels/componentModel',
    './adapt-add-narrative-audio-view'
], function(Adapt, ComponentModel, NarrativeAudio) {

    var AudioNarrativeHandler = _.extend({

        initialize: function() {
            this.listenToOnce(Adapt, {
                "app:dataReady": this.onAppDataReady
            });
        },

        onAppDataReady: function() {
            AudioNarrativeHandler.audios = {};
            this.setupRender();
        },

        setupRender: function() {
            Adapt.on('componentView:preRender', this.onPreRender);
            Adapt.on('componentView:postRender', this.onPostRender);
        },

        onPreRender: function(view) {
            if(view.model.get('_component') === 'narrative' && view.model.get('_hasAudio')){
               var items = view.model.get('_items');
                for(var key in items){
                    if(items[key]._media){
                        var itemMod = new ComponentModel(items[key]);
                        itemMod.set('_component', 'media');
                        itemMod.set('_id', 'narrative-'+key);
                        AudioNarrativeHandler.audios[key] = new NarrativeAudio({
                            model: itemMod
                        });
                    }
                }
           }
        },

        onPostRender: function(view) {
            if(view.model.get('_component') === 'narrative' && view.model.get('_hasAudio')){
                for(key in AudioNarrativeHandler.audios){
                    view.$('.narrative-content-body-inner').eq(key).html(AudioNarrativeHandler.audios[key].$el);
                }
            }
        }

    }, Backbone.Events);

    AudioNarrativeHandler.initialize();

    return AudioNarrativeHandler;
});


