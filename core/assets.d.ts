/// Assets
/// https://docs.retrogadgets.game/api/assets.html
/// they're essentially entirely virtual and are cannot be instantiated
/// the __assetBrand guards against uninentional instantiation

type Asset = SpriteSheet | RenderBuffer | Code | AudioSample | Palette;

type SpriteSheet = __ModuleBrand & {
    Palatte: Palette;
    IsValid(): boolean;
    GetPixelData(spriteX: number, spriteY: number): PixelData;
    /**
     * Returns a {@link PixelData} object containing the data of a specific sprite. The sprite is identified by spriteX and spriteY which represent its coordinate on the grid.
     * @param spriteX
     * @param spriteY
     */
    GetSpritePixelData(spriteX: number, spriteY: number): PixelData;
};

/**
 *A RenderBuffer is similar to a {@link PixelData}, however it can't be modified directly from code.
 *VideoChips have an array of child RenderBuffers, with the VideoChip.RenderOnBuffer method you can set one as render target allowing you to use draw methods on the selected RenderBuffer.
 *A RenderBuffer can also be obtained with the Webcam module, to be displayed with VideoChip methods.
 */
type RenderBuffer = __ModuleBrand & {
    Width: number;
    Height: number;
    IsValid(): boolean;
    GetPixelData(x: number, y: number): PixelData;
};

type Code = {
    __assetBrand: never;
};

type AudioSample = __ModuleBrand & {
    SamplesCount: number;
    Channels: number;
    Frequency: number;
    /**
     * Length of the AudioSample in seconds
     */
    Length: number;
    /**
     * Table that contains the AudioSample's metadata.
     * See {@link MetadataNames} for the list of available metadata.
     */
    Metadata: MetadataNames[];
    IsValid(): boolean;
};

type Palette = __ModuleBrand & {};
