# Portfolyo

## Cloudflare Workers dağıtımı

Cloudflare projesinde şu ayarları kullanın:

- Root directory: depo kökü (`/`)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Worker name: `my-portfolio`

`wrangler.toml`, derlenen `dist` klasörünü statik dosya kaynağı olarak
tanımlar ve React yönlendirmeleri için `index.html` dönüşünü etkinleştirir.
Bu açık yapılandırma sayesinde Wrangler'ın otomatik Vite kurulumuna gerek kalmaz.

`client/public/.assetsignore`, Vite tarafından `dist` içine kopyalanır ve
Express sunucu paketi `index.js` dosyasını statik dosya yüklemesinden hariç tutar.
Cloudflare üzerinde yalnızca portfolyo arayüzü yayınlanır; Express sunucusu ve
`/api/health` uç noktası çalıştırılmaz. Mevcut iletişim formu bir sunucuya
mesaj göndermez.

Yerelde derlemek için önce `npm ci`, ardından `npm run build` çalıştırın.
Dağıtım yapılandırmasını yayın yapmadan kontrol etmek için:

```sh
npx wrangler deploy --dry-run
```
