
'use client';

import { GlobeIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from '@/i18n/routing';
import ReactCountryFlag from 'react-country-flag';
import { useLocale } from 'next-intl';

const languages = [
  {
    value: 'en',
    label: 'English',
    countryCode: 'GB',
  },
  {
    value: 'ar',
    label: 'العربية',
    countryCode: 'EG',
  },
];

function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split('/')[1];
  return ['en', 'ar'].includes(segment) ? segment : 'en';
}

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const currentLang =
    languages.find((l) => l.value === locale) ?? languages[0];

  // const changeLocale = (locale: string) => {
  //   router.replace(pathname, { locale });
  // };

  const changeLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Select value={locale} onValueChange={changeLocale}>
      <SelectTrigger
        aria-label="Select language"
        className="gap-2 border-border dark:bg-input/30 hover:bg-input/50 shadow-md  px-2  cursor-pointer focus-visible:border-none focus-visible:ring-0"
      >
        <GlobeIcon size={16} />
        {/* <SelectValue /> */}
        {/* <SelectValue /> */}
        <span className="flex items-center gap-2">
          {/* <ReactCountryFlag
            svg
            countryCode={currentLang.countryCode}
            style={{ width: 18, height: 18 }}
          /> */}
          <span className="hidden sm:inline">
            {currentLang.label}
          </span>
        </span>
      </SelectTrigger>

      <SelectContent
        position="popper"
        align="end"
        className="border-none p-1 bg-background"
      >
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <span className="flex items-center gap-2">
              <ReactCountryFlag
                svg
                countryCode={lang.countryCode}
                style={{ width: 18, height: 18 }}
              />
              <span>{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

