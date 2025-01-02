import { create } from 'zustand';

interface IType {
    isDisable: boolean;
    handleToggleBtn: (status: boolean) => void;
}

const toggleBtnFooterStore = create<IType>((set) => ({
    isDisable: true,
    handleToggleBtn: (status: boolean) => set(() => ({ isDisable: status })),
}));

export default toggleBtnFooterStore;
