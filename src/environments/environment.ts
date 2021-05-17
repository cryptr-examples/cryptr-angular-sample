export const environment = {
  production: false,
  cryptrConfig: {
    audience: 'http://localhost:4200',
    tenant_domain: 'shark-academy',
    client_id: '6e35b0e7-9e0a-4697-b435-2bc4c09007c1',
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
