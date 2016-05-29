import view = require('ui/core/view');

export declare class TextDrawable extends view.View {
    private static textProperty;
    private static typeProperty;
    private static textColorProperty;
    private static useFontProperty;
    private static fontSizeProperty;
    private static toUpperCaseProperty;
    private static withBorderProperty;
    private static boldProperty;
    private static bgColorProperty;
    private static radiusProperty;
    constructor();
    text: string;
    type: string;
    textColor: string;
    useFont: string;
    fontSize: number;
    toUpperCase: boolean;
    withBorder: number;
    bold: boolean;
    bgColor: string;
    radius: number;
}
