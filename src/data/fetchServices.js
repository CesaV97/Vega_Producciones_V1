import { supabase } from '../lib/supabase'

export async function fetchServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')

  if (error) {
    console.error('Supabase error:', error)
    throw error
  }

  return data.map(row => ({
    id:         row.service_id,
    name:       row.name,
    category:   row.category,
    type:       row.type,
    detail:     row.includes,
    price:      `$${Number(row.price).toLocaleString('es-MX')} ${row.currency}`,
    attributes: row.attributes || {},
  }))
}
