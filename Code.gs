/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * HOOK LANDING PAGE - GOOGLE APPS SCRIPT
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este script maneja los envíos del formulario de la landing page HOOK
 * y los guarda en Google Sheets. También incluye funcionalidades para
 * enviar emails de confirmación y generar reportes.
 * 
 * FUNCIONES PRINCIPALES:
 * - doPost(): Recibe datos del formulario y los guarda en la hoja
 * - doGet(): Crea interfaz web para ver registros
 * - enviarEmailConfirmacion(): Envía email automático al registrarse
 * - generarReporte(): Crea reporte de registros por evento
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN GLOBAL
// ═══════════════════════════════════════════════════════════════════════════════

// Nombre de la hoja donde se guardarán los registros
const NOMBRE_HOJA = "Hoja 1"; // Cambia esto si tu hoja tiene otro nombre

// Email desde donde se enviarán las confirmaciones (debe ser tu email de Google)
const EMAIL_REMITENTE = "tu@email.com"; // Cambia esto por tu email

// Activar/desactivar email automático de confirmación
const ENVIAR_EMAIL_CONFIRMACION = false; // Cambia a true para activar emails

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN PRINCIPAL: RECIBIR DATOS DEL FORMULARIO
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Función doPost() - Se ejecuta cuando el formulario envía datos
 * Esta es la función principal que conecta el formulario con Google Sheets
 */
function doPost(e) {
  try {
    // Obtener la hoja activa
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_HOJA);
    
    // Si no existe la hoja, crearla
    if (!hoja) {
      hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
      hoja.setName(NOMBRE_HOJA);
    }
    
    // Si es la primera vez, crear encabezados
    if (hoja.getLastRow() === 0) {
      hoja.appendRow([
        "Fecha y Hora",
        "Nombre",
        "Email",
        "Edad",
        "Ciudad",
        "Evento Seleccionado",
        "Estado"
      ]);
      
      // Formatear encabezados
      var headerRange = hoja.getRange(1, 1, 1, 7);
      headerRange.setBackground("#bd000b");
      headerRange.setFontColor("#e4e2dd");
      headerRange.setFontWeight("bold");
    }
    
    // Extraer datos del formulario
    var datos = e.parameter;
    var timestamp = new Date();
    
    // Preparar fila de datos
    var nuevaFila = [
      timestamp,                    // Fecha y hora de registro
      datos.nombre || "",          // Nombre del solicitante
      datos.email || "",           // Email del solicitante
      datos.edad || "",            // Edad del solicitante
      datos.ciudad || "",          // Ciudad del solicitante
      datos.evento || "",          // Evento seleccionado
      "Pendiente"                  // Estado inicial
    ];
    
    // Añadir fila a la hoja
    hoja.appendRow(nuevaFila);
    
    // Enviar email de confirmación si está activado
    if (ENVIAR_EMAIL_CONFIRMACION && datos.email) {
      enviarEmailConfirmacion(datos.email, datos.nombre, datos.evento);
    }
    
    // Registrar en log para debugging
    console.log("Nuevo registro guardado: " + datos.nombre + " - " + datos.email);
    
    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        message: "Registro guardado correctamente",
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Registrar error
    console.error("Error al procesar formulario: " + error.toString());
    
    // Retornar respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        message: "Error al guardar registro: " + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN: CREAR INTERFAZ WEB PARA VER REGISTROS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Función doGet() - Crea una página web simple para visualizar registros
 * Puedes acceder a esta página desde la URL de tu Web App
 */
function doGet(e) {
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_HOJA);
    var datos = hoja.getDataRange().getValues();
    
    // Crear HTML de la página
    var html = '<html><head>';
    html += '<meta charset="UTF-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<title>HOOK - Panel de Registros</title>';
    html += '<style>';
    html += 'body { font-family: Arial, sans-serif; padding: 20px; background: #1a171b; color: #e4e2dd; }';
    html += 'h1 { color: #bd000b; }';
    html += 'table { width: 100%; border-collapse: collapse; margin-top: 20px; }';
    html += 'th, td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(228, 226, 221, 0.1); }';
    html += 'th { background-color: #bd000b; color: #e4e2dd; }';
    html += 'tr:hover { background-color: rgba(228, 226, 221, 0.05); }';
    html += '.stats { background: rgba(228, 226, 221, 0.05); padding: 15px; margin-bottom: 20px; border-radius: 4px; }';
    html += '</style>';
    html += '</head><body>';
    
    html += '<h1>HOOK - Panel de Registros</h1>';
    
    // Estadísticas rápidas
    html += '<div class="stats">';
    html += '<p><strong>Total de Registros:</strong> ' + (datos.length - 1) + '</p>';
    html += '<p><strong>Última actualización:</strong> ' + new Date().toLocaleString('es-ES') + '</p>';
    html += '</div>';
    
    // Tabla de datos
    html += '<table>';
    
    // Encabezados
    html += '<tr>';
    for (var j = 0; j < datos[0].length; j++) {
      html += '<th>' + datos[0][j] + '</th>';
    }
    html += '</tr>';
    
    // Filas de datos
    for (var i = 1; i < datos.length; i++) {
      html += '<tr>';
      for (var j = 0; j < datos[i].length; j++) {
        html += '<td>' + datos[i][j] + '</td>';
      }
      html += '</tr>';
    }
    
    html += '</table>';
    html += '</body></html>';
    
    return HtmlService.createHtmlOutput(html);
    
  } catch (error) {
    return HtmlService.createHtmlOutput('<h1>Error al cargar datos</h1><p>' + error.toString() + '</p>');
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN: ENVIAR EMAIL DE CONFIRMACIÓN
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Envía un email de confirmación al usuario que se registró
 * 
 * @param {string} emailDestino - Email del destinatario
 * @param {string} nombre - Nombre del destinatario
 * @param {string} evento - Evento al que se registró
 */
function enviarEmailConfirmacion(emailDestino, nombre, evento) {
  try {
    var asunto = "✓ Confirmación de Registro - HOOK";
    
    var mensaje = "Hola " + nombre + ",\n\n";
    mensaje += "Gracias por tu interés en HOOK.\n\n";
    mensaje += "Hemos recibido tu solicitud para el evento:\n";
    mensaje += "→ " + evento + "\n\n";
    mensaje += "Nuestro equipo revisará tu aplicación y te contactaremos pronto con más detalles.\n\n";
    mensaje += "¿Preguntas? Responde a este email.\n\n";
    mensaje += "—\n";
    mensaje += "El equipo de HOOK\n";
    mensaje += "Donde las mejores historias comienzan.";
    
    // Enviar email
    GmailApp.sendEmail(emailDestino, asunto, mensaje, {
      name: 'HOOK',
      replyTo: EMAIL_REMITENTE
    });
    
    console.log("Email enviado a: " + emailDestino);
    
  } catch (error) {
    console.error("Error al enviar email: " + error.toString());
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN: GENERAR REPORTE DE REGISTROS POR EVENTO
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Genera un reporte con estadísticas de registros por evento
 * Ejecuta esta función manualmente desde el editor de Apps Script
 */
function generarReporte() {
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_HOJA);
    var datos = hoja.getDataRange().getValues();
    
    // Crear objeto para contar registros por evento
    var eventosPorConteo = {};
    
    // Saltar la fila de encabezados (i = 1)
    for (var i = 1; i < datos.length; i++) {
      var evento = datos[i][5]; // Columna F (índice 5) = Evento
      
      if (evento) {
        if (eventosPorConteo[evento]) {
          eventosPorConteo[evento]++;
        } else {
          eventosPorConteo[evento] = 1;
        }
      }
    }
    
    // Mostrar reporte en log
    console.log("═══════════════════════════════════════════════════════");
    console.log("REPORTE DE REGISTROS POR EVENTO");
    console.log("═══════════════════════════════════════════════════════");
    console.log("Total de registros: " + (datos.length - 1));
    console.log("");
    
    for (var evento in eventosPorConteo) {
      console.log(evento + ": " + eventosPorConteo[evento] + " registros");
    }
    
    console.log("═══════════════════════════════════════════════════════");
    
    // También crear una hoja nueva con el reporte
    var hojaReporte = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reporte");
    
    if (!hojaReporte) {
      hojaReporte = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Reporte");
    } else {
      hojaReporte.clear();
    }
    
    // Escribir encabezados
    hojaReporte.appendRow(["Evento", "Número de Registros"]);
    
    // Escribir datos
    for (var evento in eventosPorConteo) {
      hojaReporte.appendRow([evento, eventosPorConteo[evento]]);
    }
    
    // Formatear
    hojaReporte.getRange(1, 1, 1, 2).setBackground("#bd000b").setFontColor("#e4e2dd").setFontWeight("bold");
    hojaReporte.autoResizeColumns(1, 2);
    
    console.log("Reporte creado en la hoja 'Reporte'");
    
  } catch (error) {
    console.error("Error al generar reporte: " + error.toString());
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN: ACTUALIZAR ESTADO DE REGISTRO
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Actualiza el estado de un registro (Pendiente, Aprobado, Rechazado)
 * 
 * @param {number} fila - Número de fila a actualizar (empezando desde 2)
 * @param {string} nuevoEstado - Nuevo estado ("Aprobado", "Rechazado", "Pendiente")
 */
function actualizarEstado(fila, nuevoEstado) {
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_HOJA);
    
    // Columna G (índice 7) = Estado
    hoja.getRange(fila, 7).setValue(nuevoEstado);
    
    console.log("Estado actualizado en fila " + fila + " a: " + nuevoEstado);
    
  } catch (error) {
    console.error("Error al actualizar estado: " + error.toString());
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN: EXPORTAR DATOS A CSV
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Crea un archivo CSV con todos los registros en tu Google Drive
 */
function exportarACSV() {
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_HOJA);
    var datos = hoja.getDataRange().getValues();
    
    // Crear contenido CSV
    var csv = "";
    
    for (var i = 0; i < datos.length; i++) {
      var fila = datos[i];
      var filaCSV = fila.map(function(celda) {
        return '"' + celda + '"';
      }).join(",");
      csv += filaCSV + "\n";
    }
    
    // Crear archivo en Drive
    var nombreArchivo = "HOOK_Registros_" + new Date().toISOString().split('T')[0] + ".csv";
    var archivo = DriveApp.createFile(nombreArchivo, csv, MimeType.CSV);
    
    console.log("Archivo CSV creado: " + nombreArchivo);
    console.log("URL: " + archivo.getUrl());
    
    return archivo.getUrl();
    
  } catch (error) {
    console.error("Error al exportar CSV: " + error.toString());
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// MENÚ PERSONALIZADO EN GOOGLE SHEETS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Crea un menú personalizado en Google Sheets para acceso rápido
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🎯 HOOK Admin')
      .addItem('📊 Ver Dashboard Web', 'abrirDashboard')
      .addSeparator()
      .addItem('📈 Generar Reporte General', 'generarReporte')
      .addSeparator()
      .addItem('📥 Exportar a CSV', 'exportarACSV')
      .addToUi();
}

/**
 * Abre el dashboard web en una nueva ventana
 */
function abrirDashboard() {
  var url = ScriptApp.getService().getUrl();
  var html = '<script>window.open("' + url + '", "_blank");</script>';
  var ui = HtmlService.createHtmlOutput(html);
  SpreadsheetApp.getUi().showModalDialog(ui, 'Abriendo Dashboard...');
}

// ═══════════════════════════════════════════════════════════════════════════════
// FIN DEL CÓDIGO
// ═══════════════════════════════════════════════════════════════════════════════
