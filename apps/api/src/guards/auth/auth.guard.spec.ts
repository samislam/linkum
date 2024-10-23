import { AuthGuard } from './auth.guard'

describe('AuthenticationGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined()
  })
})
