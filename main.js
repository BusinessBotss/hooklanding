// ═══════════════════════════════════════════════════════════════════════════
// HOOK EDITORIAL LANDING PAGE - JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN DEL ELEMENT SDK
// ═══════════════════════════════════════════════════════════════════════════

const defaultConfig = {
    // Marca y navegación
    logo_text: "HOOK.",
    nav_home: "Home",
    nav_events: "Events",
    nav_about: "About",
    nav_contact: "Contact",
    
    // Hero
    hero_title: "Conexiones Auténticas en Espacios Extraordinarios",
    hero_subtitle: "HOOK es donde las personas más interesantes se encuentran en los lugares más memorables de la ciudad.",
    hero_cta: "Únete al Siguiente Evento",
    
    // What is HOOK
    what_title: "Qué es HOOK",
    what_content: "HOOK no es una aplicación de citas. No es networking convencional. Es una cuidadosa curaduría de experiencias donde personas fascinantes se encuentran en contextos excepcionales.",
    
    // How it works
    how_title: "Cómo Funciona",
    how_step1_title: "Aplica a un Evento",
    how_step1_text: "Explora nuestros próximos eventos y elige el que más resuene contigo. Cada experiencia es única: desde cenas íntimas en azoteas hasta encuentros culturales en galerías de arte. Completa una breve aplicación que nos ayude a conocerte mejor.",
    how_step2_title: "Recibe tu Invitación",
    how_step2_text: "Nuestro equipo revisa cuidadosamente cada aplicación para curar un grupo diverso y complementario. Si eres seleccionado, recibirás una invitación personalizada con todos los detalles del evento y una introducción al contexto de la experiencia.",
    how_step3_title: "Vive la Experiencia",
    how_step3_text: "Llega al evento con mente abierta y curiosidad genuina. Disfruta de conversaciones significativas, descubre perspectivas fascinantes y construye conexiones auténticas. Cada experiencia está diseñada para facilitar interacciones naturales y memorables.",
    
    // Philosophy
    philosophy_title: "Nuestra Filosofía",
    philosophy_content: "En un mundo saturado de conexiones superficiales, HOOK crea espacios para profundidad. Creemos que las personas más interesantes merecen encuentros extraordinarios. Que la serendipia funciona mejor cuando está cuidadosamente cultivada. Que el contexto importa tanto como las personas. Y que las mejores historias comienzan con un \"Nos conocimos en un evento de HOOK...\"",
    
    // Form
    form_title: "Solicita tu Invitación",
    form_submit: "Enviar Solicitud",
    
    // Footer
    footer_tagline: "Donde las mejores historias comienzan."
};

// Función que actualiza el DOM cuando cambia la configuración
async function onConfigChange(config) {
    // Marca y navegación
    const logoElement = document.getElementById('logo');
    if (logoElement) logoElement.textContent = config.logo_text || defaultConfig.logo_text;
    
    const navHomeElement = document.getElementById('navHome');
    if (navHomeElement) navHomeElement.textContent = config.nav_home || defaultConfig.nav_home;
    
    const navEventsElement = document.getElementById('navEvents');
    if (navEventsElement) navEventsElement.textContent = config.nav_events || defaultConfig.nav_events;
    
    const navAboutElement = document.getElementById('navAbout');
    if (navAboutElement) navAboutElement.textContent = config.nav_about || defaultConfig.nav_about;
    
    const navContactElement = document.getElementById('navContact');
    if (navContactElement) navContactElement.textContent = config.nav_contact || defaultConfig.nav_contact;
    
    // Hero
    const heroTitleElement = document.getElementById('heroTitle');
    if (heroTitleElement) heroTitleElement.textContent = config.hero_title || defaultConfig.hero_title;
    
    const heroSubtitleElement = document.getElementById('heroSubtitle');
    if (heroSubtitleElement) heroSubtitleElement.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
    
    const heroCtaElement = document.getElementById('heroCta');
    if (heroCtaElement) heroCtaElement.textContent = config.hero_cta || defaultConfig.hero_cta;
    
    // What is HOOK
    const whatTitleElement = document.getElementById('whatTitle');
    if (whatTitleElement) whatTitleElement.textContent = config.what_title || defaultConfig.what_title;
    
    const whatContentElement = document.getElementById('whatContent');
    if (whatContentElement) whatContentElement.textContent = config.what_content || defaultConfig.what_content;
    
    // How it works
    const howTitleElement = document.getElementById('howTitle');
    if (howTitleElement) howTitleElement.textContent = config.how_title || defaultConfig.how_title;
    
    const howStep1TitleElement = document.getElementById('howStep1Title');
    if (howStep1TitleElement) howStep1TitleElement.textContent = config.how_step1_title || defaultConfig.how_step1_title;
    
    const howStep1TextElement = document.getElementById('howStep1Text');
    if (howStep1TextElement) howStep1TextElement.textContent = config.how_step1_text || defaultConfig.how_step1_text;
    
    const howStep2TitleElement = document.getElementById('howStep2Title');
    if (howStep2TitleElement) howStep2TitleElement.textContent = config.how_step2_title || defaultConfig.how_step2_title;
    
    const howStep2TextElement = document.getElementById('howStep2Text');
    if (howStep2TextElement) howStep2TextElement.textContent = config.how_step2_text || defaultConfig.how_step2_text;
    
    const howStep3TitleElement = document.getElementById('howStep3Title');
    if (howStep3TitleElement) howStep3TitleElement.textContent = config.how_step3_title || defaultConfig.how_step3_title;
    
    const howStep3TextElement = document.getElementById('howStep3Text');
    if (howStep3TextElement) howStep3TextElement.textContent = config.how_step3_text || defaultConfig.how_step3_text;
    
    // Philosophy
    const philosophyTitleElement = document.getElementById('philosophyTitle');
    if (philosophyTitleElement) philosophyTitleElement.textContent = config.philosophy_title || defaultConfig.philosophy_title;
    
    const philosophyContentElement = document.getElementById('philosophyContent');
    if (philosophyContentElement) philosophyContentElement.textContent = config.philosophy_content || defaultConfig.philosophy_content;
    
    // Form
    const formTitleElement = document.getElementById('formTitle');
    if (formTitleElement) formTitleElement.textContent = config.form_title || defaultConfig.form_title;
    
    const formSubmitElement = document.getElementById('formSubmit');
    if (formSubmitElement) formSubmitElement.textContent = config.form_submit || defaultConfig.form_submit;
    
    // Footer
    const footerTaglineElement = document.getElementById('footerTagline');
    if (footerTaglineElement) footerTaglineElement.textContent = config.footer_tagline || defaultConfig.footer_tagline;
}

// Mapeo de capabilities
function mapToCapabilities(config) {
    return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

// Mapeo de valores para el panel de edición
function mapToEditPanelValues(config) {
    return new Map([
        ["logo_text", config.logo_text || defaultConfig.logo_text],
        ["nav_home", config.nav_home || defaultConfig.nav_home],
        ["nav_events", config.nav_events || defaultConfig.nav_events],
        ["nav_about", config.nav_about || defaultConfig.nav_about],
        ["nav_contact", config.nav_contact || defaultConfig.nav_contact],
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["hero_cta", config.hero_cta || defaultConfig.hero_cta],
        ["what_title", config.what_title || defaultConfig.what_title],
        ["what_content", config.what_content || defaultConfig.what_content],
        ["how_title", config.how_title || defaultConfig.how_title],
        ["how_step1_title", config.how_step1_title || defaultConfig.how_step1_title],
        ["how_step1_text", config.how_step1_text || defaultConfig.how_step1_text],
        ["how_step2_title", config.how_step2_title || defaultConfig.how_step2_title],
        ["how_step2_text", config.how_step2_text || defaultConfig.how_step2_text],
        ["how_step3_title", config.how_step3_title || defaultConfig.how_step3_title],
        ["how_step3_text", config.how_step3_text || defaultConfig.how_step3_text],
        ["philosophy_title", config.philosophy_title || defaultConfig.philosophy_title],
        ["philosophy_content", config.philosophy_content || defaultConfig.philosophy_content],
        ["form_title", config.form_title || defaultConfig.form_title],
        ["form_submit", config.form_submit || defaultConfig.form_submit],
        ["footer_tagline", config.footer_tagline || defaultConfig.footer_tagline]
    ]);
}

// Inicialización del Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE GOOGLE SHEETS
// ═══════════════════════════════════════════════════════════════════════════

// ⚠️ IMPORTANTE: Reemplaza esta URL con la URL de tu Google Apps Script Web App
// La URL debe terminar en /exec
// Ejemplo: "https://script.google.com/macros/s/ABC123.../exec"
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// ═══════════════════════════════════════════════════════════════════════════
// MANEJO DEL FORMULARIO
// ═══════════════════════════════════════════════════════════════════════════

const form = document.querySelector("#hookForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Validar que la URL de Google Script esté configurada
        if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
            showMessage("error", "⚠️ Error de configuración: La URL de Google Apps Script no está configurada. Por favor, consulta SECRETS.md");
            return;
        }
        
        // Deshabilitar botón durante el envío
        const submitButton = document.getElementById('formSubmit');
        const originalText = submitButton.textContent;
        submitButton.textContent = "Enviando...";
        submitButton.disabled = true;
        
        // Enviar datos a Google Sheets
        fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                showMessage("success", "¡Solicitud enviada con éxito! Te contactaremos pronto.");
                form.reset();
            } else {
                showMessage("error", "Hubo un error al enviar. Por favor intenta de nuevo.");
            }
            
            // Restaurar botón
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error("Error:", error);
            showMessage("error", "Hubo un error al enviar. Por favor intenta de nuevo.");
            
            // Restaurar botón
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNCIÓN PARA MOSTRAR MENSAJES
// ═══════════════════════════════════════════════════════════════════════════

function showMessage(type, text) {
    // Eliminar mensaje anterior si existe
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const message = document.createElement('div');
    message.className = 'form-message';
    
    const bgColor = type === "success" 
        ? "rgba(189, 0, 11, 0.1)" 
        : "rgba(189, 0, 11, 0.15)";
    
    message.style.cssText = `
        padding: 20px;
        margin-top: 20px;
        background-color: ${bgColor};
        border: 1px solid #bd000b;
        text-align: center;
        font-family: var(--font-sans);
        color: var(--color-text);
        animation: fadeInUp 0.5s ease-out;
    `;
    message.textContent = text;
    
    // Insertar después del formulario
    form.parentNode.insertBefore(message, form.nextSibling);
    
    // Eliminar mensaje después de 5 segundos
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => message.remove(), 500);
    }, 5000);
}

// ═══════════════════════════════════════════════════════════════════════════
// NAVEGACIÓN SUAVE
// ═══════════════════════════════════════════════════════════════════════════

// Añadir scroll suave a todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ═══════════════════════════════════════════════════════════════════════════
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 HOOK Landing Page cargada correctamente');
    
    // Verificar configuración de Google Script
    if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        console.warn('⚠️ ADVERTENCIA: Google Apps Script URL no configurada. El formulario no funcionará hasta que configures la URL en js/main.js');
    }
});

// ═══════════════════════════════════════════════════════════════════════════
// FIN DEL JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════
