import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});
export default defineConfig({
    // hostname: '192.168.254.131'
    // customAddress: '192.168.254.131';
    server: {host: '192.168.254.131'}
})
