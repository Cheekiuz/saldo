# SALDO – Finansų apskaita

Profesionali finansų apskaitos svetainė UAB „Saldo“.

**Live site:** [https://saldofinansai.lt](https://saldofinansai.lt)

## Paleisti

```bash
pnpm install
pnpm dev
```

Atidarykite [http://localhost:5173](http://localhost:5173) naršyklėje.

## Build

```bash
pnpm build
pnpm preview
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-time GitHub setup

1. Open **Settings → Pages** in the repository.
2. Set **Source** to **GitHub Actions**.
3. Enter custom domain: `saldofinansai.lt` and save.
4. Enable **Enforce HTTPS** once DNS has propagated.

### DNS configuration

Add these records at your domain registrar:

| Type  | Name | Value               |
| ----- | ---- | ------------------- |
| A     | `@`  | `185.199.108.153`   |
| A     | `@`  | `185.199.109.153`   |
| A     | `@`  | `185.199.110.153`   |
| A     | `@`  | `185.199.111.153`   |
| CNAME | `www` | `cheekiuz.github.io` |

DNS propagation can take up to 24–48 hours. Until then, the site may be available at [https://cheekiuz.github.io/saldo/](https://cheekiuz.github.io/saldo/).
