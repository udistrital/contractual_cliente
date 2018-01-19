'use strict';

/**
 * @ngdoc service
 * @name contractualClienteApp.config
 * @description
 * # config
 * Constant in the contractualClienteApp.
 */
var conf_cloud = {
    WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
    ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
    ADMINISTRATIVA_MID_SERVICE: "http://10.20.0.254/administrativa_mid_api/v1/",
    ADMINISTRATIVA_SERVICE: "http://10.20.0.254/administrativa_api/v1/",
    ADMINISTRATIVA_PRUEBAS_SERVICE: "http://10.20.0.254/administrativa_amazon_api/v1/",
    ARKA_SERVICE: "http://10.20.0.254/arka_api_crud/v1/",
    CONFIGURACION_SERVICE: "http://10.20.0.254/configuracion_api/v1/",
    CORE_SERVICE: "http://10.20.0.254/core_api/v1/",
    CORE_AMAZON_SERVICE: "http://10.20.0.254/core_amazon_crud/v1/",
    FINANCIERA_MID_SERVICE: "http://10.20.0.254/financiera_mid_api/v1/",
    FINANCIERA_SERVICE: "http://10.20.0.254/financiera_api/v1/",
    MODELS_SERVICE: "scripts/models/",
    NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
    OIKOS_SERVICE: "http://10.20.0.254/oikos_api/v1/",
    OIKOS_AMAZON_SERVICE: "http://10.20.0.254/oikos_amazon_api/v1",
    PAGOS_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/academicaProxyService/ingresos_concepto/",
    TITAN_SERVICE: "http://10.20.0.254/titan_api_crud/v1/",
    SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
    CONTRATO_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/",
    TOKEN: {
        AUTORIZATION_URL: "https://10.20.0.162:9443/oauth2/authorize",
        URL_USER_INFO: "https://10.20.0.162:9443/oauth2/userinfo",
        CLIENTE_ID: "bfPMflsiPVN6WFjJZIpzjsLdlx8a",
        REDIRECT_URL: "http://localhost:9000/",
        RESPONSE_TYPE: "code",
        SCOPE: "openid email",
        BUTTON_CLASS: "btn btn-warning btn-sm",
        SIGN_OUT_URL: "https://10.20.0.162:9443/oidc/logout",
        SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
        SIGN_OUT_APPEND_TOKEN: "true",
        REFRESH_TOKEN: "https://10.20.0.162:9443/oauth2/token",
        CLIENT_SECRET: "4C_HkdaZsMF4Fthfm6D2n5joLzEa"
    },
};
var conf_presentacion = {
    WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
    ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
    ADMINISTRATIVA_MID_SERVICE: "http://10.20.0.254/administrativa_mid_api/v1/",
    ADMINISTRATIVA_SERVICE: "http://10.20.0.254/administrativa_api/v1/",
    ADMINISTRATIVA_PRUEBAS_SERVICE: "http://10.20.0.254/administrativa_amazon_api/v1/",
    ARKA_SERVICE: "http://10.20.0.254/arka_api_crud/v1/",
    CONFIGURACION_SERVICE: "http://10.20.0.254/configuracion_api/v1/",
    CORE_SERVICE: "http://10.20.0.254/core_api/v1/",
    CORE_AMAZON_SERVICE: "http://10.20.0.254/core_amazon_crud/v1/",
    FINANCIERA_MID_SERVICE: "http://10.20.0.254/financiera_mid_api/v1/",
    FINANCIERA_SERVICE: "http://10.20.0.254/financiera_api/v1/",
    MODELS_SERVICE: "scripts/models/",
    NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
    OIKOS_SERVICE: "http://10.20.0.254/oikos_api/v1/",
    OIKOS_AMAZON_SERVICE: "http://10.20.0.254/oikos_amazon_api/v1",
    PAGOS_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/academicaProxyService/ingresos_concepto/",
    TITAN_SERVICE: "http://10.20.0.254/titan_api_crud/v1/",
    SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
    CONTRATO_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/",
    TOKEN: {
        AUTORIZATION_URL: "https://10.20.0.162:9443/oauth2/authorize",
        URL_USER_INFO: "https://10.20.0.162:9443/oauth2/userinfo",
        CLIENTE_ID: "bfPMflsiPVN6WFjJZIpzjsLdlx8a",
        REDIRECT_URL: "http://localhost:9000/",
        RESPONSE_TYPE: "code",
        SCOPE: "openid email",
        BUTTON_CLASS: "btn btn-warning btn-sm",
        SIGN_OUT_URL: "https://10.20.0.162:9443/oidc/logout",
        SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
        SIGN_OUT_APPEND_TOKEN: "true",
        REFRESH_TOKEN: "https://10.20.0.162:9443/oauth2/token",
        CLIENT_SECRET: "4C_HkdaZsMF4Fthfm6D2n5joLzEa"
    },
};

    var conf_pruebas = {
        WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
        ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
        ADMINISTRATIVA_MID_SERVICE: "http://10.20.0.254/administrativa_mid_api/v1/",
        ADMINISTRATIVA_SERVICE: "http://10.20.0.254/administrativa_api/v1/",
        ADMINISTRATIVA_PRUEBAS_SERVICE: "http://10.20.0.254/administrativa_amazon_api/v1/",
        ARKA_SERVICE: "http://10.20.0.254/arka_api_crud/v1/",
        CONFIGURACION_SERVICE: "http://10.20.0.254/configuracion_api/v1/",
        CORE_SERVICE: "http://10.20.0.254/core_api/v1/",
        CORE_AMAZON_SERVICE: "http://10.20.0.254/core_amazon_crud/v1/",
        FINANCIERA_MID_SERVICE: "http://10.20.0.254/financiera_mid_api/v1/",
        FINANCIERA_SERVICE: "http://10.20.0.254/financiera_api/v1/",
        MODELS_SERVICE: "scripts/models/",
        NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
        OIKOS_SERVICE: "http://10.20.0.254/oikos_api/v1/",
        OIKOS_AMAZON_SERVICE: "http://10.20.0.254/oikos_amazon_api/v1",
        PAGOS_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/academicaProxyService/ingresos_concepto/",
        TITAN_SERVICE: "http://10.20.0.254/titan_api_crud/v1/",
        SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
        CONTRATO_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/",
        TOKEN: {
            AUTORIZATION_URL: "https://10.20.0.162:9443/oauth2/authorize",
            URL_USER_INFO: "https://10.20.0.162:9443/oauth2/userinfo",
            CLIENTE_ID: "bfPMflsiPVN6WFjJZIpzjsLdlx8a",
            REDIRECT_URL: "http://localhost:9000/",
            RESPONSE_TYPE: "code",
            SCOPE: "openid email",
            BUTTON_CLASS: "btn btn-warning btn-sm",
            SIGN_OUT_URL: "https://10.20.0.162:9443/oidc/logout",
            SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
            SIGN_OUT_APPEND_TOKEN: "true",
            REFRESH_TOKEN: "https://10.20.0.162:9443/oauth2/token",
            CLIENT_SECRET: "4C_HkdaZsMF4Fthfm6D2n5joLzEa"
        },
    };

var conf_local = {
    WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
    ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
    ADMINISTRATIVA_MID_SERVICE: "http://localhost:8082/v1/",
    ADMINISTRATIVA_SERVICE: "http://localhost:8085/v1/",
    ADMINISTRATIVA_PRUEBAS_SERVICE: "http://localhost:8084/v1/",
    ARKA_SERVICE: "http://10.20.0.254/arka_api_crud/v1/",
    CONFIGURACION_SERVICE: "http://10.20.0.254/configuracion_api/v1/",
    CORE_SERVICE: "http://10.20.0.254/core_api/v1/",
    CORE_AMAZON_SERVICE: "http://10.20.0.254/core_amazon_crud/v1/",
    FINANCIERA_MID_SERVICE: "http://10.20.0.254/financiera_mid_api/v1/",
    FINANCIERA_SERVICE: "http://10.20.0.254/financiera_api/v1/",
    MODELS_SERVICE: "scripts/models/",
    NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
    OIKOS_SERVICE: "http://10.20.0.254/oikos_api/v1/",
    OIKOS_AMAZON_SERVICE: "http://10.20.0.254/oikos_amazon_api/v1",
    PAGOS_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/academicaProxyService/ingresos_concepto/",
    TITAN_SERVICE: "http://10.20.0.254/titan_api_crud/v1/",
    SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
    CONTRATO_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/",
    TOKEN: {
        AUTORIZATION_URL: "https://10.20.0.162:9443/oauth2/authorize",
        URL_USER_INFO: "https://10.20.0.162:9443/oauth2/userinfo",
        CLIENTE_ID: "bfPMflsiPVN6WFjJZIpzjsLdlx8a",
        REDIRECT_URL: "http://localhost:9000/",
        RESPONSE_TYPE: "code",
        SCOPE: "openid email",
        BUTTON_CLASS: "btn btn-warning btn-sm",
        SIGN_OUT_URL: "https://10.20.0.162:9443/oidc/logout",
        SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
        SIGN_OUT_APPEND_TOKEN: "true",
        REFRESH_TOKEN: "https://10.20.0.162:9443/oauth2/token",
        CLIENT_SECRET: "4C_HkdaZsMF4Fthfm6D2n5joLzEa"
    },
};



angular.module('contractualClienteApp')
    .constant('CONF', {
        GENERAL: conf_pruebas
    });
