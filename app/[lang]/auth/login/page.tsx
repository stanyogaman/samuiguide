import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { LoginForm } from '@/components/auth/LoginForm'

export default async function LoginPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <AuthLayout locale={params.lang}>
      <LoginForm dictionary={dictionary} locale={params.lang} />
    </AuthLayout>
  )
}
