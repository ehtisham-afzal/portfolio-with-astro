import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  // Outputs: /builtwith.json
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/'
    })
  )
}