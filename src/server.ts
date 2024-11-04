import { start } from './lib/server-impl';

try {
    start({
        enterpriseVersion: '6.4.0'
    });
} catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit();
}
