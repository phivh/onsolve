
function data(state = [], action) {
    switch (action.type) {
      case "FETCHING":
        return [];
      case "FETCHED":
        var filtered = [...action.data.data.data.results].map((item) => {
          var thumb = '../assets/images/missing-full.jpg';
  
          if (!item.thumbnail.path.includes('image_not_available')) {
            thumb = `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`;
          }
  
          item.thumb = thumb;
  
          return item;
        });
        return filtered;
      case "STARTED":
          return action.start;
      default:
        return state;
    }
    
}
  
export default data;
  