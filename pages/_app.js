import { CacheProvider } from "@emotion/react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import "../styles/globals.css"
import createEmotionCache from "../utils/createEmotionCache"
import { theme } from "../utils/theme"

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
