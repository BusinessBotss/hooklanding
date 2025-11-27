# 🎯 HOOK Landing Page - Configuración Requerida

Este archivo contiene todas las URLs y secretos que necesitas configurar para que la landing page funcione correctamente.

## 📋 Checklist de Configuración

### 1. Google Apps Script Web App URL

**Archivo a modificar:** `js/main.js`

**Línea:** ~142

**Buscar:**
```javascript
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
```

**Reemplazar con:**
```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/TU_ID_AQUI/exec";
```

**¿Cómo obtener esta URL?**
1. Sigue los pasos en `docs/SETUP.md` para crear y desplegar el Google Apps Script
2. Al finalizar el deployment, Google te dará una URL que termina en `/exec`
3. Copia esa URL completa y reemplázala en `js/main.js`

**Estado:** ❌ NO CONFIGURADO

---

### 2. Email de Remitente (Opcional)

**Archivo a modificar:** `google-apps-script/Code.gs`

**Línea:** ~23

**Buscar:**
```javascript
const EMAIL_REMITENTE = "tu@email.com";
```

**Reemplazar con:**
```javascript
const EMAIL_REMITENTE = "tu-email-real@gmail.com";
```

**Nota:** Este email debe ser el mismo con el que creaste el Google Apps Script.

**Estado:** ❌ NO CONFIGURADO

---

### 3. Activar Emails de Confirmación (Opcional)

**Archivo a modificar:** `google-apps-script/Code.gs`

**Línea:** ~26

**Buscar:**
```javascript
const ENVIAR_EMAIL_CONFIRMACION = false;
```

**Cambiar a:**
```javascript
const ENVIAR_EMAIL_CONFIRMACION = true;
```

**Nota:** Solo activa esto después de configurar el `EMAIL_REMITENTE` correctamente.

**Estado:** ❌ DESACTIVADO (por defecto)

---

### 4. Nombre de la Hoja de Google Sheets (Opcional)

**Archivo a modificar:** `google-apps-script/Code.gs`

**Línea:** ~20

**Buscar:**
```javascript
const NOMBRE_HOJA = "Hoja 1";
```

**Cambiar si tu hoja tiene otro nombre:**
```javascript
const NOMBRE_HOJA = "Registros HOOK";
```

**Nota:** Por defecto, Google Sheets crea hojas con el nombre "Hoja 1". Solo cambia esto si renombraste tu hoja.

**Estado:** ✅ CONFIGURADO (valor por defecto)

---

## 🔍 Verificación de Configuración

### Checklist Final

Antes de lanzar la landing page, verifica que:

- [ ] Google Apps Script está desplegado como Web App
- [ ] La URL del script está configurada en `js/main.js`
- [ ] El formulario se envía correctamente (prueba con datos de test)
- [ ] Los datos aparecen en Google Sheets
- [ ] (Opcional) Los emails de confirmación se envían correctamente

---

## 🚀 Próximos Pasos

1. **Configurar Google Sheets:**
   - Lee `docs/SETUP.md` para instrucciones paso a paso
   - Crea tu Google Sheet
   - Copia el código de `google-apps-script/Code.gs`
   - Despliega como Web App

2. **Actualizar la URL:**
   - Copia la URL del Web App
   - Pégala en `js/main.js`

3. **Probar:**
   - Abre `index.html` en tu navegador
   - Completa el formulario con datos de prueba
   - Verifica que los datos aparezcan en Google Sheets

4. **Desplegar:**
   - Sube los archivos a tu hosting
   - Verifica que todo funcione en producción

---

## 📞 Soporte

Si tienes problemas con la configuración:

1. Revisa `docs/SETUP.md` para instrucciones detalladas
2. Verifica que todas las URLs estén correctamente copiadas
3. Revisa la consola del navegador para errores (F12)
4. Verifica los logs en Google Apps Script

---

**Última actualización:** 2024-11-28
