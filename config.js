const LINKS = {
  driveMadre: 'DRIVE_URL_CARPETA_MADRE_AQUI',
  gobierno: 'DRIVE_URL_GOBIERNO_AQUI',
  documental: 'DRIVE_URL_SISTEMA_DOCUMENTAL_AQUI',
  unidades: 'DRIVE_URL_UNIDADES_NEGOCIO_AQUI',
  universidades: 'DRIVE_URL_UNIVERSIDADES_AQUI',
  souvenirs: 'DRIVE_URL_SOUVENIRS_AQUI',
  crm: 'DRIVE_URL_CRM_AQUI',
  automatizacion: 'DRIVE_URL_AUTOMATIZACION_AQUI',
  dashboard: 'DRIVE_URL_DASHBOARD_AQUI',
  sheetsCRM: 'SHEETS_URL_CRM_AQUI',
  sheetsDashboard: 'SHEETS_URL_DASHBOARD_AQUI',
  formTarea: 'FORM_URL_REGISTRO_TAREA_AQUI',
  formLead: 'FORM_URL_REGISTRO_LEAD_AQUI'
};
function openLink(key){ const url = LINKS[key]; if(!url || url.includes('_AQUI')){ alert('Enlace pendiente de configurar: ' + key); return; } window.open(url,'_blank'); }
