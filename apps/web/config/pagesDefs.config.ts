import { PagesDef } from '@/types/pageDef'

export default {
  home: {
    label: 'Home',
    href: '/',
  },
  login: {
    label: 'Login',
    href: '/auth/login',
  },
  signUp: {
    label: 'Sign up',
    href: '/auth/sign-up',
  },
} as const satisfies PagesDef
