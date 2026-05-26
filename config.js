const LINKS = {
  // Falta pegar aquí el enlace de la carpeta madre general del sistema empresarial.
  driveMadre: 'DRIVE_URL_CARPETA_MADRE_AQUI',

  // Carpetas principales en Drive
  gobierno: 'https://drive.google.com/drive/folders/10y9DdX9UZSby3Unmb0Xc14odiqZxmkko?usp=sharing',
  documental: 'https://drive.google.com/drive/folders/1LF2-5uvoXxfN_HU-aiPWS3unehl_ENiQ?usp=drive_link',
  sistemas: 'https://drive.google.com/drive/folders/1xCK3JBRbfnV4avSmDmKavNJCAHKig848?usp=drive_link',
  unidades: 'https://drive.google.com/drive/folders/1lAR-YxfSaTIB8vOt9O83iZ-JZq8R32-8?usp=drive_link',
  operacion: 'https://drive.google.com/drive/folders/1LzE5dp3waJP_7o-k4k64nkyae4e_kCyy?usp=drive_link',
  crm: 'https://drive.google.com/drive/folders/1mQ4yeESAcSw3ClpsMZ8iVCHjrzEz1rTe?usp=drive_link',
  marketing: 'https://drive.google.com/drive/folders/1h45dXaopUzOZrJDLjN3k9eFLIl7vvHID?usp=drive_link',
  capacitaciones: 'https://drive.google.com/drive/folders/1VLk421SJWV7zkU8htAPqjJYJkZtroN_z?usp=drive_link',
  souvenirs: 'https://drive.google.com/drive/folders/149Fjh9gJfWFzCnCCJ0qpfXl8hljqr1ZB?usp=drive_link',
  finanzas: 'https://drive.google.com/drive/folders/1TXZN6gk64xjXQA6QJ2HD9c943Sl9BSsa?usp=drive_link',
  automatizacion: 'https://drive.google.com/drive/folders/1LATd7WcnVfsrrR2aznMSYzUWg8S_5GaI?usp=drive_link',
  dashboard: 'https://drive.google.com/drive/folders/1f-8bFlMkx4Yju9VWetkz1KFXHKG9bWBu?usp=drive_link',
  webHtml: 'https://drive.google.com/drive/folders/1nKEsaimDU7OXmhASlk2krtnYto0ACUvU?usp=drive_link',
  legal: 'https://drive.google.com/drive/folders/1sQSLH29iP5R8CDWc-nerPR4qA7ZKPZ5c?usp=drive_link',
  evidencias: 'https://drive.google.com/drive/folders/1mOtXPC_Qdky5-epKc9pOzk1PXbdfEKUn?usp=drive_link',

  // Por ahora universidades apunta a la carpeta general de unidades de negocio.
  universidades: 'https://drive.google.com/drive/folders/1lAR-YxfSaTIB8vOt9O83iZ-JZq8R32-8?usp=drive_link',

  // Pendientes de conexión posterior
  sheetsCRM: 'SHEETS_URL_CRM_AQUI',
  sheetsDashboard: 'SHEETS_URL_DASHBOARD_AQUI',
  formTarea: 'FORM_URL_REGISTRO_TAREA_AQUI',
  formLead: 'FORM_URL_REGISTRO_LEAD_AQUI'
};

function openLink(key){
  const url = LINKS[key];
  if(!url || url.includes('_AQUI')){
    alert('Enlace pendiente de configurar: ' + key);
    return;
  }
  window.open(url,'_blank');
}
