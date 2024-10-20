import { create } from 'zustand'

export type AlertDialogStore = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => boolean
}

export const useAlertDialog = create<AlertDialogStore>()((set) => ({
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
