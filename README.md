#Installation
`tns plugin add nativescript-textdrawable`

##Usage

```js
import {TextDrawable} from 'nativescript-textdrawable'
var image = new TextDrawable();
```

Text to display

`image.text = 'O'`

Text color

`image.textColor = 'white' //Color can be set using hex || short hex || name || arbg`

Font Size

`image.fontSize = 75`

Image width

`image.width = 100`

Image height

`image.height = 100`

Border

`image.withBorder = 5`

Uppercase

`image.toUpperCase = true`

Background Color

`image.bgColor = red //Color can be set using hex || short hex || name || arbg ... Random color is used if unset`

Bold 

`image.bold = true`

Type / Shape

Retangle 
`image.type = 'rect'`

Round 
`image.type = 'round'`

Round Rectangle

`image.type = 'roundRect'`

`image.radius = 30 //default 10`


###Xml markup settings

IMPORTANT: Make sure you include xmlns:td="nativescript-textdrawable" on the Page element

e.g
` <td:TextDrawable width="75" height="75" text="of" textColor="white" toUpperCase="true" withBorder="1" type="round" bgColor="#2196F3"/> `

##Screenshot

![ss](screenshots/textdrawable.png?raw=true)
  