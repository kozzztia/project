import React, {memo} from 'react';
import {i18n} from "@/i18n-config";
import {getDictionary} from "@/dictionaries/getDictionaries";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}))
}

interface AboutPageInterface {
    params: { lang : string };
}
const Home = async ({params : {lang}}  :AboutPageInterface) => {
    const {Home} = await getDictionary(lang)
    return (
        <div>
            <h2>{Home.title}</h2>
        </div>
    );
};

export default memo(Home);