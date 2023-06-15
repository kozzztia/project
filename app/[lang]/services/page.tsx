import React, {memo} from 'react';
import {i18n} from "@/i18n-config";
import {getDictionary} from "@/dictionaries/getDictionaries";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}))
}

interface AboutPageInterface {
    params: { lang : string };
}
const Services = async ({params : {lang}}  :AboutPageInterface) => {
    const {Services} = await getDictionary(lang)
    return (
        <div>
            <h2>{Services.title}</h2>
        </div>
    );
};

export default memo(Services);