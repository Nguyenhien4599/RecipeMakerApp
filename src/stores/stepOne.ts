import { create } from 'zustand';

interface IData {
    age: null | string;
    weight: null | string;
    height: null | string;
    gender: null | string;
}

interface IType {
    data: IData;
    handleChangeData: (value: IData) => void;
}

const stepOneStore = create<IType>((set) => ({
    data: {
        age: null,
        weight: null,
        height: null,
        gender: null,
    },
    handleChangeData: (value: IData) => set(() => ({ data: value })),
}));

export default stepOneStore;
