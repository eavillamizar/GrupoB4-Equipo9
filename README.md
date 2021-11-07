## GrupoB4-Equipo9
*Aplicacion web para Outsourcing de Contabilidad*

# Bienvenidos a AppContable

AppContable es un aplicativo web que le permitirá tercerizar sus procesos de contabilidad a empresas myPymes y unipersonales.

## Nombre de la aplicación:

- AppContable.

# Definición de Roles

A continuación se listan los colaboradores e integrantes del grupo de desarrollo del aplicativo y su rol:

|Rol| Integrante |
|--|--|
| Product Owner | Álvaro Javier Hernández Rueda |
| Scrum Master | Miguel Angel Vivas |
| Scrum Team | Jairo Solano |
| Scrum Team | Lina Marcela Perilla Barrios |
| Scrum Team | Hanner Jose García López |
| Scrum Team | Diego Alejandro Garcia Cardenas |
| Scrum Team | Edgar Villamizar |

## Objetivo General

Implementar un aplicativo web que ayude a los departamentos de contabilidad de empresas pequeñas y/o unipersonales en el procesamiento de transacciones contables diarias tales como consulta, creación, eliminación y actualización de registro de compras, ventas y gastos.

###  Objetivos Específicos

1. Crear un formulario que permita reducir el tiempo que toma a los usuarios crear, modificar o eliminar un registro contable. 
2. Recopilar información de las transacciones contables que ingresan al sistema de la empresa que permita una mejor búsqueda y control de los datos, y generar registro contable automático.
3. Implementar una interfaz gráfica que permita una interacción fácil, fluida y segura.

## Misión.

Crear un aplicativo web que permita tercerizar procesos de contabilidad a empresas myPymes y unipersonales.

## PRODUCT BACKLOG

| Id | Tipo | Descripcion | 
|--|--|--|
| **EP-01** | **Epica** | **Registro de usuarios** |
| HU-01 | Historia  | Como Administrador Quiero tener acceso a todo el sistema Para autorizar transacciones previamente creadas por los usuarios |
| HU-02 | Historia | Como administrador Quiero que el ingreso de los usuarios a la aplicación se realice por medio de una vista de inicio de sesión o registro para tener control sobre el acceso y las transacciones |
| HU-03 | Historia | Yo como Administrador del sistema requiero crear y autorizar los perfiles de usuario para acceso y funcionalidades de la aplicacion. |
| TK-01 | Tarea | Implementar el boton de registro inicial de usuario |
| TK-02 | Tarea | Implementar inicio de sesion, que incluya campo de username y password |
| TK-03 | Tarea | Implemenar una vista de registro de usuario nuevo |
| **EP-02** | **Epica** | **Procesamiento de asiento contable. Registro Contable.** |
| HU-04 | Historia | Yo como contador quiero que por cada tipo de asiento contable (ejemplo comprobante de egresos) se registre un consecutivo, la fecha, el contenido, codigo contable y un tercero, para que se refleje cada transaccion en la contabilidad de la empresa |
| HU-05 | Historia | Yo como usuario quiero una interfaz grafica tipo formulario que me permita crear, modificar, eliminar y consultar la informacion necesaria de un asiento contable |
| HU-06 | Historia | Como contador Quiero registrar los ingresos y egresos Para mantener bajo control el estado contable y obtener la utilidad |
| TK-04 | Tarea | Implementar el boton de creacion de asiento contable |
| TK-05 | Tarea | Implementar el boton de consulta de asiento contable |
| TK-06 | Tarea | Implementar el boton de actualizacion de asiento contable |
| TK-08 | Tarea | Implementar el boton de eliminacion de asiento contable |
| TK-09 | Tarea | Implementar una vista donde se me muestre un formulario con todos los campos necearios para crear un asiento contable *(fecha, contenido, codigo contable, consecutivo, tercero)* |
| **EP-03** | **Epica** | **Informes contables.** |
| HU-07 | Historia | Como usuario quiero realizar consultas de los movimientos contables diarios, mensual, anual para llevar un control de la contabilidad |
| TK-07 | Tarea | Implementar una vista de previsualizacion de Informe Contable |
