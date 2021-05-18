export const environment = {
  production: false,
  cryptrConfig: {
    audience: 'http://localhost:4200',
    tenant_domain: 'shark-academy',
    client_id: '5f43f8ac-2591-4a01-b69d-acfadb9b3187',
    region: 'eu',
    default_redirect_uri: 'http://localhost:4200',
    httpInterceptor: {
      apiRequestsToSecure: ['http://localhost:5000/*'],
    },
    telemetry: false,
  },
  resource_server_url: 'http://localhost:5000',
} 


                