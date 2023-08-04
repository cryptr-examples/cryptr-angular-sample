export const environment = {
  production: false,
  cryptrConfig: {
    audience: 'http://localhost:4200',
    tenant_domain: 'shark-academy',
    client_id: '5f43f8ac-2591-4a01-b69d-acfadb9b3187',
    cryptr_base_url: 'https://samly.howto:4433',
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
