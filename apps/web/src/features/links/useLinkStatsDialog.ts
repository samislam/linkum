import { create } from 'zustand'

export type LinkStatsDialogStore = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => boolean
}

export const useLinkStatsDialog = create<LinkStatsDialogStore>()((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
  toggle: () => {
    let newState: boolean
    set((state) => {
      newState = !state.isOpen
      return { isOpen: newState }
    })
    return newState!
  },
}))
