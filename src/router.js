import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./pages/Home.vue'),
            props: {
                badge: 'Chrome Extension for Researchers',
                headline: 'Highlight, Cite & Reference Web Sources',
                uvp: 'Highlight web text and instantly generate accurate citations and bibliography-ready references for research and writing',
                cta: 'Add RefMark.app to Chrome',
                ctaFooter: 'No signup. Setup in under 2 minutes.',
                productName: 'RefMark.app'
            }
        }
    ]
})
