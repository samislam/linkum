interface ErrorClassifierOptions<EM extends string> {
  defaultErrorMessages: { [k in EM]: string }
  customErrorMessages?: { [k in EM]: string }
}

export class ErrorClassifier<EM extends string> {
  protected errorMessages: { [k in EM]: string }
  constructor(options: ErrorClassifierOptions<EM>) {
    const { customErrorMessages, defaultErrorMessages } = options
    this.errorMessages = { ...defaultErrorMessages, ...customErrorMessages }
  }
}
