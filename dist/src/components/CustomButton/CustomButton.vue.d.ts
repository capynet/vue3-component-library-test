declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    primary: {
        type: BooleanConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        required: true;
    };
    backgroundColor: {
        type: ObjectConstructor;
        required: true;
    };
}, {
    props: {
        label: string;
        primary: boolean;
        size: string;
        backgroundColor: {
            type: string;
            required: false;
        };
    };
    emit: (e: "click") => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "storybook-button": boolean;
        "storybook-button--primary": boolean;
        "storybook-button--secondary": boolean;
    }>;
    style: import("vue").ComputedRef<{
        backgroundColor: {
            type: string;
            required: false;
        };
    }>;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    primary: {
        type: BooleanConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        required: true;
    };
    backgroundColor: {
        type: ObjectConstructor;
        required: true;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
