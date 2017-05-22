# adapt-add-narrative-audio

##Installation

Needs Adapt Framework Narrative & Media Element. Adds audio to the text part of the narrative component

Example JSON - place inside component.json. Include "_media" in narrative items

```
 {
        "_id": "c-07",
        "_parentId": "b-07",
        "_classes": "",
        "_type":"component",
        "_layout": "full",
        "_component": "narrative",
		"_hasAudio": true,
        "title": "Narrative",
        "displayTitle": "Narrative",
        "body": "This is optional body text. Select the forward arrows to move through the narrative on a desktop, or swipe the images and select the plus icons to do so on mobile.",
        "instruction": "",
        "_hasNavigationInTextArea": false,
        "mobileInstruction": "This is optional instruction text that will be shown when viewed on mobile.",
        "_setCompletionOn":"allItems",
        "_items": [
            {
		"title": "Narrative stage 1 title",
                "titleReduced": "Reduced title",
                "body": "This is display text 1. If viewing on desktop or tablet, this text will appear to the right of the image. On mobile, you’ll need to select the plus icon to reveal this text.",
                "bodyReduced": "Reduced text",
                "_graphic": {
                    "src": "course/en/images/slider-1.jpg",
                    "alt": "First graphic"
                },
                "strapline": "Here is the first...",
                "_media": {
                    	"mp3": "course/en/audio/phonebill.mp3",
			"ogg": "course/en/audio/phonebill.mp3"
                }
            },
            {
                "title": "Narrative stage 2 title",
                "body": "This is display text 2.",
                "_graphic": {
                    "src": "course/en/images/slider-2.jpg",
                    "alt": "Second graphic",
                    "attribution":"Copyright © 2015"
                },
                "strapline": "Now comes the second..."
            },
            {
                "title": "Narrative stage 3 title",
                "body": "This is display text 3.",
                "_graphic": {
                    "src": "course/en/images/slider-3.jpg",
                    "alt": "Third graphic",
                    "attribution":"Copyright © 2015"
                },
                "strapline": "Third here!"
            }
        ]
    },

```

Will play either first time in view, or everytime in view. 

