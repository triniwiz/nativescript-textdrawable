declare var com: any;
const _TextDrawable = com.amulyakhare.textdrawable.TextDrawable;
import view = require('ui/core/view');
import app = require("application");
import {Property, PropertyMetadataSettings, PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";


function onTextPropertyChanged(data: PropertyChangeData) {
     var td = <TextDrawable>data.object;
      td._setNativeImage(data.newValue ? data.newValue : null);
}


export class TextDrawable extends view.View {

    private static textProperty = new Property("text", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None, onTextPropertyChanged));
    private static typeProperty = new Property("type", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static textColorProperty = new Property("textColor", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static useFontProperty = new Property("useFont", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static fontSizeProperty = new Property("fontSize", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static toUpperCaseProperty = new Property("toUpperCase", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static withBorderProperty = new Property("withBorder", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static boldProperty = new Property("bold", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static bgColorProperty = new Property("bgColor", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
    private static radiusProperty = new Property("radius", "TextDrawable", new PropertyMetadata(undefined, PropertyMetadataSettings.None))

    constructor() {
        super();
    }
    get text(): string {
        return this._getValue(TextDrawable.textProperty);
    }

    set text(value: string) {
        this._setValue(TextDrawable.textProperty, value)
    }

    get type(): string {
        return this._getValue(TextDrawable.typeProperty);
    }

    set type(value: string) {
        this._setValue(TextDrawable.typeProperty, value)
    }
    get textColor(): string {
        return this._getValue(TextDrawable.textColorProperty);
    }

    set textColor(value: string) {
        this._setValue(TextDrawable.textColorProperty, value)
    }

    get useFont(): string {
        return this._getValue(TextDrawable.useFontProperty);
    }
    set useFont(value: string) {
        this._setValue(TextDrawable.useFontProperty, value)
    }

    get fontSize(): number {
        return this._getValue(TextDrawable.fontSizeProperty);
    }
    set fontSize(value: number) {
        this._setValue(TextDrawable.fontSizeProperty, value)
    }
    get toUpperCase(): boolean {
        return this._getValue(TextDrawable.toUpperCaseProperty);
    }

    set toUpperCase(value: boolean) {
        this._setValue(TextDrawable.toUpperCaseProperty, value)
    }
    get withBorder(): number {
        return this._getValue(TextDrawable.withBorderProperty);
    }

    set withBorder(value: number) {
        this._setValue(TextDrawable.withBorderProperty, value)
    }
    get bold(): boolean {
        return this._getValue(TextDrawable.boldProperty);
    }

    set bold(value: boolean) {
        this._setValue(TextDrawable.boldProperty, value)
    }

    get bgColor(): string {
        return this._getValue(TextDrawable.bgColorProperty);
    }

    set bgColor(value: string) {
        this._setValue(TextDrawable.bgColorProperty, value)
    }
    get radius(): number {
        return this._getValue(TextDrawable.radiusProperty);
    }

    set radius(value: number) {
        this._setValue(TextDrawable.radiusProperty, value)
    }
}