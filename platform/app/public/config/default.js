window.config = {
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'Google Cloud Healthcare',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/dotted-ratio-429814-b9/locations/northamerica-northeast1/datasets/Rezvani/dicomStores/MyDicomID/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/dotted-ratio-429814-b9/locations/northamerica-northeast1/datasets/Rezvani/dicomStores/MyDicomID/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/dotted-ratio-429814-b9/locations/northamerica-northeast1/datasets/Rezvani/dicomStores/MyDicomID/dicomWeb',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        omitQuotationForMultipartRequest: true,
        headers: {
          Authorization:
            'Bearer ya29.c.c0ASRK0GZz2uVhGEiaK452WkiA9mmARA9lg0iZemU3qg2WQ_UGbUzlM7EILNC-dG34I-nzpQnqbvk_UdKyG8jcCBfC0zwR7QVG9qyqR2VVioFO20OSlItBbb2CcPF0SJYY8SXZTk20z58_jWpPKXA1gtGDXVSTiViXO_TrK1qLanMDR_hIIgeoNt8sz2iv0O08dHiLblwIoIFAGtnFof0-HS-gj3Ly_uo5TTVJ7YYc7fenkhm4TBo6gtKXDd7cBWvzOrONJymCmdSvUZBj4-e5sV2h07v6LwqLjwSj0yKyZAa9HMEWBdqsVb9QBszkKkvZ4lQMko8ZbfVpMWP9h08NgozOFc3VlhBqErEvfT06zegfBDz4TBndn7doAAG387KQwOqqvS6fj37YUq9SchhrIhIgZ0xpbf5iVeJJ_B4dxSUZ9Z7OY7sBBqMQFjs1juluu1bJakZi7Xjm5vUlOY-lcprsJRvjh0c6I0wz01w5BZbSMIF_ofr_Zb_UdJVaw3VUxMY6hoQRWFh51fauv7O0tzuBqIf3OgUiIJMBWqwJpOU4sFi4aMpYwuMYa8_byb2SsVm-VnFqOtpWldhZqlQmov0uqyQ73pOcSXv5eMyM_FXbq4RWq6h5M2ndV8oO9rSuY4zq8gng0fbSJB5O1w_678faZrhc-a-hhcvXS-ZysQtrxIOb6q-kuaO3e1dvc6W84yu-sijy3ms54kOyufndyy7031Vcr46-1uiMe_FYWs0oBMBUMFv32cIyqt5M48cJyBIiXS4VSn66e-hup6YBkrtqgp3xsr7vxzwVIdQ7IxIbUcJblMwR-Su_mU6irMO81Vbew1FB66iXmQxuMM1SMcp2Rib5ri-6cJox5YUoJgfytfyQXdOXz-4osR18VZdcIx__UkaJ-0RyjoYMZS28ZX-wVeFuaqhe-ankWlV-IIQIxIMcciInI2q8wmcvx7Oy3MuO0r8jbUlbMo_SsJj3I1jdv_9fZksYWJ2h0VcorxonO_pv873Xf0M',
        },
      },
    },
  ],
  defaultDataSourceName: 'dicomweb',
};
