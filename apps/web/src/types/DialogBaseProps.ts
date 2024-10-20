export interface DialogBaseProps {
  /** open state for the modal */
  open: boolean
  /** when the user requests to close the modal */
  onOpenChange: (open: boolean) => void
}
