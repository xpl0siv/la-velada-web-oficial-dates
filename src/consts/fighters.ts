import type { Fighters } from '@/types/fighters';

import dayjs from 'dayjs';

//Soporte idioma [es]
import 'dayjs/locale/es';
dayjs.locale('es');

export const FORMAT_DATE = 'DD/MM/YYYY';

export const FIGHTERS: Fighters[] = [
  {
    // https://www.biografia.de/peereira/
    id: 'peereira',
    name: 'Peereira',
    realName: 'Pablo Pereira Ramos',
    gender: 'masculino',
    birthDate: dayjs('21/12/1998', FORMAT_DATE).toDate(),
    height: 1.63,
    age: 26,
    weight: 63,
    country: 'es',
    city: 'A Coruña',
    versus: 'rivaldios',
    socials: {
      twitch: 'https://www.twitch.tv/peereira7',
      youtube: 'https://www.youtube.com/channel/UCOBtOqxsioUI-fFykO2I4BQ',
      tiktok: 'https://www.tiktok.com/@peereira7',
      x: 'https://x.com/Peereira7',
    },
    clips: [],
  },
  {
    // https://laletrade.com/biografias/twitch/18087-perxitaa
    id: 'perxitaa',
    name: 'Perxitaa',
    realName: 'Jaume Cremades Gradoli',
    gender: 'masculino',
    birthDate: dayjs('09/07/1991', FORMAT_DATE).toDate(),
    height: 1.86,
    age: 33,
    city: 'Catarroja, Valencia',
    weight: 102,
    country: 'es',
    versus: 'gaspi',
    socials: {
      instagram: 'https://www.instagram.com/perxitaa',
      tiktok: 'https://www.tiktok.com/@srperxitaa',
      twitch: 'https://www.twitch.tv/perxitaa',
      x: 'https://x.com/perxitaa',
      youtube: 'https://www.youtube.com/@perxitaa',
    },
    clips: [],
  },
  {
    id: 'abby',
    name: 'Abby',
    realName: 'Abril Gené Capriles',
    gender: 'femenino',
    birthDate: dayjs('28/12/2000', FORMAT_DATE).toDate(),
    height: 1.72,
    age: 24,
    weight: 62,
    country: 'es',
    city: 'Barcelona',
    versus: 'roro',
    socials: {
      instagram: 'https://www.instagram.com/abbyimu/',
      twitch: 'https://www.twitch.tv/abby_',
      youtube: 'https://www.youtube.com/@abbyimu',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/roro/
    id: 'roro',
    name: 'Roro',
    realName: 'Rocío López Bueno',
    gender: 'femenino',
    birthDate: dayjs('01/03/2002', FORMAT_DATE).toDate(),
    height: 1.49,
    age: 23,
    weight: 47,
    country: 'es',
    city: 'Madrid',
    versus: 'abby',
    socials: {
      instagram: 'https://www.instagram.com/whoisroro/',
      tiktok: 'https://www.tiktok.com/@roro.bueno',
      youtube: 'https://www.youtube.com/@roroobuenoo',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/gaspi/
    id: 'gaspi',
    name: 'Gaspi',
    realName: 'Gaspar Prim Díaz',
    gender: 'masculino',
    birthDate: dayjs('28/12/2002', FORMAT_DATE).toDate(),
    height: 1.83,
    age: 22,
    weight: 112,
    country: 'ar',
    city: 'Buenos Aires',
    versus: 'perxitaa',
    socials: {
      instagram: 'https://www.instagram.com/gaspipd/',
      x: 'https://x.com/gaspipd',
      youtube: 'https://www.youtube.com/GaspiPD',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/rivaldios/
    id: 'rivaldios',
    name: 'Rivaldios',
    realName: 'Rivaldo Reatiga Ojeda',
    gender: 'masculino',
    birthDate: dayjs('06/02/2001', FORMAT_DATE).toDate(),
    height: 1.7,
    age: 24,
    weight: 69,
    country: 'mx',
    city: 'Culiacán',
    versus: 'peereira',
    socials: {
      instagram: 'https://www.instagram.com/rivaldios10/',
      tiktok: 'https://www.tiktok.com/@rivaldios10',
      youtube: 'https://www.youtube.com/@Rivaldios-lacabra',
    },
    clips: [],
  },
  {
    id: 'andoni',
    name: 'Andoni',
    realName: 'Andoni Talledo Gutiérrez',
    gender: 'masculino',
    birthDate: dayjs('03/01/2003', FORMAT_DATE).toDate(),
    height: 1.87,
    age: 22,
    weight: 115,
    country: 'es',
    city: 'Bilbao',
    versus: 'carlos',
    socials: {
      instagram: 'https://www.instagram.com/andonifitness/',
      tiktok: 'https://www.tiktok.com/@andoonig',
      youtube: 'https://www.youtube.com/@AndoniFitness',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/viruzz/
    id: 'viruzz',
    name: 'Viruzz',
    realName: 'Víctor Mélida Cambra',
    gender: 'masculino',
    birthDate: dayjs('01/05/1992', FORMAT_DATE).toDate(),
    height: 1.82,
    age: 32,
    weight: 87,
    country: 'es',
    city: 'Andorra La Vella',
    versus: 'tomas',
    socials: {
      instagram: 'https://www.instagram.com/victormelida/',
      tiktok: 'https://www.tiktok.com/@victormelida',
      twitch: 'https://www.twitch.tv/byViruZz',
      x: 'https://x.com/byViruZz',
      youtube: 'https://www.youtube.com/user/byViruZz',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/alana-flores/
    id: 'alana',
    name: 'Alana',
    fightName: 'Alana La Rana',
    realName: 'Alana Scarlett Flores Fuentes',
    gender: 'femenino',
    birthDate: dayjs('15/12/2000', FORMAT_DATE).toDate(),
    height: 1.57,
    age: 24,
    weight: 51,
    targetWeight: 52,
    targetGloves: '12oz',
    country: 'mx',
    city: 'Nuevo León',
    versus: 'arigeli',
    socials: {
      instagram: 'https://www.instagram.com/alanafloresf',
      twitch: 'https://www.twitch.tv/alanalarana',
      x: 'https://x.com/alanafloresf',
      youtube: 'https://www.youtube.com/@alanafloresf',
    },
    clips: [],
  },
  {
    // https://laletrade.com/biografias/youtuber/espanol/22589-thegrefg
    id: 'grefg',
    name: 'Grefg',
    realName: 'David Cánovas Martínez',
    gender: 'masculino',
    birthDate: dayjs('24/04/1997', FORMAT_DATE).toDate(),
    height: 1.79,
    age: 27,
    weight: 74,
    country: 'es',
    city: 'Alhama de Murcia',
    versus: 'westcol',
    socials: {
      instagram: 'https://www.instagram.com/TheGrefg/',
      tiktok: 'https://www.tiktok.com/@thegrefg?_t=8ffeaGxV7Lt&_r=1',
      twitch: 'https://www.twitch.tv/thegrefg',
      x: 'https://x.com/TheGrefg',
      youtube: 'https://www.youtube.com/@TheGrefg',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/westcol/
    id: 'westcol',
    name: 'Westcol',
    realName: 'Luis Fernando Villa Álvarez',
    gender: 'masculino',
    birthDate: dayjs('02/02/2001', FORMAT_DATE).toDate(),
    height: 1.65,
    age: 24,
    weight: 63,
    country: 'co',
    city: 'Medellín',
    versus: 'grefg',
    socials: {
      instagram: 'https://www.instagram.com/westcol/',
      x: 'https://x.com/WestCOL',
      youtube: 'https://www.youtube.com/channel/UCEg_iK8FKwZfpRMn4-AnnnQ',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/ari-geli/
    id: 'arigeli',
    name: 'Arigeli',
    realName: 'Ariadna Geli Pérez',
    gender: 'femenino',
    birthDate: dayjs('11/10/2002', FORMAT_DATE).toDate(),
    height: 1.58,
    age: 22,
    weight: 53,
    country: 'es',
    city: 'Barcelona',
    versus: 'alana',
    socials: {
      instagram: 'https://www.instagram.com/arigelii/',
      tiktok: 'https://www.tiktok.com/@arigeli',
      youtube: 'https://www.youtube.com/@AriGeli',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/tomas-mazza/
    id: 'tomas',
    name: 'Tomas',
    realName: 'Tomás Francisco Pérez Mazza',
    gender: 'masculino',
    birthDate: dayjs('16/04/2000', FORMAT_DATE).toDate(),
    height: 1.76,
    age: 25,
    weight: 80,
    country: 'ar',
    city: 'Buenos Aires',
    versus: 'viruzz',
    socials: {
      instagram: 'https://www.instagram.com/mazzatomas/',
      youtube: 'https://www.youtube.com/@tomasmazza',
    },
    clips: [],
  },
  {
    // https://laletrade.com/biografias/youtuber/19752-carlos-belcast
    id: 'carlos',
    name: 'Carlos',
    realName: 'Carlos Belcast',
    gender: 'masculino',
    birthDate: dayjs('05/10/1998', FORMAT_DATE).toDate(),
    height: 1.77,
    age: 26,
    weight: 85,
    country: 'mx',
    city: 'Monterrey',
    versus: 'andoni',
    socials: {
      instagram: 'https://www.instagram.com/carlosbelcast/',
    },
    clips: [],
  },
] as const

