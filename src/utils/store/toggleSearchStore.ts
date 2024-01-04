import { create } from 'zustand'

interface SearchStore {
    menu: boolean
    toggleSearch: () => void
    disableSearh: () => void
}

export const toggleSearchStore = create<SearchStore>((set) => ({
  menu: false,
  toggleSearch: () => set((state) => ({ menu: !state.menu })),
  disableSearh: () => set(() => ({ menu: false }))
}))
