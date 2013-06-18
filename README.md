Star rating component for Sencha Touch 2
==========================

This component allows you to add a star rating component within your Sencha Touch 2 application.

Author - sunhsiv
<br>
Owner - TES

This class is extended from `Ext.Panel`

Uses custom images to show the stars and clear-rating button.

<h2>How to add this component into your application</h2>

(1) Copy the file `StarRating.js` to `touch/ux` folder in your Sencha Touch 2 application.<br>
    <b>Note:</b> You might need to create the `ux` folder
    
(2) Goto your app.js file, in `Ext.Loader.setPath` add this key-value pair

    'Ext.ux': 'touch/ux'
    
(3) Go to view where you need to use the star-rating component and add `Ext.ux.StarRating` to your requires field.

(4) Now you can add the star rating component as an item<br>

``` ruby
{
  xtype: 'ratingPanel',
  rating: 2.5,
  clearButton: true
}
```

where `rating` is the star rating you want to show on the component the rating value range is `0.0 - 5.0`.
<br>Giving a `0` rating or not using the `rating` key shows the component with empty rating.<br>

`clearButton` shows the clear button on right side of the component. By default, this is set as `false`.<br>
setting `clearButton` to `true` shows the clear button.<br>
Tapping the clear button will clear the rating in the component.

<b>Note:</b>The project is currently under development. This is a beta version.
