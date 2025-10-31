export const NORTHERN_BEACHES_SUBURBS = [
  'Manly',
  'Dee Why',
  'Mona Vale',
  'Brookvale',
  'Avalon',
  'Newport',
  'Freshwater',
  'Curl Curl',
  'Narrabeen',
  'Collaroy',
  'Palm Beach',
  'Whale Beach',
  'Bilgola',
  'Clareville',
  'Bayview',
  'Church Point',
  'Fairlight',
  'Balgowlah',
  'Seaforth',
  'Clontarf',
  'Queenscliff',
  'North Curl Curl',
  'Allambie Heights',
  'Beacon Hill',
  'Cromer',
  'Wheeler Heights',
  'Oxford Falls',
  'Frenchs Forest',
  'Belrose',
  'Davidson'
] as const

export type Suburb = typeof NORTHERN_BEACHES_SUBURBS[number]

export function getSuburbSlug(suburb: string): string {
  return suburb.toLowerCase().replace(/\s+/g, '-')
}

export function getSuburbFromSlug(slug: string): string {
  return NORTHERN_BEACHES_SUBURBS.find(
    s => getSuburbSlug(s) === slug
  ) || 'Manly'
}
