
import {memo} from "react";
import {Locale} from "@/i18n-config";
import {getMessage} from "@/getMessages";


async function  Home({params: { lang },}: { params: { lang: Locale } }) {
    const message = await getMessage(lang)
  return (
    <div>
        <h1>{message['Home'].title}</h1>
        <p>{message['Home'].description}</p>
    </div>
  )
}
export default  memo(Home)


