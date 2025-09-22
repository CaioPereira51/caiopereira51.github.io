export function useSocialLinks() {
  const openExternalLink = (url, target = '_blank') => {
    if (typeof window !== 'undefined') {
      const link = window.open(url, target, 'noopener,noreferrer');
      if (!link) {
        link.rel = 'noopener noreferrer';
      }
    }
  };

  const openGitHub = (username = 'CaioPereira51') => {
    openExternalLink(`https://github.com/${username}`);
  };

  const openLinkedIn = (profile = 'caiopereira51') => {
    openExternalLink(`https://www.linkedin.com/in/${profile}/`);
  };

  const openEmail = (email = 'dev.caiop@gmail.com') => {
    if (typeof window !== 'undefined') {
      window.open(`mailto:${email}`);
    }
  };

  const openWhatsApp = (phone = '5537999567472') => {
    openExternalLink(`https://wa.me/${phone}`);
  };

  const openFile = (fileUrl) => {
    openExternalLink(fileUrl);
  };

  return {
    openGitHub,
    openLinkedIn,
    openEmail,
    openWhatsApp,
    openFile,
    openExternalLink
  };
}