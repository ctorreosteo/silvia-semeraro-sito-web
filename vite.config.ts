import os from 'node:os'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function lanEndpointHintPlugin(): Plugin {
  return {
    name: 'lan-endpoint-hint',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const address = server.httpServer?.address()
        const port =
          typeof address === 'object' && address && 'port' in address
            ? address.port
            : server.config.server.port ?? 5173

        const nets = os.networkInterfaces()
        const ipv4s: string[] = []
        for (const entries of Object.values(nets)) {
          for (const net of entries ?? []) {
            if (net.family === 'IPv4' && !net.internal) {
              ipv4s.push(net.address)
            }
          }
        }

        const ip = ipv4s[0]
        if (!ip) return

        const url = `http://${ip}:${port}/`
        const exposed = Boolean(server.config.server.host)

        if (exposed) {
          server.config.logger.info(`\n  iPhone/LAN:  ${url}\n`)
          return
        }

        server.config.logger.info(
          `\n  iPhone/LAN:  avvia con "npm run dev:lan" e poi apri: ${url}\n`,
        )
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLan = mode === 'lan'

  return {
    plugins: [react(), lanEndpointHintPlugin()],
    server: isLan
      ? {
          host: true,
          // Allow iPhone/device access via private LAN IP (e.g. 192.168.x.x)
          allowedHosts: true,
        }
      : undefined,
    preview: isLan
      ? {
          host: true,
          allowedHosts: true,
        }
      : undefined,
  }
})
