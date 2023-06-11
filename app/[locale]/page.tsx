'use client';
import {memo} from "react";
import {useTranslations} from 'next-intl';
import {useRouter} from 'next-intl/client';
import {usePathname} from "next/navigation";




function  Home() {
    const pathName = usePathname();
    const t = useTranslations('Home');
    const router = useRouter();
  return (
    <div>
        <button onClick={()=>pathName==="/"? router.push("en"):router.push("ua")}>
            {pathName}
        </button>
        <h1>{t('description')}</h1>
    </div>
  )
}
export default  memo(Home)