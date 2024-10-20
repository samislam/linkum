import Header from '@/components/composables/header'
import PageMotion from '@/components/composables/page-motion'
import AnimatedLink from '@/components/composables/animated-link'
import AnimatedBubbles from '@/components/composables/animated-bubbles'
import AnimatedSparkles from '@/components/composables/animated-sparkles'
import ShortenLinkForm from '@/features/links/composables/shorten-link-form'
import StatsMainArea from '@/features/statistics/composables/stats-main-area'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <AnimatedBubbles />
      <Header />
      {/* Main content */}
      <PageMotion className="w-full max-w-5xl space-y-8 px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-blue-800">Shorten Your URL</h1>
        <ShortenLinkForm />
        <StatsMainArea />
      </PageMotion>
      {/* Floating elements */}
      <AnimatedSparkles />
      <AnimatedLink />
    </div>
  )
}
