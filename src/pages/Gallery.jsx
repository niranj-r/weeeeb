function Gallery() {
  const images = [
    "https://picsum.photos/seed/techfest1/300/200",
    "https://picsum.photos/seed/techfest2/300/200",
    "https://picsum.photos/seed/techfest3/300/200",
    "https://picsum.photos/seed/techfest4/300/200",
    "https://picsum.photos/seed/techfest5/300/200",
    "https://picsum.photos/seed/techfest6/300/200"
  ];

  return (
    <main className="page-section-secondary">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`TechFest Gallery ${index + 1}`} className="gallery-image" />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Gallery;
