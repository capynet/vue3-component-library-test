declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    label: string;
    primary: boolean;
    size: string;
    backgroundColor: {
        type: string;
        required: false;
    };
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    label: string;
    primary: boolean;
    size: string;
    backgroundColor: {
        type: string;
        required: false;
    };
}>>> & {
    onClick?: (() => any) | undefined;
}, {}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
