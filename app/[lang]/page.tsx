
import { getDictionary } from '@/get-message'
import { Locale } from '@/i18n-config'
import Counter from '../../components/counter'
import LocaleSwitcher from '../../components/locale-switcher'

export default async function Home({params: { lang },}: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang)

    return (
        <div>
            <LocaleSwitcher />
            <p>Current locale: {lang}</p>
            <p>
                {dictionary['server-component'].text}:{' '}
                {dictionary['server-component'].welcome}
            </p>
            <Counter dictionary={dictionary.counter} />
        </div>
    )
}
