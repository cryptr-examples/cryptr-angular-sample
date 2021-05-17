export const environment = {
  production: false,
  cryptrConfig: {
    audience: 'http://localhost:4200',
    tenant_domain: 'shark-academy',
    client_id: 'ab76295e-39d2-479b-ad06-eda1564dc729',
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