export const getRedirectionUri = (slug: string, shorten: boolean = false) => {
  switch (shorten) {
    case true:
      return '/v1/r/' + slug
    case false:
      return '/v1/redirect/' + slug
  }
}
