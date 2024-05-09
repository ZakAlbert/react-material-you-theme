import { createRoot } from 'react-dom/client';
import App from './App';
import M3 from './theme/M3/M3';

const container = document.getElementById('app') as Element;
const root = createRoot(container);

root.render(
    <M3>
        <App />
    </M3>
);
