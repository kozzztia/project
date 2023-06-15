import React, {memo} from 'react';
import {i18n} from "@/i18n-config";
import {getDictionary} from "@/getDictionaries";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}))
}

interface AboutPageInterface {
    params: { lang : string };
}
const Contacts = async ({params : {lang}}  :AboutPageInterface) => {
    const {Contacts} = await getDictionary(lang)
    return (
        <div>
            <h2>{Contacts.title}</h2>
        </div>
    );
};

export default memo(Contacts);