import { create } from 'zustand';

interface IData {
    textInput1: string;
    textInput2: string;
    listBtnActive: number[];
    textInputOther: string;
}

interface IType {
    data: IData;
    handleChangeData: (value: string | number[], name: string) => void;
}

const stepThreeStore = create<IType>((set) => ({
    data: {
        textInput1: '',
        textInput2: '',
        listBtnActive: [],
        textInputOther: '',
    },
    handleChangeData: (value: string | number[], name: string) =>
        set((state) => ({ data: { ...state.data, [name as keyof IData]: value } })),
}));

export default stepThreeStore;