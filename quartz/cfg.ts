import { ValidDateType } from "./components/Date"
import { QuartzComponent } from "./components/types"
import { ValidLocale } from "./i18n"
import { PluginTypes } from "./plugins/types"
import { Theme } from "./util/theme"

export type Analytics =
  | null
  | {
      provider: "plausible"
      host?: string
    }
  | {
      provider: "google"
      tagId: string
    }
  | {
      provider: "umami"
      websiteId: string
      host?: string
    }
  | {
      provider: "goatcounter"
      websiteId: string
      host?: string
      scriptSrc?: string
    }
  | {
      provider: "posthog"
      apiKey: string
      host?: string
    }
  | {
      provider: "tinylytics"
      siteId: string
    }
  | {
      provider: "cabin"
      host?: string
    }
  | {
      provider: "clarity"
      projectId?: string
    }
  | {
      provider: "matomo"
      host: string
      siteId: string
    }
  | {
      provider: "vercel"
    }
  | {
      provider: "rybbit"
      siteId: string
      host?: string
    }

export interface GlobalConfiguration {
  pageTitle: string
  pageTitleSuffix?: string

  /** Whether to enable single-page-app style rendering */
  enableSPA: boolean

  /** Whether to display Wikipedia-style popovers */
  enablePopovers: boolean

  /** Analytics mode */
  analytics: Analytics

  /** Glob patterns to not search */
  ignorePatterns: string[]

  /** Default date type */
  defaultDateType: ValidDateType

  /** Base URL */
  baseUrl?: string

  theme: Theme

  /** Locale */
  locale: ValidLocale
}

export interface QuartzConfig {
  configuration: GlobalConfiguration
  plugins: PluginTypes
}

export interface FullPageLayout {
  head: QuartzComponent
  header: QuartzComponent[]
  beforeBody: QuartzComponent[]
  pageBody: QuartzComponent
  afterBody: QuartzComponent[]
  left: QuartzComponent[]
  right: QuartzComponent[]
  footer: QuartzComponent
}

export type PageLayout = Pick<
  FullPageLayout,
  "beforeBody" | "left" | "right"
>

export type SharedLayout = Pick<
  FullPageLayout,
  "head" | "header" | "footer" | "afterBody"
>

export const globalConfig: GlobalConfiguration = {
  pageTitle: "Forage DeepMind",

  pageTitleSuffix: "Faculty of Applied Intelligence",

  enableSPA: true,

  enablePopovers: true,

  analytics: null,

  ignorePatterns: [],

  defaultDateType: "created",

  baseUrl: "forageopen.github.io/forage",

  theme: {
    typography: {
      header: "JetBrains Mono",
      body: "Inter",
      code: "JetBrains Mono",
    },

    colors: {
      lightMode: {
        light: "#0b0f14",
        lightgray: "#10151c",
        gray: "#1b2430",
        darkgray: "#7dd3fc",
        dark: "#e0f2fe",

        secondary: "#00bfff",
        tertiary: "#38bdf8",

        highlight: "rgba(0,191,255,0.10)",
        textHighlight: "rgba(0,191,255,0.30)",
      },

      darkMode: {
        light: "#05070a",
        lightgray: "#0b0f14",
        gray: "#111827",
        darkgray: "#7dd3fc",
        dark: "#e0f2fe",

        secondary: "#00bfff",
        tertiary: "#38bdf8",

        highlight: "rgba(0,191,255,0.12)",
        textHighlight: "rgba(0,191,255,0.35)",
      },
    },
  },

  locale: "en-US",
}