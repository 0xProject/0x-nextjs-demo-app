export declare const useLocalStorage: (storageKey: string) => {
    data: any;
    add: (item: any) => void;
    remove: (item: any) => void;
    update: (items: any) => void;
    clear: () => void;
};
