import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vinod's Portfolio",
    short_name: "Portfolio",
    description: "A Progressive Web App built for Vinod's personal portfolio website.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008d47',
    icons: [
      {
        src: '/icons/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
        {
            name: "Start Live Session",
            short_name: "Start Live",
            description: "Jump direction into starting or joining a live session",
            url: "/?startLive",
            icons: [
                {
                    src: "/icons/icon.png",
                    sizes: "512x512"
                }
            ]
        }
    ]
  }
}