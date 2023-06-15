import React, {memo} from 'react';
import {i18n} from "@/i18n-config";
import {getDictionary} from "@/dictionaries/getDictionaries";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}))
}

interface AboutPageInterface {
    params: { lang : string };
}
const Pages = async ({params : {lang}}  :AboutPageInterface) => {
    const {Pages} = await getDictionary(lang)
    return (
        <div>
            <h2>{Pages.title}</h2>
        </div>
    );
};

export default memo(Pages);