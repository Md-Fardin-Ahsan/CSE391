document.addEventListener('DOMContentLoaded', function() {
    const pageInfo = document.getElementById('pageInfo');
    
    
    const pageURL = window.location.href;
    const lastModifiedDate = document.lastModified;
  
    
    const urlParagraph = document.createElement('p');
    urlParagraph.textContent = `Page URL: ${pageURL}`;
    
    const modifiedDateParagraph = document.createElement('p');
    modifiedDateParagraph.textContent = `Last Modified Date: ${lastModifiedDate}`;
    
    
    pageInfo.appendChild(urlParagraph);
    pageInfo.appendChild(modifiedDateParagraph);
  });
  