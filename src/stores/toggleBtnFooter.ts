import { create } from 'zustand';

interface IType {
    isDisable: boolean;
    handleToggleBtn: () => void;
}

const toggleBtnFooterStore = create<IType>((set) => ({
    isDisable: true,
    handleToggleBtn: () => set((state) => ({ isDisable: !state.isDisable })),
}));

export default toggleBtnFooterStore;
