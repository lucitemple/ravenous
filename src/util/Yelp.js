const apiKey = `${process.env.REACT_APP_YELP_API_KEY}`;
// githubPages url https://lucitemple.github.io/ravenous/
// netlify url https://ravenous-restuarants.netlify.app/

export const Yelp = {
  search(term, location, sortBy) {
    // temporarily bypass CORS restrictions https://cors-anywhere.herokuapp.com/corsdemo
    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
/*         method: 'GET',
        mode: "no-cors", */
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        //check if the jsonResponse has a businesses key
        // to ensure a valid response has been returned from YelpAPI
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              rating: business.rating,
              id: business.id,
              category: business.categories[0].title,
              reviewCount: business.review_count,
              name: business.name,
              url: business.url,
              imageSrc: business.image_url,
              city: business.location.city,
              state: business.location.state,
              country: business.location.country,
              zipCode: business.location.zip_code,
              address: business.location.address1,
            };
          });
        }
      });
  },
};
