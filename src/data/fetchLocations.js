import { supabase } from '../lib/supabase'

const CL = (id) =>
  `https://res.cloudinary.com/dv22lqbsr/image/upload/f_auto,q_auto/${id}`

export async function fetchLocations() {
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .order('name')

  if (error) {
    console.error('Supabase error:', error)
    throw error
  }

  return data.map(row => ({
    id:              row.location_id,
    name:            row.name,
    category:        row.category,
    types:           row.types,
    characteristics: row.characteristics,
    recommendations: row.recommendations,
    gallery:         (row.gallery ?? []).map(CL),
    coverImage:      row.cover_image ? CL(row.cover_image) : null,
    mapEmbedUrl:     row.map_embed_url,
    mapAddress:      row.map_address,
  }))
}
