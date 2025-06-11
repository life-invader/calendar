import { create } from 'zustand'

interface IStore {
  bears: number
  increase: (by: number) => void
}

export const store = create<IStore>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))