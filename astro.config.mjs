import { defineConfig } from 'astro/config';
import sectionize from '@hbsnow/rehype-sectionize';

// https://astro.build/config
export default defineConfig({
    markdown:{
        rehypePlugins: [[sectionize, { level: 'h2' }]],
    },
});
