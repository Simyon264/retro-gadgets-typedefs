/*
 * Globals
 */
type Desk = __ModuleBrand & {
    /**
     * Return true if the lamp is on
     */
    GetLampState(this: void): boolean;
    SetLampState(this: void, state: boolean): void;
    SetLampColor(this: void, color: color): void;
    ShowMessage(this: void, message: string, persistent: boolean): void;
    ShowWarning(this: void, message: string, persistent: boolean): void;
    ShowError(this: void, message: string, persistent: boolean): void;
    HideMessage(this: void): void;
};

/*
 * Desk declaration
 */
declare const desk: Desk;

/**
 * Runtime functions
 */
declare let update: () => void;

/*
 * Undocumented
 */
type MultitoolConnector = __ModuleBrand & {};

type Gadget = __ModuleBrand & {
    MultitoolConnector: MultitoolConnector;
    PowerButton: PowerButton;
    // the following can be any number of components with their name and number attached
    [k: string]: any;
};
