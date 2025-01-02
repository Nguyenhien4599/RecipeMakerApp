import { create } from 'zustand';

interface IData {
    age: null | string;
    weight: null | string;
    height: null | string;
    gender: null | string;
}

interface IType {
    data: IData;
    handleChangeData: (value: string, name: string) => void;
}

const stepOneStore = create<IType>((set) => ({
    data: {
        age: null,
        weight: null,
        height: null,
        gender: null,
    },
    handleChangeData: (value: string, name: string) =>
        set((state) => ({ data: { ...state.data, [name as keyof IData]: value } })),
}));

export default stepOneStore;
