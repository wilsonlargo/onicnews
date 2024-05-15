import { defineConfig } from 'astro/config';
import sectionize from '@hbsnow/rehype-sectionize';

// https://astro.build/config
export default defineConfig({
    markdown:{
        rehypePlugins: [[sectionize, { level: 'h2' }]],
        remarkRehype: {
            allowDangerousHtml: true,

            clobberPrefix: "referencia-",
            footnoteBackContent: ' ',

            footnoteLabel: "Pie de pagina",
            footnoteLabelTagName: "span",
            footnoteLabelProperties: { class: "d-none" },

            footnoteBackLabel(referenceIndex, rereferenceIndex) {
                  return `Regresar a referencia #${referenceIndex + 1}${rereferenceIndex > 1 ? `-${rereferenceIndex}` : ''}`
            },
        },
    },
});
