# Cryptr with Angular

## 02 Application Keys

### Add your Cryptr credentials

🛠 To use these variables in your Angular application, replace the content of `src/environments/environment.ts` with the variables that you get when creating your application at the end of Cryptr Onboarding or on your Cryptr application. Don't forget to replace `YOUR_CLIENT_ID` & `YOUR_DOMAIN`

Your environment file should look like this:

``` javascript

export const environment = {
  production: false,
  cryptrConfig: {
    audience: 'http://localhost:4200',
    tenant_domain: 'YOUR_DOMAIN',
    client_id: 'YOUR_CLIENT_ID',
    default_redirect_uri: 'http://localhost:4200/',
    cryptr_base_url: 'https://auth.cryptr.eu',
    default_locale: 'fr',
    httpInterceptor: {
      apiRequestsToSecure: ['http://localhost:5000/*'],
    },
    telemetry: false,
  },
  resource_server_url: 'http://localhost:5000',
};

```

Note: __If you are from the EU, you must add `https://auth.cryptr.eu/` in the `CRYPTR_BASE_URL` variable, and if you are from the US, you must add `https://auth.cryptr.us/` in the same variable.__

[Next](https://github.com/cryptr-examples/cryptr-angular-sample/tree/03-set-up-the-cryptr-angular-sdk)
