import adapter from "@sveltejs/adapter-vercel"
import browserlist from "browserslist"
import { vitePreprocess } from "@sveltejs/kit/vite"
import { Features, browserslistToTargets } from "lightningcss"

let targets = browserslistToTargets(browserlist(">= 1%, not dead"))

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess({
        style: {
            build: {
                cssMinify: "lightningcss"
            },
            css: {
                transformer: "lightningcss",
                lightningcss: {
                    targets,
                    include: Features.Colors | Features.Nesting | Features.MediaRangeSyntax | Features.CustomMediaQueries,
                    drafts: {
                        customMedia: true,
                        nesting: true,
                    }
                }
            }
        }
    }),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            maxDuration: 120,
        })
    }
}

export default config