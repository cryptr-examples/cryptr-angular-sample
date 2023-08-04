# Cryptr with Angular

## 02 Application Keys

### Add your Cryptr credentials

🛠 To use these variables in your Angular application, replace the content of `src/environments/environment.ts` with the variables that you get when creating your application at the end of Cryptr Onboarding or on your Cryptr application. Don't forget to replace `YOUR_CLIENT_ID` , `YOUR_DOMAIN` & `YOUR_CRYPTR_SERVICE_URL`

Your environment file should look like this:

``` javascript

export const environment = {
  production: false,
  cryptrConfig: {
    audience: 'http://localhost:4200',
    tenant_domain: 'YOUR_DOMAIN',
    client_id: 'YOUR_CLIENT_ID',
    cryptr_base_url: 'YOUR_CRYPTR_SERVICE_URL',
    default_redirect_uri: 'http://localhost:4200',
    httpInterceptor: {
      apiRequestsToSecure: ['http://localhost:5000/*'],
    },
    telemetry: false,
    dedicated_server: true,
    fixed_pkce: true
  },
  resource_server_url: 'http://localhost:5000',
} 

```

Note: __You can include an API URL in `httpInterceptor` and `resource_server_url` that does not exist yet. If you don't have an API, that's OK, there just has to be a URL, even if it is not used. Later on when you create an API, you can update the URL in your environment file__

[Next](https://github.com/cryptr-examples/cryptr-angular-sample/tree/03-set-up-the-cryptr-angular-sdk)
