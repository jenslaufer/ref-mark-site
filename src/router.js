import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./pages/Home.vue'),
            props: {
                badge: 'AltMatch.app • Chrome Extension for bargain hunters',
                headline: 'Save money while browsing the web',
                uvp: 'Save real money—without effort or research paralysis. The AltMatch Chrome Extension automatically embeds product alternatives directly into every webpage.',
                cta: 'Add AltMatch.app to Chrome',
                ctaFooter: 'No signup. Setup in under 2 minutes.',
                productName: 'AltMatch.app'
            }
        }
    ]
})
