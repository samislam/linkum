import { create } from 'zustand'

export type EditLinkDialogStore = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => boolean
}

export const useEditLinkDialog = create<EditLinkDialogStore>()((set) => ({
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
