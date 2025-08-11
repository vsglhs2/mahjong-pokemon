import './style.css'
import '@ruffle-rs/ruffle';

declare global {
    class Player extends HTMLElement {
        ruffle(): RufflePlayer;
        volume: number;
    }

    type Options = {
        url: string;
        allowScriptAccess?: boolean;
        publicPath?: string;
        autoplay?: 'auto' | 'on' | 'off';
        unmuteOverlay?: 'visible' | 'hidden';
    };

    class RufflePlayer {
        static newest(): RufflePlayer;
        static config: Options;

        public createPlayer(): Player;
        public load(options: string | Partial<Options>): Promise<void>;
    }

    interface Window {
        RufflePlayer: typeof RufflePlayer
    }
}

const GAME_URL = '/patched.swf';
const RUFFLE_PATH = '/node_modules/@ruffle-rs/ruffle';
const PUBLIC_PATH = import.meta.env.DEV ? RUFFLE_PATH : undefined;

// Needed to get modules to be copied during build
import.meta.glob('/node_modules/@ruffle-rs/ruffle/*', { query: 'url' });

window.addEventListener('load', () => {
    const ruffle = RufflePlayer.newest();

    const player = ruffle.createPlayer();
    player.style.width = '100%';
    player.style.height = '100%';
    player.volume = 0;

    const container = document.getElementById('container');
    if (!container) {
        throw new Error('Can\'t find container');
    }

    container.appendChild(player);

    RufflePlayer.config.publicPath = PUBLIC_PATH;
    player.ruffle().load({
        url: GAME_URL,
        allowScriptAccess: false,
        autoplay: 'on',
        unmuteOverlay: 'hidden',
    });
});
