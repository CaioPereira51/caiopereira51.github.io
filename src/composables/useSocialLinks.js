export function useSocialLinks() {
  const getGitHubUrl = (username = 'CaioPereira51') => `https://github.com/${username}`;
  const getLinkedInUrl = (profile = 'caiopereira51') => `https://www.linkedin.com/in/${profile}/`;
  const getEmailUrl = (email = 'dev.caiop@gmail.com') => `mailto:${email}`;
  const getWhatsAppUrl = (phone = '5537999567472') => `https://wa.me/${phone}`;

  const openExternalLink = (url, target = '_blank') => {
    if (typeof window === 'undefined' || !url) {
      return false;
    }

    const features = target === '_blank' ? 'noopener,noreferrer' : undefined;
    const newWindow = window.open(url, target, features);
    if (newWindow) {
      return true;
    }

    if (target === '_blank') {
      window.location.assign(url);
      return false;
    }

    window.location.href = url;
    return false;
  };

  const openGitHub = (username = 'CaioPereira51') => {
    openExternalLink(getGitHubUrl(username));
  };

  const openLinkedIn = (profile = 'caiopereira51') => {
    openExternalLink(getLinkedInUrl(profile));
  };

  const openEmail = (email = 'dev.caiop@gmail.com') => {
    openExternalLink(getEmailUrl(email), '_self');
  };

  const openWhatsApp = (phone = '5537999567472') => {
    openExternalLink(getWhatsAppUrl(phone));
  };

  const openFile = (fileUrl) => {
    openExternalLink(fileUrl);
  };

  return {
    getGitHubUrl,
    getLinkedInUrl,
    getEmailUrl,
    getWhatsAppUrl,
    openGitHub,
    openLinkedIn,
    openEmail,
    openWhatsApp,
    openFile,
    openExternalLink
  };
}