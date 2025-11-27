# 📖 HOOK Landing Page - Guía de Configuración Completa

Esta guía te llevará paso a paso por la configuración de Google Sheets y Google Apps Script para que el formulario de la landing page funcione correctamente.

## 📋 Requisitos Previos

- Una cuenta de Google (Gmail)
- Acceso a Google Sheets
- Acceso a Google Apps Script
- Los archivos del proyecto HOOK Landing Page

---

## 🗂️ Paso 1: Crear Google Sheet

### 1.1 Crear Nueva Hoja

1. Ve a [Google Sheets](https://sheets.google.com)
2. Haz clic en **+ Blank** para crear una hoja nueva
3. Nombra la hoja: **"HOOK Registros"** (haz clic en "Untitled spreadsheet" arriba)

### 1.2 Configurar Encabezados (Opcional)

El script creará los encabezados automáticamente la primera vez que reciba datos, pero si quieres crearlos manualmente:

En la **Fila 1**, añade estos encabezados:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Fecha y Hora | Nombre | Email | Edad | Ciudad | Evento Seleccionado | Estado |

**Formato de encabezados (opcional):**
- Selecciona la fila 1
- Color de fondo: `#bd000b` (rojo)
- Color de texto: `#e4e2dd` (blanco roto)
- Texto en negrita

---

## ⚙️ Paso 2: Abrir Google Apps Script

### 2.1 Acceder al Editor

1. En tu Google Sheet, ve al menú superior
2. Haz clic en **Extensiones** → **Apps Script**
3. Se abrirá una nueva pestaña con el editor de Apps Script

### 2.2 Preparar el Editor

1. Verás un archivo llamado `Code.gs` con código de ejemplo
2. **Selecciona TODO el código** (Ctrl+A / Cmd+A)
3. **Bórralo completamente**

---

## 📝 Paso 3: Copiar el Código

### 3.1 Obtener el Código

1. Abre el archivo `google-apps-script/Code.gs` de este proyecto
2. **Copia TODO el contenido** del archivo

### 3.2 Pegar en Apps Script

1. Regresa a la pestaña de Apps Script
2. **Pega el código** en el editor
3. El código debería empezar con:
   ```javascript
   /**
    * ═══════════════════════════════════════════════════════════════════════════════
    * HOOK LANDING PAGE - GOOGLE APPS SCRIPT
    * ═══════════════════════════════════════════════════════════════════════════════
   ```

### 3.3 Guardar el Proyecto

1. Haz clic en el icono de **disco** (💾) o presiona `Ctrl+S` / `Cmd+S`
2. Nombra el proyecto: **"HOOK Form Handler"**
3. Espera a que se guarde (verás "Saved" en la parte superior)

---

## 🔧 Paso 4: Configurar Variables (Opcional)

### 4.1 Configuración del Nombre de la Hoja

En la **línea 20** del código, verás:

```javascript
const NOMBRE_HOJA = "Hoja 1";
```

**Si renombraste tu hoja** en Google Sheets, cámbialo aquí. Por ejemplo:

```javascript
const NOMBRE_HOJA = "Registros";
```

### 4.2 Configuración de Email (Opcional)

En la **línea 23**, verás:

```javascript
const EMAIL_REMITENTE = "tu@email.com";
```

**Cámbialo por tu email real:**

```javascript
const EMAIL_REMITENTE = "tuemailreal@gmail.com";
```

### 4.3 Activar Emails de Confirmación (Opcional)

En la **línea 26**, verás:

```javascript
const ENVIAR_EMAIL_CONFIRMACION = false;
```

Si quieres enviar emails automáticos de confirmación:

```javascript
const ENVIAR_EMAIL_CONFIRMACION = true;
```

**⚠️ Importante:** Solo activa esto después de configurar el `EMAIL_REMITENTE`.

### 4.4 Guardar Cambios

Presiona `Ctrl+S` / `Cmd+S` para guardar los cambios.

---

## 🚀 Paso 5: Desplegar como Web App

### 5.1 Iniciar Deployment

1. En Apps Script, haz clic en **Deploy** (botón azul arriba a la derecha)
2. Selecciona **New deployment**

### 5.2 Configurar Deployment

1. Haz clic en el icono de **engranaje** ⚙️ al lado de "Select type"
2. Selecciona **Web app**

### 5.3 Configuración del Web App

Configura los siguientes campos:

**Description:**
```
HOOK Landing Form Handler
```

**Execute as:**
```
Me (tu-email@gmail.com)
```

**Who has access:**
```
Anyone
```

### 5.4 Desplegar

1. Haz clic en **Deploy**
2. Aparecerá un mensaje de autorización

---

## 🔐 Paso 6: Autorizar el Script

### 6.1 Primera Autorización

1. Haz clic en **Authorize access**
2. Selecciona tu cuenta de Google
3. Verás un mensaje: "Google hasn't verified this app"
4. Haz clic en **Advanced**
5. Haz clic en **Go to HOOK Form Handler (unsafe)**
   - No te preocupes, es tu propio script, es seguro

### 6.2 Conceder Permisos

1. Revisa los permisos que solicita el script:
   - Ver y administrar hojas de cálculo
   - Enviar emails (si activaste confirmaciones)
2. Haz clic en **Allow**

---

## 📋 Paso 7: Copiar la URL del Web App

### 7.1 Obtener la URL

1. Después de autorizar, verás una ventana con **"Deployment"**
2. Copia la **"Web app URL"**
3. La URL se verá así:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

**⚠️ MUY IMPORTANTE:**
- La URL debe terminar en `/exec`
- Copia la URL COMPLETA
- Guárdala en un lugar seguro

### 7.2 Cerrar la Ventana

Haz clic en **Done**

---

## 🔗 Paso 8: Conectar con la Landing Page

### 8.1 Abrir el Archivo JavaScript

1. En tu proyecto, abre el archivo `js/main.js`
2. Ve a la **línea 142** aproximadamente
3. Busca esta línea:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```

### 8.2 Reemplazar la URL

Reemplaza `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"` con la URL que copiaste:

```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
```

**Ejemplo completo:**
```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxAbCdEfGhIjKlMnOpQrStUvWxYz/exec";
```

### 8.3 Guardar el Archivo

Guarda `js/main.js` con los cambios.

---

## ✅ Paso 9: Probar la Conexión

### 9.1 Abrir la Landing Page

1. Abre `index.html` en tu navegador
2. Desplázate hasta el formulario de contacto

### 9.2 Enviar Datos de Prueba

Completa el formulario con datos de prueba:

- **Nombre:** Test Usuario
- **Email:** test@ejemplo.com
- **Edad:** 25
- **Ciudad:** Madrid
- **Evento:** Cena en la Azotea - 15 Dic

### 9.3 Verificar Envío

1. Haz clic en **"Enviar Solicitud"**
2. Deberías ver el mensaje: **"¡Solicitud enviada con éxito! Te contactaremos pronto."**

### 9.4 Verificar en Google Sheets

1. Regresa a tu Google Sheet
2. Deberías ver una nueva fila con los datos que enviaste
3. La columna "Estado" debería decir "Pendiente"

**Si ves los datos:** ✅ ¡Configuración exitosa!

**Si NO ves los datos:** ⚠️ Ve a la sección de Troubleshooting abajo

---

## 🎯 Funciones Adicionales

### Ver Dashboard de Registros

1. En Google Sheets, verás un nuevo menú: **🎯 HOOK Admin**
2. Haz clic en **📊 Ver Dashboard Web**
3. Se abrirá una página web con todos los registros en formato tabla

### Generar Reporte

1. En el menú **🎯 HOOK Admin**
2. Haz clic en **📈 Generar Reporte General**
3. Se creará una nueva hoja llamada "Reporte" con estadísticas por evento

### Exportar a CSV

1. En el menú **🎯 HOOK Admin**
2. Haz clic en **📥 Exportar a CSV**
3. Se creará un archivo CSV en tu Google Drive

### Actualizar Estado de un Registro

En Apps Script, puedes ejecutar manualmente:

```javascript
actualizarEstado(2, "Aprobado");  // Aprueba el registro en la fila 2
actualizarEstado(3, "Rechazado"); // Rechaza el registro en la fila 3
```

---

## 🔧 Troubleshooting

### Problema: "Error al enviar"

**Solución:**
1. Verifica que la URL en `js/main.js` esté correctamente copiada
2. Asegúrate de que la URL termine en `/exec`
3. Verifica que no haya espacios al inicio o final de la URL

### Problema: Los datos no aparecen en Google Sheets

**Solución:**
1. Verifica que el nombre de la hoja en `Code.gs` coincida con tu hoja
2. Revisa los logs en Apps Script:
   - Ve a Apps Script
   - Haz clic en **Executions** (icono de reloj)
   - Busca errores en las ejecuciones recientes

### Problema: "Unauthorized" o "Permission denied"

**Solución:**
1. Ve a Apps Script
2. Haz clic en **Deploy** → **Manage deployments**
3. Haz clic en el icono de lápiz ✏️
4. Vuelve a autorizar el script

### Problema: Los emails no se envían

**Solución:**
1. Verifica que `ENVIAR_EMAIL_CONFIRMACION = true`
2. Verifica que `EMAIL_REMITENTE` tenga tu email correcto
3. Asegúrate de que el script tenga permisos para enviar emails

### Problema: "Script function not found: doPost"

**Solución:**
1. Asegúrate de haber copiado TODO el código de `Code.gs`
2. Verifica que el código esté guardado
3. Vuelve a desplegar el Web App

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Google Apps Script](https://developers.google.com/apps-script)
- [Google Sheets API](https://developers.google.com/sheets/api)

### Archivos del Proyecto

- `SECRETS.md` - Lista de configuraciones requeridas
- `README.md` - Guía rápida del proyecto
- `google-apps-script/Code.gs` - Código del script

---

## 🎉 ¡Listo!

Si llegaste hasta aquí y todo funciona, ¡felicidades! Tu landing page HOOK está completamente configurada y lista para recibir registros.

**Próximos pasos:**
1. Personaliza los textos de la landing page
2. Ajusta los eventos según tus necesidades
3. Despliega la landing page en tu hosting
4. Comparte el enlace con tu audiencia

---

**Última actualización:** 2024-11-28
