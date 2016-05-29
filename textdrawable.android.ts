declare var com: any;
const _TextDrawable = com.amulyakhare.textdrawable.TextDrawable;
const _ColorGenerator = com.amulyakhare.textdrawable.util.ColorGenerator;
import view = require('ui/core/view');
import common = require('./textdrawable.common');
import {Color} from 'color';

export class TextDrawable extends common.TextDrawable {
    textdrawable;
    private _android: android.widget.ImageView;
    constructor() {
        super();
    }

    get android(): android.widget.ImageView {
        return this._android;
    }
    public _createUI() {
        if (!this.text) return;
        this._android = new android.widget.ImageView(this._context);
        this._setNativeImage(this.text);
    }
    public _setNativeImage(nativeImage: any) {
        if (!this._android) return;

        this.textdrawable = new _TextDrawable.builder()
            .beginConfig()

        if (typeof this.withBorder) {
            this.textdrawable.withBorder(this.withBorder)
        }

        if (this.fontSize) {
            this.textdrawable.fontSize(this.fontSize);
        }

        if (this.textColor) {
            let color = new Color(this.textColor);
            this.textdrawable.textColor = color.android;
        }
        if (this.withBorder) {
            this.textdrawable.withBorder(this.withBorder)
        }
        if (this.toUpperCase) {
            this.textdrawable.toUpperCase()
        }
        if (this.bold) {
            this.textdrawable.bold()
        }

        if (this.type === 'rect') {

            if (this.bgColor == undefined) {
                const generator = _ColorGenerator.MATERIAL;
                let color = generator.getRandomColor();
                let drawable = this.textdrawable.endConfig()
                    .buildRect(this.text, color);

                this._android.setImageDrawable(drawable);
            } else {
                let color = new Color(this.bgColor);
                let drawable = this.textdrawable.endConfig()
                    .buildRect(this.text, color.android);

                this._android.setImageDrawable(drawable);
            }


        } else if (this.type === 'roundRect') {
            if (this.bgColor == undefined) {
                const generator = _ColorGenerator.MATERIAL;
                let color = generator.getRandomColor();

                if (!this.radius) {
                    this.radius = 10;
                }
                let drawable = this.textdrawable.endConfig()
                    .buildRoundRect(this.text, color, this.radius);

                this._android.setImageDrawable(drawable);
            } else {
                if (!this.radius) {
                    this.radius = 10;
                }

                let color = new Color(this.bgColor);
                let drawable = this.textdrawable.endConfig()
                    .buildRoundRect(this.text, color.android, this.radius);

                this._android.setImageDrawable(drawable);
            }
        } else if (this.type === 'round') {
            if (this.bgColor == undefined) {
                const generator = _ColorGenerator.MATERIAL;
                let color = generator.getRandomColor();
                let drawable = this.textdrawable.endConfig()
                    .buildRound(this.text, color);

                this._android.setImageDrawable(drawable);

            } else {
                let color = new Color(this.bgColor);
                let drawable = this.textdrawable.endConfig()
                    .buildRound(this.text, color.android)

                this._android.setImageDrawable(drawable);

            }

        }

    }

}




