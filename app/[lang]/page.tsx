
import {memo} from "react";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/getDictionaries";


async function  Home({params: { lang },}: { params: { lang: Locale } }) {
    const {Home} = await getDictionary(lang)
  return (
    <div>
        <h1>{Home.title}</h1>
        <p>{Home.description}</p>
    </div>
  )
}
export default  memo(Home)


