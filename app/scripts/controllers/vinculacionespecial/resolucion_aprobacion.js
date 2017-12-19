'use strict';

/**
 * @ngdoc function
 * @name clienteApp.controller:ResolucionAprobacionCtrl
 * @description
 * # ResolucionAprobacionCtrl
 * Controller of the clienteApp
 */
angular.module('contractualClienteApp')
  .controller('ResolucionAprobacionCtrl', function (amazonAdministrativaRequest,adminMidRequest,contratacion_mid_request,titan_request,$scope,$window,$mdDialog,$translate) {

    var self = this;
    self.CurrentDate = new Date();
    self.Aprobado;

    //Tabla para mostrar los datos básicos de las resoluciones almacenadas dentro del sistema
	self.resolucionesInscritas = {
      paginationPageSizes: [10, 15, 20],
      paginationPageSize: 10,
      enableSorting: true,
      enableFiltering : true,
      enableRowSelection: false,
      enableRowHeaderSelection: false,
      columnDefs : [
        {
            field: 'Id',
            visible : false
        },
        {
            field: 'FechaExpedicion',
            visible : false
        },
        {
            field: 'Estado',
            visible : false
        },
        {
            field: 'Numero',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            width: '10%',
            displayName: $translate.instant('NUMERO')
        },
        {
            field: 'Vigencia',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            width: '15%',
            displayName: $translate.instant('VIGENCIA')
        },
        {
            field: 'Facultad',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            width: '20%',
            displayName: $translate.instant('FACULTAD')
        },
        {
            field: 'NivelAcademico',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            width: '15%',
            displayName: $translate.instant('NIVEL')
        },
        {
            field: 'Dedicacion',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            width: '15%',
            displayName: $translate.instant('DEDICACION')
        },
        {
            field: 'Estado',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            width: '15%',
            displayName: $translate.instant('ESTADO')
        },
        {
            name: $translate.instant('OPCIONES'),
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (row.entity.Estado=="Cancelada") {
                    return 'resolucionCancelada';
                }else if(row.entity.Estado=="Expedida"){
                    return 'resolucionExpedida';
                }
            },
            enableFiltering: false,
            width: '10%',
            //Los botones son mostrados de acuerdo alestado de las resoluciones (ver,aprobar)
            cellTemplate: '<center>' +
               '<a class="ver" ng-click="grid.appScope.verVisualizarResolucion(row)">' +
               '<i title="{{\'VER_BTN\' | translate }}" class="fa fa-eye fa-lg  faa-shake animated-hover"></i></a> ' +
               '<a ng-if="row.entity.Estado==\'Solicitada\'" class="ver" ng-click="grid.appScope.verRealizarAprobacion(row)">' +
               '<i title="{{\'APROBAR_BTN\' | translate }}" class="fa fa-check fa-lg  faa-shake animated-hover"></i></a> ' +
               '</center>'
        }
      ]
    };

    //Funcion para cargar los datos de las resoluciones creadas y almacenadas dentro del sistema
    self.cargarDatosResolucion=function(){
        amazonAdministrativaRequest.get("resolucion_vinculacion").then(function(response){
            self.resolucionesInscritas.data=response.data;
        });
    }

    //Función para realizar la aprobación de la resolución
    $scope.verRealizarAprobacion = function(row){
        console.log(row.entity);
        amazonAdministrativaRequest.get("resolucion/"+ row.entity.Id).then(function(response){
            var Resolucion=response.data;
            console.log(Resolucion);
            var resolucion_estado ={
                FechaRegistro:self.CurrentDate,
                Usuario:"",
                Estado:{
                  Id:5,
                },
                Resolucion:Resolucion
              };
              swal({
                title: 'Confirmar aprobación',
                html: $translate.instant('CONFIRMAR_APROBAR')+'<br>'+
                      $translate.instant('IRREVERSIBLE')+'<br>'+
                      $translate.instant('NUMERO_RESOLUCION')+'<br>'+
                      Resolucion.NumeroResolucion,
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: $translate.instant('APROBAR_BTN')
              }).then((result) => {
                if (result) {
                    self.cambiarEstado(resolucion_estado)
                }
              })
          });
    }

    

    //Función donde se despliega un mensaje de alerta previo a la restauración de la resolución
    $scope.verRestaurarResolucion = function(row){
        swal({
          title: $translate.instant('PREGUNTA_RESTAURAR'),
          html:
            '<p><b>Número: </b>'+row.entity.Numero.toString()+'</p>'+
            '<p><b>Facultad: </b>'+row.entity.Facultad+'</p>'+
            '<p><b>Nivel académico: </b>'+row.entity.NivelAcademico+'</p>'+
            '<p><b>Dedicación: </b>'+row.entity.Dedicacion+'</p>',
          type: 'success',
          showCancelButton: true,
          confirmButtonText: $translate.instant('ACEPTAR'),
          cancelButtonText: $translate.instant('CANCELAR'),
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function () {
            self.restaurarResolucion(row);
            }, function (dismiss) {
            if (dismiss === 'cancel') {
                swal({
                    text: $translate.instant('NO_RESTAURACION_RESOLUCION'),
                    type: 'error'
                })
            }
        })
    }

    //Función para asignar controlador de la vista resolucion_vista.html, donde se pasa por parámetro el id de la resolucion seleccionada con ayuda de $mdDialog
    $scope.verVisualizarResolucion = function(row){
        $mdDialog.show({
            controller: "ResolucionVistaCtrl",
            controllerAs: 'resolucionVista',
            templateUrl: 'views/vinculacionespecial/resolucion_vista.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true,
            fullscreen: true,
            locals: {idResolucion: row.entity.Id}
        })
    }

    //Función para realizar la restauración y verificación de la resolución
    self.restaurarResolucion = function(row){
        amazonAdministrativaRequest.get("resolucion/"+ row.entity.Id).then(function(response){
            var nuevaResolucion=response.data;
            //Cambio de estado y fecha de expedicion de la resolucion en caso de que ya hubiese sido expedida.
            nuevaResolucion.Estado=true;
            nuevaResolucion.FechaExpedicion=null;
            //Se actualizan los datos de la resolución
            amazonAdministrativaRequest.put("resolucion/RestaurarResolucion", nuevaResolucion.Id, nuevaResolucion).then(function(response){
                if(response.data=="OK"){
                    self.cargarDatosResolucion();
                }
            })
        })
    }
    self.cambiarEstado = function(resolucion_estado){
        amazonAdministrativaRequest.post("resolucion_estado", resolucion_estado).then(function(response){
            console.log(response);
            if(response.statusText=="Created"){
                swal(
                    'Felicidades',
                    $translate.instant('APROBADA'),
                    'success'
                  )
            } else {
                swal(
                    'Error',
                    'Ocurrió un error',
                    'error'
                  )
            }
        })
        self.cargarDatosResolucion();
}
    

    //Se hace el llamado de la función para cargar datos de resoluciones
    self.cargarDatosResolucion();

  });