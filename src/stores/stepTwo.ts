import { create } from 'zustand';

interface IData {
    ValueAccordion: string;
    listBtnActive: number[];
    textInput: string;
}

interface IType {
    data: IData;
    handleChangeData: (value: string | number[], name: string) => void;
}

const stepTwoStore = create<IType>((set) => ({
    data: {
        ValueAccordion: '',
        listBtnActive: [],
        textInput: '',
    },
    handleChangeData: (value: string | number[], name: string) =>
        set((state) => ({ data: { ...state.data, [name as keyof IData]: value } })),
}));

export default stepTwoStore;
