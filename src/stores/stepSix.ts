import { create } from 'zustand';

export interface IData {
    TextInput: string;
    ValueAccordion1: string;
    ValueAccordion2: string;
    ValueAccordion3: string;
}

interface IType {
    data: IData;
    handleChangeData: (value: string | number[], name: string) => void;
}

const stepSixStore = create<IType>((set) => ({
    data: {
        ValueAccordion1: '',
        ValueAccordion2: '',
        ValueAccordion3: '',
        TextInput: '',
    },
    handleChangeData: (value: string | number[], name: string) =>
        set((state) => ({ data: { ...state.data, [name as keyof IData]: value } })),
}));

export default stepSixStore;
