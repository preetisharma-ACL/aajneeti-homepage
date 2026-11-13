// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aajneeti.social',
  devToolbar: { enabled: false },
  vite: {
    server: {
      // Live style hot-swapping (HMR) left browser tabs with stale CSS after rapid edits
      // (project lives in a OneDrive-synced folder). With HMR off, every refresh (F5)
      // renders the current code consistently. Remove this line to re-enable live reload.
      hmr: false,
      // Always send fresh files to the browser in dev (stops stale CSS showing after edits)
      headers: { 'Cache-Control': 'no-store' },
      watch: { usePolling: true, interval: 300 },
    },
  },
});
