const SpotifyEmbed = (link: any) => {
  const getLink = () => {
    // Check if input is an object with a 'link' key
    if (typeof link === 'object' && link !== null && 'link' in link) {
      return link.link;
    }
    // Otherwise, assume it's already a string
    return link;
  };

  const linkUrl = getLink();

  if (linkUrl === undefined || linkUrl === '') {
    return null;
  }

  return (
    <>
      <iframe
        style={{ borderRadius: '12px' }}
        src={linkUrl}
        width="100%"
        height="352"
        frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
};

export default SpotifyEmbed;
