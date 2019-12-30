import Layer from 'ol/layer/Layer';
import VectorLayer from 'ol/layer/Vector';
import { FrameState } from 'ol/PluggableMap';
import WebGLLayerRenderer from 'ol/renderer/webgl/Layer';

export default class WebGLPointsLayerRenderer extends WebGLLayerRenderer {
    constructor(vectorLayer: VectorLayer, options: any);

    handles(layer: Layer): boolean;
    renderHitDetection(frameState: FrameState): void;
}
