export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=fTKgjD3hphcXUNMdGAiotFKT47LykLTI`;
    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map((img) => {
      const {
        id,
        title,
        images: {
          downsized_medium: { url },
        },
      } = img;
      return { id, title, url };
    });

    return gifs
  };