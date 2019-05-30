import fallbackThumb from "../assets/images/missing-full.jpg";
function data(state = [], action) {
  // eslint-disable-next-line
    switch (action.type) {
      case "FETCHING":
        return [];
      case "FETCHED":
        var filtered = [...action.data.data.data.results].map((item) => {
          var thumb = fallbackThumb,
              thumbL = fallbackThumb;
  
          if (!item.thumbnail.path.includes('image_not_available')) {
            thumb = `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`;
            thumbL = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          }
  
          item.thumb = thumb;
          item.thumbL = thumbL;
  
          return item;
        });
        return filtered;
    }
    return state;
}
  
export default data;
  