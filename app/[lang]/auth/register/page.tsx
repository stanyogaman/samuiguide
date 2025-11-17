import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { RegisterForm } from '@/components/auth/RegisterForm'

export default async function RegisterPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <AuthLayout locale={params.lang}>
      <RegisterForm dictionary={dictionary} locale={params.lang} />
    </AuthLayout>
  )
}
