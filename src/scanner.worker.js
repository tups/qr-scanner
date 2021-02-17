import jsQR from 'jsqr-es6/dist/jsQR.js';
import {
    CreateTable,
    CreateScanTable,
    Scale,
    Rotate,
    ScanImage,
    Image,
    FormatPriority,
    Multiple,
    availableFormats,
    Locations,
    Main
} from "./Decoder1D";


/* eslint-disable no-restricted-globals */
//import {BrowserMultiFormatReader} from "@zxing/library/es2015/index.js";

let inversionAttempts = 'dontInvert';
let grayscaleWeights = {
    // weights for quick luma integer approximation (https://en.wikipedia.org/wiki/YUV#Full_swing_for_BT.601)
    red: 77,
    green: 150,
    blue: 29,
    useIntegerApproximation: true,
};


self.onmessage = event => {
    const type = event['data']['type'];
    const data = event['data']['data'];

    switch (type) {
        case 'decode':
            decode(data);
            break;
        case 'grayscaleWeights':
            setGrayscaleWeights(data);
            break;
        case 'inversionMode':
            setInversionMode(data);
            break;
        case 'close':
            // close after earlier messages in the event loop finished processing
            self.close();
            break;
    }
};

function decode(data) {
    const rgbaData = data['data'];
    const width = data['width'];
    const height = data['height'];
    const worker = self;

    const resultTemp = jsQR(rgbaData, width, height, {
        inversionAttempts: inversionAttempts,
        greyScaleWeights: grayscaleWeights,
    });

    if (resultTemp) {
        worker.postMessage({
            type: 'qrResult',
            data: resultTemp ? resultTemp : null,
        });
    } else {
        let width;
        let decodeFormats;

        ScanImage = {
            data: new Uint8ClampedArray(data.scan),
            width: data.scanWidth,
            height: data.scanHeight
        };
        switch (data.rotation) {
            case 8:
                ScanImage.data = Rotate(ScanImage.data, ScanImage.width, ScanImage.height, -90);
                width = data.scanWidth;
                ScanImage.width = ScanImage.height;
                ScanImage.height = width;
                break;
            case 6:
                ScanImage.data = Rotate(ScanImage.data, ScanImage.width, ScanImage.height, 90);
                width = data.scanWidth;
                ScanImage.width = ScanImage.height;
                ScanImage.height = width;
                break;
            case 3:
                ScanImage.data = Rotate(ScanImage.data, ScanImage.width, ScanImage.height, 180);
        }
        Image = {
            data: Scale(ScanImage.data, ScanImage.width, ScanImage.height),
            width: ScanImage.width / 2,
            height: ScanImage.height / 2
        };
        if (data.postOrientation) {
            postMessage({
                result: Image,
                success: 'orientationData'
            });
        }

        FormatPriority = [];
        Multiple = true;

        if (typeof data.multiple !== 'undefined') {
            Multiple = data.multiple;
        }

        if (typeof data.decodeFormats !== 'undefined') {
            decodeFormats = data.decodeFormats;
        } else {
            decodeFormats = availableFormats;
        }

        for (let i = 0; i < decodeFormats.length; i++) {
            FormatPriority.push(decodeFormats[i]);
        }

        Locations = [];

        Promise.all([CreateTable(), CreateScanTable()]).then(() => {

            let FinalResult = Main();

            if (FinalResult.length > 0) {
                postMessage({
                    id: data.id,
                    result: FinalResult,
                    success: true,
                    type: 'qrResult',
                    data: FinalResult,
                });
            } else {
                postMessage({
                    id: data.id,
                    result: FinalResult,
                    success: false,
                    type: 'qrResult',
                    data: null,
                });
            }
        });
    }

}

function setGrayscaleWeights(data) {
    // update grayscaleWeights in a closure compiler compatible fashion
    grayscaleWeights.red = data['red'];
    grayscaleWeights.green = data['green'];
    grayscaleWeights.blue = data['blue'];
    grayscaleWeights.useIntegerApproximation = data['useIntegerApproximation'];
}

function setInversionMode(inversionMode) {
    switch (inversionMode) {
        case 'original':
            inversionAttempts = 'dontInvert';
            break;
        case 'invert':
            inversionAttempts = 'onlyInvert';
            break;
        case 'both':
            inversionAttempts = 'attemptBoth';
            break;
        default:
            throw new Error('Invalid inversion mode');
    }
}
