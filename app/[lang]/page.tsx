
import {memo} from "react";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/getDictionaries";


async function  Home({params: { lang },}: { params: { lang: Locale } }) {
    const {Main} = await getDictionary(lang)
  return (
    <div>
        <h1>{Main.title}</h1>
        <p>{Main.description}</p>
    </div>
  )
}
export default  memo(Home)


