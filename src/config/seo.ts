import { SITE } from "./site";

export const DEFAULT_SEO = {

  title: SITE.name,

  description:
    "Property Registration, Patta Transfer, Encumbrance Certificate, Legal Documentation and Government Documentation Services in Namakkal.",

  keywords:
    "Property Registration Namakkal, Patta Transfer Namakkal, Legal Documentation Namakkal, Encumbrance Certificate Namakkal",

  author: SITE.website.author,

  robots: "index,follow",

  locale: "en_IN",

} as const;