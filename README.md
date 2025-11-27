# 🎯 HOOK - Editorial Landing Page

Una landing page minimalista de alto impacto visual, inspirada en revistas editoriales premium como Kinfolk, Cereal y The Gentlewoman. Incluye integración completa con Google Sheets para captura de registros.

![HOOK Landing Page](https://img.shields.io/badge/Status-Ready-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

## ✨ Características

- **Diseño Editorial Premium:** Estética minimalista inspirada en revistas de alto nivel
- **Paleta de Colores Sofisticada:** Negro profundo, textos claros y acentos rojos
- **Tipografía Elegante:** Playfair Display + Inter para máximo impacto
- **Totalmente Responsive:** Adaptado para móvil, tablet y desktop
- **Formulario Funcional:** Integración completa con Google Sheets
- **Animaciones Suaves:** Transiciones refinadas y profesionales
- **SEO Optimizado:** Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
hook-landing/
├── index.html                  # Página principal
├── css/
│   └── styles.css             # Estilos completos
├── js/
│   └── main.js                # JavaScript y lógica del formulario
├── google-apps-script/
│   └── Code.gs                # Script para Google Sheets
├── docs/
│   └── SETUP.md               # Guía de configuración detallada
├── SECRETS.md                 # Lista de configuraciones requeridas
└── README.md                  # Este archivo
```

## 🚀 Inicio Rápido

### 1. Clonar o Descargar

Descarga todos los archivos del proyecto en tu computadora.

### 2. Configurar Google Sheets

Sigue la guía completa en [`docs/SETUP.md`](docs/SETUP.md) para:
- Crear tu Google Sheet
- Configurar Google Apps Script
- Desplegar el Web App
- Obtener la URL de conexión

### 3. Configurar URLs

Edita `js/main.js` y reemplaza:

```javascript
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
```

Con tu URL real de Google Apps Script.

Consulta [`SECRETS.md`](SECRETS.md) para la lista completa de configuraciones.

### 4. Probar Localmente

Abre `index.html` en tu navegador y prueba el formulario.

### 5. Desplegar

Sube los archivos a tu hosting favorito (Netlify, Vercel, GitHub Pages, etc.)

## 🎨 Paleta de Colores

```css
--color-background: #1a171b  /* Negro profundo editorial */
--color-text: #e4e2dd         /* Texto claro */
--color-accent: #bd000b       /* Rojo intenso para CTAs */
--color-soft: #fae1d5         /* Fondos alternos suaves */
```

## 📝 Secciones de la Página

1. **Header:** Navegación minimalista fija
2. **Hero:** Título impactante con CTA principal
3. **Qué es HOOK:** Explicación del concepto
4. **Cómo Funciona:** Proceso en 3 pasos
5. **Filosofía:** Manifiesto editorial
6. **Testimonios:** Voces de usuarios
7. **Eventos:** Próximos encuentros
8. **Formulario:** Registro con Google Sheets
9. **Footer:** Información de contacto

## 🔧 Configuración

### Archivos a Configurar

| Archivo | Qué configurar | Requerido |
|---------|----------------|-----------|
| `js/main.js` | URL de Google Apps Script | ✅ Sí |
| `google-apps-script/Code.gs` | Email remitente | ⚠️ Opcional |
| `google-apps-script/Code.gs` | Activar emails | ⚠️ Opcional |

Ver [`SECRETS.md`](SECRETS.md) para detalles completos.

## 📚 Documentación

- **[SETUP.md](docs/SETUP.md)** - Guía paso a paso de configuración de Google Sheets
- **[SECRETS.md](SECRETS.md)** - Lista de URLs y secretos a configurar

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño editorial con variables CSS
- **Vanilla JavaScript** - Sin dependencias externas
- **Google Apps Script** - Backend para formulario
- **Google Sheets** - Base de datos de registros

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## ✅ Checklist de Deployment

- [ ] Configurar Google Sheet
- [ ] Desplegar Google Apps Script
- [ ] Copiar URL del Web App
- [ ] Actualizar `js/main.js` con la URL
- [ ] Probar formulario localmente
- [ ] Verificar datos en Google Sheets
- [ ] Subir archivos al hosting
- [ ] Probar en producción
- [ ] Verificar responsive en móvil

## 🎯 Funcionalidades del Formulario

### Campos del Formulario

- Nombre completo (requerido)
- Email (requerido)
- Edad (requerido, 18-99)
- Ciudad (requerido)
- Evento de interés (selector, requerido)

### Validación

- Validación HTML5 nativa
- Mensajes de error claros
- Feedback visual en tiempo real

### Después del Envío

- Mensaje de confirmación
- Limpieza automática del formulario
- Email de confirmación (opcional)
- Registro en Google Sheets con timestamp

## 📊 Google Sheets Features

### Datos Guardados

- Fecha y hora del registro
- Nombre, email, edad, ciudad
- Evento seleccionado
- Estado (Pendiente/Aprobado/Rechazado)

### Funciones Disponibles

- **Dashboard Web:** Ver todos los registros en formato tabla
- **Generar Reporte:** Estadísticas por evento
- **Exportar CSV:** Descargar todos los datos
- **Actualizar Estado:** Aprobar/rechazar solicitudes
- **Emails Automáticos:** Confirmaciones opcionales

## 🎨 Personalización

### Cambiar Textos

Todos los textos editables tienen IDs únicos. Puedes modificarlos en:
- `index.html` - Contenido HTML
- `js/main.js` - Configuración del Element SDK

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-background: #1a171b;
    --color-text: #e4e2dd;
    --color-accent: #bd000b;
    --color-soft: #fae1d5;
}
```

### Cambiar Tipografía

Edita las variables de fuentes en `css/styles.css`:

```css
:root {
    --font-serif: 'Playfair Display', 'Georgia', serif;
    --font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}
```

### Añadir/Modificar Eventos

Edita el selector en `index.html` (línea ~165):

```html
<select id="evento" name="evento" class="form-select" required>
    <option value="">Selecciona un evento</option>
    <option value="Tu Nuevo Evento">Tu Nuevo Evento</option>
</select>
```

## 🐛 Troubleshooting

### El formulario no envía datos

1. Verifica que la URL en `js/main.js` esté correcta
2. Asegúrate de que termine en `/exec`
3. Revisa la consola del navegador (F12)

### Los datos no aparecen en Google Sheets

1. Verifica el nombre de la hoja en `Code.gs`
2. Revisa los logs en Apps Script (Executions)
3. Verifica los permisos del script

### Errores de CORS

Asegúrate de que el Google Apps Script esté desplegado con acceso "Anyone".

Ver más en [`docs/SETUP.md`](docs/SETUP.md) sección Troubleshooting.

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para preguntas o problemas:
1. Revisa [`docs/SETUP.md`](docs/SETUP.md)
2. Consulta [`SECRETS.md`](SECRETS.md)
3. Revisa la sección Troubleshooting

## 🎉 Créditos

Diseño inspirado en:
- Kinfolk Magazine
- Cereal Magazine
- The Gentlewoman

Tipografía:
- Playfair Display (Google Fonts)
- Inter (Google Fonts)

---

**Versión:** 1.0.0  
**Última actualización:** 2024-11-28  
**Autor:** HOOK Team

---

Hecho con ❤️ para crear conexiones auténticas
