import './index.css'
import { Router } from './router/mainRoute.tsx'
import { createRoot } from 'react-dom/client'
import { MusicContext } from './config/music_context.tsx'
import { ClickContextProvider } from './config/click_context.tsx'
import {QueryClient,QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import { store } from './ReduxState/store';
import { SpotifyMusic } from './config/spotify_Music.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
   <Provider store={store}>
    <SpotifyMusic>
    <MusicContext>
      <ClickContextProvider>
        <Router/>
      </ClickContextProvider>
    </MusicContext>
    </SpotifyMusic>
  </Provider>
  </QueryClientProvider>
)
