import pagesDefsConfig from '#/config/pagesDefs.config'
import AuthCard from '@/components/composables/auth-card'
import PageMotion from '@/components/composables/page-motion'
import SignUpForm from '@/components/composables/sign-up-form'
import AnimatedBubbles from '@/components/composables/animated-bubbles'

const page = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-green-400 via-teal-500 to-blue-500">
      <AnimatedBubbles className="bg-white opacity-10" count={15} />
      <PageMotion>
        <AuthCard
          title="Sign Up"
          helperLinkLabel="Login"
          helperLink={pagesDefsConfig.login.href}
          helperMessage="Already have an account?"
          description="Create your URL shortener account"
        >
          <SignUpForm />
        </AuthCard>
      </PageMotion>
    </div>
  )
}

export default page
