import { create } from 'zustand';

interface IType {
    data: string;
    handleChangeData: (value: string) => void;
}

const answerStore = create<IType>((set) => ({
    data: '',
    handleChangeData: (value: string) => set(() => ({ data: value })),
}));

export default answerStore;
