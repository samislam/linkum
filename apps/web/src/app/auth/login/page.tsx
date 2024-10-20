import pagesDefsConfig from '#/config/pagesDefs.config'
import AuthCard from '@/components/composables/auth-card'
import LoginForm from '@/components/composables/login-form'
import PageMotion from '@/components/composables/page-motion'
import AnimatedBubbles from '@/components/composables/animated-bubbles'

const page = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
      <AnimatedBubbles className="bg-white opacity-10" count={15} />
      <PageMotion>
        <AuthCard
          title="Login"
          helperLinkLabel="Sign up"
          helperMessage="Don't have an account?"
          helperLink={pagesDefsConfig.signUp.href}
          description="Access your URL shortener account"
        >
          <LoginForm />
        </AuthCard>
      </PageMotion>
    </div>
  )
}

export default page
