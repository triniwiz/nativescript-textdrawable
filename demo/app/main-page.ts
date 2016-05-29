import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
import {TextDrawable} from 'nativescript-textdrawable';

let image = new TextDrawable();
image.text = "ME";
image.bold = true;
image.type = 'rect';
image.width = 75;
image.height = 75;
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    page.getViewById('sl')._addView(image)
}