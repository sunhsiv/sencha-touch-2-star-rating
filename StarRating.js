Ext.define('Ext.ux.StarRating',
{
	extend : 'Ext.Panel',
	xtype : 'ratingPanel',
	requires: ['Ext.Img'],
	config:
	{
		layout: 'hbox',
		style: 'background: black',
		defaults:
		{
			flex: 1,
			width: 15
		},
		items:
		[
			{
				xtype: 'image',
				itemId: 'star-1',
				src: 'resources/images/star-rating-icons/star-gray-left.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						console.log(image.parent.id);
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-2',
				src: 'resources/images/star-rating-icons/star-gray-right.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-3',
				src: 'resources/images/star-rating-icons/star-gray-left.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-4',
				src: 'resources/images/star-rating-icons/star-gray-right.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-5',
				src: 'resources/images/star-rating-icons/star-gray-left.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-6',
				src: 'resources/images/star-rating-icons/star-gray-right.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-7',
				src: 'resources/images/star-rating-icons/star-gray-left.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-8',
				src: 'resources/images/star-rating-icons/star-gray-right.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-9',
				src: 'resources/images/star-rating-icons/star-gray-left.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'star-10',
				src: 'resources/images/star-rating-icons/star-gray-right.png',
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().starSelection(image);
					}
				}
			},
			{
				xtype: 'image',
				itemId: 'clear-button',
				src: 'resources/images/star-rating-icons/clear-red.png',
				width: 30,
				hidden: true,
				listeners : 
				{
					tap : function(image, e, eOpts) 
					{
						this.getParent().clearRating();
					}
				}
			}
		]
	},
	
	initialize: function(rPanel, eOpts) 
	{
        console.log('init ' + this.rating);
        if (this.rating != undefined)
    		this.changeRating((this.rating * 2).toFixed());
    	
    	if (this.clearButton)
    	{
    		this.getComponent('clear-button').setHidden(false);
    	}
    },
	
	rating: undefined,
	clearButton: false,
	
	getRating: function()
	{
		return this.rating;
	},
	
	setRating: function(ratingValue)
	{
		this.rating = ratingValue;
		
    	this.changeRating((this.rating * 2).toFixed());
    	return;
	},
	
	starSelection: function(component)
    {
    	//	called when user taps/touches a star component
    	//	integerValue
    	//	range 1 - 10
    	
    	var selectionValue = component.getItemId();
    	this.clearRating();
    	this.changeRating(parseInt(selectionValue.split('-')[1]));
    	
    },
	
	changeRating: function(selection)
    {    	
    	var starId = undefined;
    	for (var i = 1; i <= selection; i++)
    	{
    		starId = 'star-' + i;
    		if ((i % 2) != 0)
    			Ext.getCmp(this.id).getComponent(starId).setSrc('resources/images/star-rating-icons/star-green-left.png');
    		else
    			Ext.getCmp(this.id).getComponent(starId).setSrc('resources/images/star-rating-icons/star-green-right.png');
    	}
    	
    	this.rating = selection/2.0;
    },
    
    clearRating: function()
    {
    	//	resets the star rating to nil (0.0)
    	//	hookup with a clear button
    	
    	var starId = undefined;
    	for (var i = 1; i <= 10; i++)
    	{
    		starId = 'star-' + i;
    		if ((i % 2) != 0)
    			Ext.getCmp(this.id).getComponent(starId).setSrc('resources/images/star-rating-icons/star-gray-left.png');
    		else
    			Ext.getCmp(this.id).getComponent(starId).setSrc('resources/images/star-rating-icons/star-gray-right.png');
    	}
    	
    	this.rating = undefined;
    }
});